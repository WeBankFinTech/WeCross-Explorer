import { validUsername, validURL, validLowerCase, validUpperCase, validAlphabets, isString } from '@/utils/validate.js'
import { path2Url } from '@/utils'
describe('Utils:validate', () => {
  it('validUsername', () => {
    expect(validUsername('admin1')).toBe(true)
    expect(validUsername('org-user1')).toBe(true)
    expect(validUsername('xx')).toBe(false)
  })
  it('validURL', () => {
    expect(validURL('https://github.com/WeBankBlockchain/WeCross-WebApp.git')).toBe(true)
    expect(validURL('http://github.com/WeBankBlockchain/WeCross-WebApp.git')).toBe(true)
    expect(validURL('github.com/WeBankBlockchain/WeCross-WebApp.git')).toBe(false)
  })
  it('validLowerCase', () => {
    expect(validLowerCase('abc')).toBe(true)
    expect(validLowerCase('Abc')).toBe(false)
    expect(validLowerCase('123abc')).toBe(false)
  })
  it('validUpperCase', () => {
    expect(validUpperCase('ABC')).toBe(true)
    expect(validUpperCase('Abc')).toBe(false)
    expect(validUpperCase('123ABC')).toBe(false)
  })
  it('validAlphabets', () => {
    expect(validAlphabets('ABC')).toBe(true)
    expect(validAlphabets('Abc')).toBe(true)
    expect(validAlphabets('123aBC')).toBe(false)
  })
  it('isString', () => {
    expect(isString('')).toBe(true)
    const obj = {
      str: 'str'
    }
    expect(isString(obj.str)).toBe(true)
    expect(isString(obj)).toBe(false)
    expect(isString(123)).toBe(false)
  })
  it('path2URL', () => {
    expect(path2Url('test.test.test')).toBe('/test/test/test')
  })
})
