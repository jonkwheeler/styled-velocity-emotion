import { appearanceProps } from './appearanceProps'
import { appearancePropsAvailable } from './appearancePropsAvailable'
import { dimensionProps } from './dimensionProps'
import { dimensionPropsAvailable } from './dimensionPropsAvailable'
import { flexProps } from './flexProps'
import { flexPropsAvailable } from './flexPropsAvailable'
import { positionProps } from './positionProps'
import { positionPropsAvailable } from './positionPropsAvailable'
import { textProps } from './textProps'
import { textPropsAvailable } from './textPropsAvailable'

export const propApiArray = [dimensionProps, appearanceProps, positionProps, textProps, flexProps]
export const propsAvailableArray = [
  appearancePropsAvailable,
  dimensionPropsAvailable,
  flexPropsAvailable,
  positionPropsAvailable,
  textPropsAvailable,
]

export function propApi({ props = {}, styleObj = {} }) {
  for (let i = 0; i < propApiArray.length; i += 1) {
    const func = propApiArray[i]
    func({ props, styleObj })
  }
}
