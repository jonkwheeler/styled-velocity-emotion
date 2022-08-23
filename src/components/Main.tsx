import React from 'react'
import { Element, ElementProps } from './Element'

export interface MainProps extends ElementProps {
  /**
   * The role of the Main component.
   * @type string
   * @defaultValue 'main'
   */
  role: string
}

const defaultProps: MainProps = {
  id: 'main',
  role: 'main',
}

const Main: React.FunctionComponent<MainProps> & { defaultProps: Partial<MainProps> } = ({
  className,
  children,
  id,
  role,
  ...rest
}) => (
  <Element id={id} role={role} element="main" className={className} {...rest}>
    {children}
  </Element>
)

Main.defaultProps = defaultProps
Main.displayName = 'Main'

export { Main }
