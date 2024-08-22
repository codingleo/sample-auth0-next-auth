import { render } from '@testing-library/react'
import { Navbar } from './Navbar'
import { describe, it, expect } from 'vitest'

describe('Navbar component', () => {
  it('should render', () => {
    const component = render(<Navbar />)
    expect(component).toBeTruthy()
  })
})
