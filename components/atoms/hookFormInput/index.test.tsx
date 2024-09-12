import { describe, expect, test, vi } from 'vitest'

import { mockZodSchemaWPassword } from '@/__mocks__/formMocks'
import IntlMockProvider from '@/__mocks__/intlProvider'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HookFormInput from '.'
import Button from '../button'
import HookFormComponent from '../hookForm'

const onSubmit = vi.fn()

const renderComponent = () =>
     render(
          <IntlMockProvider locale="en">
               <HookFormComponent
                    zodSchema={mockZodSchemaWPassword}
                    defaultValues={{ email: '', password: '' }}
                    submitCallback={onSubmit}
               >
                    <HookFormInput name="email" />
                    <HookFormInput name="password" type="password" />
                    <Button>Submit</Button>
               </HookFormComponent>
          </IntlMockProvider>
     )

describe('Hook Form input test', () => {
     test('test validation failure on inputs', async () => {
          renderComponent()
          const user = userEvent.setup()

          const emailInput = screen.getByTestId('form-input-email')
          expect(emailInput).toBeDefined()
          expect(emailInput).toHaveProperty('value', '')

          const password = screen.getByTestId('form-input-password')
          expect(password).toBeDefined()
          expect(password).toHaveProperty('value', '')

          const submitBtn = screen.getByRole('button', { name: 'Submit' })
          expect(submitBtn).toBeDefined()
          expect(submitBtn).toHaveProperty('disabled', false)

          await user.click(submitBtn)

          expect(screen.getByText('This field is required')).toBeDefined()

          expect(
               screen.getByText('String must contain at least 1 character(s)')
          ).toBeDefined()

          expect(onSubmit).not.toHaveBeenCalled()
     })

     test('test hook form submit with two inputs', async () => {
          renderComponent()
          const user = userEvent.setup()

          const emailInput = screen.getByTestId('form-input-email')
          expect(emailInput).toBeDefined()
          expect(emailInput).toHaveProperty('value', '')

          await user.type(emailInput, 'test@test.com')

          expect(emailInput).toHaveProperty('value', 'test@test.com')

          const password = screen.getByTestId('form-input-password')
          expect(password).toBeDefined()
          expect(password).toHaveProperty('value', '')

          await user.type(password, 'testpass')

          expect(password).toHaveProperty('value', 'testpass')

          const submitBtn = screen.getByRole('button', { name: 'Submit' })
          expect(submitBtn).toBeDefined()
          expect(submitBtn).toHaveProperty('disabled', false)

          await user.click(submitBtn)

          expect(onSubmit).toHaveBeenCalled()
     })
})
