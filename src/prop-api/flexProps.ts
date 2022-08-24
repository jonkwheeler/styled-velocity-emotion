import { flexPropsAvailable } from './flexPropsAvailable'
import { mergePropsToStyleObj } from '../utilities/mergePropsToStyleObj'

function flexProps({ props = {}, styleObj = {} }) {
  mergePropsToStyleObj({ props, styleObj, propsAvailable: flexPropsAvailable })

  return styleObj
}

export { flexProps }
