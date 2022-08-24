import { textPropsAvailable } from './textPropsAvailable'
import { mergePropsToStyleObj } from '../utilities/mergePropsToStyleObj'

function textProps({ props = {}, styleObj = {} }) {
  mergePropsToStyleObj({ props, styleObj, propsAvailable: textPropsAvailable })

  return styleObj
}

export { textProps }
