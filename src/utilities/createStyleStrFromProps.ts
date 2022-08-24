import { css } from '@emotion/react'
import { createStyleObjFromProps } from './createStyleObjFromProps'

export function createStyleStrFromProps(svProps) {
  if (!svProps) {
    return ''
  }

  return css`
    ${createStyleObjFromProps(svProps)}
  `.styles
}
