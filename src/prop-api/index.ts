import { appearancePropsAvailable } from './appearancePropsAvailable'
import { dimensionPropsAvailable } from './dimensionPropsAvailable'
import { flexPropsAvailable } from './flexPropsAvailable'
import { positionPropsAvailable } from './positionPropsAvailable'
import { textPropsAvailable } from './textPropsAvailable'

const propsAvailable = {
  ...appearancePropsAvailable,
  ...dimensionPropsAvailable,
  ...flexPropsAvailable,
  ...positionPropsAvailable,
  ...textPropsAvailable,
}

export {
  appearancePropsAvailable,
  dimensionPropsAvailable,
  flexPropsAvailable,
  positionPropsAvailable,
  propsAvailable,
  textPropsAvailable,
}
