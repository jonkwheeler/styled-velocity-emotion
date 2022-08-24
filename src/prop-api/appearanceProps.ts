import { appearancePropsAvailable } from './appearancePropsAvailable'
import { mergePropsToStyleObj } from '../utilities/mergePropsToStyleObj'

function appearanceProps({ props = {}, styleObj = {} }) {
  mergePropsToStyleObj({ props, styleObj, propsAvailable: appearancePropsAvailable })

  return styleObj
}

export { appearanceProps }
