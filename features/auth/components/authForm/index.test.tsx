import { describe, expect, test } from 'vitest'

import IntlMockProvider from '@/__mocks__/intlProvider'
import { render, screen } from '@testing-library/react'
import AuthForm from '.'
import { AuthSteps } from '../../types'

const renderComponent = async (step?: AuthSteps) => {
     render(
          <IntlMockProvider locale="en">
               <AuthForm step={step} />
          </IntlMockProvider>
     )
}
describe('AuthForm Component Tests', () => {
     test('form exists on default step - login', () => {
          renderComponent()
          expect(screen.getByText('Login with provider')).toBeDefined()
     })
     test('signup form should render', () => {
          renderComponent('signup')
          expect(screen.getByText('Create an account')).toBeDefined()
     })
     test('reset form should render', () => {
          renderComponent('reset')
          expect(screen.getByText('Reset password')).toBeDefined()
     })
     test('verify form should render', () => {
          renderComponent('verify')
          expect(screen.getByText('Verify step')).toBeDefined()
     })
})
