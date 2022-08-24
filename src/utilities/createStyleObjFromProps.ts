import { propsAvailableArray } from '../prop-api/propApi'
import { mergePropsToStyleObj } from './mergePropsToStyleObj'

export function createStyleObjFromProps(props) {
  if (!props) {
    return {}
  }

  const styleObj = {}
  mergePropsToStyleObj({ props, styleObj, propsAvailable: propsAvailableArray })
  return styleObj
}
