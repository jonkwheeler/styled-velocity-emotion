import { dimensionPropsAvailable } from './dimensionPropsAvailable'
import { mergePropsToStyleObj } from '../utilities/mergePropsToStyleObj'

function dimensionProps({ props = {}, styleObj = {} }) {
  mergePropsToStyleObj({ props, styleObj, propsAvailable: dimensionPropsAvailable })

  return styleObj
}

export { dimensionProps }
