import { css } from '@emotion/react'
import { createStyleObjFromProps } from './createStyleObjFromProps'

export function createStyleStrFromProps(props) {
  if (!props) {
    return ''
  }

  return css`
    ${createStyleObjFromProps(props)}
  `.styles
}
