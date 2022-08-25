import { hasKey, isObject, isString, isArray } from './isTrue'
import { addStyleToObj } from './addStyleToObj'
import { makeMediaQueryString } from './makeMediaQueryString'
import { makeScalingPxString } from './makeScalingPxString'
import { propsAvailable as _propsAvailable } from '../prop-api'

export function mergePropsToStyleObj({
  props = {},
  propsAvailable = _propsAvailable,
  styleObj = {},
}: {
  props: Record<string, unknown>
  propsAvailable?: any
  styleObj: Record<string, unknown> | any
}) {
  Object.keys(props).map(propName => {
    if (hasKey(propsAvailable, propName)) {
      const propValue: any = props[propName]
      const matchingPropKey = propsAvailable[propName]
      const { properties, conversionType } = matchingPropKey
      const hasMediaQueries = isObject(propValue)

      if (hasMediaQueries) {
        Object.keys(propValue).map(breakpoint => {
          if (breakpoint === '0') {
            addStyleToObj({ properties, value: propValue[breakpoint], styleObj: styleObj, conversionType })
          } else {
            let minWidth: number | any = breakpoint
            let maxWidth: number | undefined

            if (isString(breakpoint)) {
              const split = breakpoint.split('-')

              minWidth = parseFloat(split[0])
              maxWidth = parseFloat(split[1])
            }

            const mq = makeMediaQueryString({ minWidth, maxWidth })
            if (!hasKey(styleObj, mq)) {
              styleObj[mq] = {}
            }

            const thisStyle = {}
            let value = propValue[breakpoint]

            if (isArray(value)) {
              value = makeScalingPxString({
                minWidth: minWidth || 0,
                maxWidth: maxWidth || 9999,
                minValue: value[0],
                maxValue: value[1],
              })
            }

            addStyleToObj({ properties, value, styleObj: thisStyle, conversionType })

            styleObj[mq] = {
              ...styleObj[mq],
              ...thisStyle,
            }
          }
        })
      } else {
        addStyleToObj({ properties, value: propValue, styleObj: styleObj, conversionType })
      }
    }
  })
}
