import { describe, expect, it } from 'vitest'

import { hexToRgb } from '../src/utils'

describe('utils', () => {
  it('hexToRgb return rgb', () => {
    const rgb = hexToRgb('#000000')
    expect(rgb).toEqual({ r: 0, g: 0, b: 0 })
  })
})
