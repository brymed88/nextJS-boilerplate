import IntlMockProvider from '@/__mocks__/intlProvider'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import Footer from '.'

const renderComponent = () => {
     return render(
          <IntlMockProvider locale="en">
               <Footer />
          </IntlMockProvider>
     )
}

describe('Footer Component', () => {
     test('verify footer exists and translations work', async () => {
          renderComponent()

          expect(screen.getByText('This is the footer'))
          //NOTE: add more tests when footer is configured
     })
})
