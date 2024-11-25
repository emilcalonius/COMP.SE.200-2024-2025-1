import eq from '../src/eq'

const object = { a: 1 }
const other = { a: 1 }

describe('eq', () => {
  test('Same objects are equal', () => {
    expect(eq(object, object)).toBe(true)
  })

  test('Different objects with equal values are not equal', () => {
    expect(eq(object, other)).toBe(false)
  })

  test('Same strings are equal', () => {
    expect(eq('a', 'a')).toBe(true)
  })

  test('Different strings are not equal', () => {
    expect(eq('a', 'b')).toBe(false)
  })

  test('String and object are not equal', () => {
    expect(eq('a', Object('a'))).toBe(false)
  })

  test('NaN and NaN are equal', () => {
    expect(eq(NaN, NaN)).toBe(true)
  })
})
