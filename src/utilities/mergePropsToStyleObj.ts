import { hasKey, isObject, isString, isArray } from './isTrue'
import { addStyleToObj } from './addStyleToObj'
import { makeMediaQueryString } from './makeMediaQueryString'
import { makeScalingPxString } from './makeScalingPxString'

export function mergePropsToStyleObj({ props, propsAvailable, styleObj }) {
  for (let i = 0; i < propsAvailable.length; i++) {
    const { prop, properties = [], conversionType } = propsAvailable[i]

    if (hasKey(props, prop)) {
      const propValue = props[prop]
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

              console.log('value', value)
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
  }
}
