import React from 'react'
import styled from '@emotion/styled'
import { dimensionProps, appearanceProps, positionProps, textProps, flexProps } from '../../prop-api'
import { ElementProps } from './ElementProps'
import { isNull } from '../../utilities/isTrue'

const defaultProps: ElementProps = {
  element: 'div',
}

const Element: React.FunctionComponent<ElementProps> & { defaultProps: Partial<ElementProps> } = ({
  className,
  children,
  element,
  forwardRef,
  ...rest
}) => (
  <StyledElement as={element} className={className} ref={forwardRef} {...rest}>
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

    appearanceProps({ props, styleObj })
    dimensionProps({ props, styleObj })
    positionProps({ props, styleObj })
    textProps({ props, styleObj })
    flexProps({ props, styleObj })

    return styleObj
  },
  function (props: any = {}) {
    return props.css
  },
])
