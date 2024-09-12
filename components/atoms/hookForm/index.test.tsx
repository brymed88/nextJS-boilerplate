import { describe, expect, test, vi } from 'vitest'

import { mockZodSchema } from '@/__mocks__/formMocks'
import IntlMockProvider from '@/__mocks__/intlProvider'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HookFormComponent from '.'
import Button from '../button'
import HookFormInput from '../hookFormInput'

const onSubmit = vi.fn()
const renderComponent = () =>
     render(
          <IntlMockProvider locale="en">
               <HookFormComponent
                    zodSchema={mockZodSchema}
                    defaultValues={{ email: '' }}
                    submitCallback={onSubmit}
               >
                    <HookFormInput name="email" />
                    <Button>Submit</Button>
               </HookFormComponent>
          </IntlMockProvider>
     )

describe('Hook Form component test', () => {
     test('test hook form submit', async () => {
          renderComponent()
          const user = userEvent.setup()

          const emailInput = screen.getByRole('textbox')
          expect(emailInput).toBeDefined()
          expect(emailInput).toHaveProperty('value', '')

          await user.type(emailInput, 'test@test.com')

          expect(emailInput).toHaveProperty('value', 'test@test.com')
          const submitBtn = screen.getByRole('button', { name: 'Submit' })
          expect(submitBtn).toBeDefined()
          expect(submitBtn).toHaveProperty('disabled', false)

          await user.click(submitBtn)

          expect(onSubmit).toHaveBeenCalled()
     })
})
