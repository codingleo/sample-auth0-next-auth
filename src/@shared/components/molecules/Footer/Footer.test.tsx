import { render } from '@testing-library/react'
import { Footer } from './Footer'
import { describe, it, expect } from 'vitest'

describe('Footer component', () => {
  it('should render', () => {
    const component = render(<Footer>Hello world</Footer>)
    expect(component).toBeTruthy()
  })
})
