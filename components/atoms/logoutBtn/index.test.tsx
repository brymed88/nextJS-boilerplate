import { describe, expect, test } from 'vitest'

import IntlMockProvider from '@/__mocks__/intlProvider'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import LogoutBtn from '.'

vi.mock('react', () => {
     const originalModule = vi.importActual('react')
     return {
          ...originalModule,
          cache: () => {},
     }
})

const renderComponent = (condensed?: boolean) =>
     render(
          <IntlMockProvider locale="en">
               <LogoutBtn condensed={condensed} />
          </IntlMockProvider>
     )
describe('LogoutBtn Component Tests', () => {
     test('Test button', () => {
          renderComponent()
          expect(screen.getByRole('button', { name: 'Logout' })).toBeDefined()
     })
     test('Test button condensed', () => {
          renderComponent(true)
          expect(screen.getByRole('button')).toBeDefined()
          expect(screen.getByTestId('logout-icon')).toBeDefined()
     })
})
