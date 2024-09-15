import IntlMockProvider from '@/__mocks__/intlProvider'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import DashboardMenu from '.'

//TODO: fix this test and properly test

const renderComponent = () => {
     return render(
          <IntlMockProvider locale="en">
               <DashboardMenu />
          </IntlMockProvider>
     )
}

describe('DashboardMenu Component', () => {
     test('Show DashboardMenu', async () => {
          renderComponent()

          const profileImg = screen.getByRole('img')
          expect(profileImg).toBeDefined()

          //TODO: tests for links in the future?

          expect(screen.getByRole('button', { name: 'logout' })).toBeDefined()
     })
})
