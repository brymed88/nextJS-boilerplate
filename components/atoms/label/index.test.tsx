import { describe, expect, test } from 'vitest'

import { render, screen } from '@testing-library/react'
import Label from '.'

const renderComponent = () => render(<Label value="TestLabel" />)

describe('Label Component Tests', () => {
     test('Test label value', () => {
          renderComponent()
          const label = screen.getByTestId('label-TestLabel')
          expect(label).toBeDefined()
          expect(label.innerHTML).toBe('TestLabel')
     })
})
