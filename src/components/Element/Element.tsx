import React from 'react'
import styled from '@emotion/styled'
import { ElementProps } from './ElementProps'
import { isNull, mergePropsToStyleObj, cssProp } from '../../utilities'

const defaultProps: ElementProps = {
  element: 'div',
}

const Element: React.FunctionComponent<ElementProps> & { defaultProps: Partial<ElementProps> } = ({
  children,
  element,
  forwardRef,
  ...rest
}) => (
  <StyledElement as={element} ref={forwardRef} {...rest}>
    {children}
  </StyledElement>
)

Element.defaultProps = defaultProps
Element.displayName = 'Element'

export { Element }

/**
 * styles
 */
const StyledElement = styled.div([
  function (props: any = {}) {
    const { position } = props

    const styleObj: any = {}

    if (!isNull(position)) {
      styleObj.position = 'relative'
    }

    mergePropsToStyleObj({ props, styleObj })

    return styleObj
  },
  cssProp,
])
