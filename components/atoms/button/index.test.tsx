import { describe, expect, test } from 'vitest'

import { render, screen } from '@testing-library/react'
import Button from '.'

const renderComponent = (disabled?: boolean, isLoading?: boolean) =>
     render(
          <Button disabled={disabled} isLoading={isLoading}>
               Test Btn
          </Button>
     )

describe('Button Component Tests', () => {
     test('Test button disabled', () => {
          renderComponent(true)
          const btn = screen.getByRole('button', { name: 'Test Btn' })
          expect(btn).toBeDefined()
          expect(btn).toHaveProperty('disabled', true)
     })
     test('Test button enabled', () => {
          renderComponent()
          const btn = screen.getByRole('button', { name: 'Test Btn' })
          expect(btn).toBeDefined()
          expect(btn).toHaveProperty('disabled', false)
     })
     test('Test button loading state', () => {
          renderComponent(false, true)
          const btn = screen.getByRole('button', { name: 'Test Btn' })
          expect(btn).toBeDefined()
          expect(btn).toHaveProperty('disabled', false)
          expect(screen.getByTestId('loading-icon')).toBeDefined()
     })
})
