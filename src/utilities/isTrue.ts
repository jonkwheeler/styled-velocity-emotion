export const hasKey = (obj: Record<string, unknown>, key: string) => Object.prototype.hasOwnProperty.call(obj, key)

export const isNull = x => x === null

export const isObject = x => typeof x === 'object' && !Array.isArray(x) && x !== null

export const isNumber = x => typeof x === 'number'

export const isBoolean = x => typeof x === 'boolean'

export const isString = x => typeof x === 'string'

export const isArray = arr => ({}.toString.call(arr) === '[object Array]')

export const stringContains = (doesThis: string, containThis: string) => doesThis.indexOf(containThis) !== -1
