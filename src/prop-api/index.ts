import { appearancePropsAvailable } from './appearancePropsAvailable'
import { createPropKeys } from '../utilities'
import { dimensionPropsAvailable } from './dimensionPropsAvailable'
import { flexPropsAvailable } from './flexPropsAvailable'
import { positionPropsAvailable } from './positionPropsAvailable'
import { textPropsAvailable } from './textPropsAvailable'

const propsAvailable = [
  ...appearancePropsAvailable,
  ...dimensionPropsAvailable,
  ...flexPropsAvailable,
  ...positionPropsAvailable,
  ...textPropsAvailable,
]

const appearancePropKeysAvailable = createPropKeys(appearancePropsAvailable)
const dimensionPropKeysAvailable = createPropKeys(dimensionPropsAvailable)
const flexPropKeysAvailable = createPropKeys(flexPropsAvailable)
const positionPropKeysAvailable = createPropKeys(positionPropsAvailable)
const textPropKeysAvailable = createPropKeys(textPropsAvailable)
const propKeysAvailable = {
  ...appearancePropKeysAvailable,
  ...dimensionPropKeysAvailable,
  ...flexPropKeysAvailable,
  ...positionPropKeysAvailable,
  ...textPropKeysAvailable,
}

export {
  appearancePropKeysAvailable,
  appearancePropsAvailable,
  dimensionPropKeysAvailable,
  dimensionPropsAvailable,
  flexPropKeysAvailable,
  flexPropsAvailable,
  positionPropKeysAvailable,
  positionPropsAvailable,
  propKeysAvailable,
  propsAvailable,
  textPropKeysAvailable,
  textPropsAvailable,
}
