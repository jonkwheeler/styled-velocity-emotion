import React from 'react'
import styled from '@emotion/styled'
import { dimensionProps, appearanceProps, positionProps, textProps, flexProps } from '../shared-props'
import { SharedProps } from '../prop-types/SharedProps'
import { isNull } from '../utilities/isTrue'

export interface ElementProps extends SharedProps {
  /**
   * The children of the Element component.
   * @type React.ReactNode
   */
  children?: React.ReactNode

  /**
   * The className of the Element component.
   * @type string
   */
  className?: string

  /**
   * Define the html element being output
   * @type string
   * @defaultValue 'div'
   * @example
   * element="div"
   * element="span"
   */
  element?: string

  /**
   * Pass a ref to the Styled-Component
   * @example
   * const myRef = React.createRef();
   * <Element forwardRef={myRef} />
   */
  forwardRef?: React.LegacyRef<HTMLDivElement> | undefined

  /**
   * The id of the Element component.
   * @type string
   */
  id?: string | undefined
}

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
