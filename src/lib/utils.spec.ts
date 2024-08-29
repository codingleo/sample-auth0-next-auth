import { describe, expect, it } from 'vitest'
import { cn } from '@/lib/utils'

describe('utils', () => {
  describe('cn', () => {
    it('should be defined', () => {
      expect(cn).toBeDefined()
    })

    it('should return empty string if no arguments', () => {
      expect(cn()).toBe('')
    })

    it('should return empty string if all arguments are falsy', () => {
      expect(cn('', null, undefined, false)).toBe('')
    })

    it('should return a single class name', () => {
      expect(cn('foo')).toBe('foo')
    })

    it('should return multiple class names', () => {
      expect(cn('foo', 'bar')).toBe('foo bar')
    })
  })
})
