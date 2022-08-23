import { isNumber, hasKey, isString } from './isTrue'

export function perc(x) {
  return `${x * 100}%`
}

export function getCells(cells) {
  if (isNumber(cells)) {
    return `calc(var(--sv-cell) * ${cells})`
  }

  return cells
}

export function getFlexProperty(property) {
  if (isString(property)) {
    switch (property) {
      case 'top':
        return 'flex-start'
      case 'left':
        return 'flex-start'
      case 'start':
        return 'flex-start'

      case 'bottom':
        return 'flex-end'
      case 'right':
        return 'flex-end'
      case 'end':
        return 'flex-end'

      case 'middle':
        return 'center'

      default:
        return property
    }
  }

  return property
}

export function getCellsTranslate({ x, y }) {
  return `translate(${x ? (isString(x) ? x : getCells(x)) : 0}, ${y ? (isString(y) ? y : getCells(y)) : 0})`
}

const conversionTypes = {
  getCells,
  getCellsTranslate,
  getFlexProperty,
}

export function convertValue({ conversionType, value }: { conversionType: string; value: any }) {
  /*
   * If we have a convertor function, let's convert, otherwise just return the value
   */
  if (hasKey(conversionTypes, conversionType)) {
    return conversionTypes[conversionType](value)
  }

  return value
}
