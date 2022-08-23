import { positionPropsAvailable } from './positionPropsAvailable'
import { mergePropsToStyleObj } from '../utilities/mergePropsToStyleObj'

function positionProps({ props = {}, styleObj = {} }) {
  mergePropsToStyleObj({ props, styleObj, propsAvailable: positionPropsAvailable })

  return styleObj
}

export { positionProps }
