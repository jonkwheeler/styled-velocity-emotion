import { dimensionPropsAvailable } from '../prop-api'
import { mergePropsToStyleObj } from './mergePropsToStyleObj'

export function createStyleObjFromProps(props) {
  if (!props) {
    return {}
  }

  const styleObj = {}
  mergePropsToStyleObj({ props, styleObj, propsAvailable: [...dimensionPropsAvailable] })
  return styleObj
}
