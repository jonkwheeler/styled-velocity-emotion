import { isObject, isNumber, stringContains } from './isTrue'
import { makeMediaQueryString } from './makeMediaQueryString'

function parseAndValidate(stringNumber) {
  const parsed = parseFloat(stringNumber)

  return { parsed, valid: isNumber(parsed) }
}

function isValidSvBreakpoint(key) {
  // Check for min and max breakpoints first '0-768'
  if (stringContains(key, '-')) {
    const split = key.split('-')

    if (split[0] && split[1] && split.length === 2) {
      const { parsed: minParsed, valid: minValid } = parseAndValidate(split[0])
      const { parsed: maxParsed, valid: maxValid } = parseAndValidate(split[1])

      if (minValid && maxValid) {
        return { minWidth: minParsed, maxWidth: maxParsed }
      }
    }
  }

  // And then regular number breakpoints last
  const { parsed, valid } = parseAndValidate(key)

  if (valid) {
    return { minWidth: parsed }
  }

  return false
}

/*
 * This allows for SV's breakpoint object inside the css prop.
 * If not using SV's api, it's fallback on Emotion's.
 * EG: css={{
 *   0: 'background: red;',
 *   '768-1024': 'background: blue;',
 * }}
 */
function createStyleStrFromCssProp(css) {
  if (isObject(css)) {
    const keys = Object.keys(css)
    let allKeysAreBreakpoints = true
    let styleStr = ''

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const cssProperties = css[key]

      const minAndMaxWidth = isValidSvBreakpoint(key)

      if (!minAndMaxWidth) {
        allKeysAreBreakpoints = false
        break
      }

      if (key === '0') {
        styleStr += cssProperties
      } else {
        styleStr += `${makeMediaQueryString(minAndMaxWidth)}{ ${cssProperties} }`
      }
    }

    if (allKeysAreBreakpoints) {
      return styleStr
    }
  }

  return false
}

export function cssProp({ css }: any = {}) {
  const style = createStyleStrFromCssProp(css)

  if (style) {
    return style
  }

  return css
}
