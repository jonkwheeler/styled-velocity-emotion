import React from 'react'
import { Element } from './Element'
import { FlexContainerProps } from '../prop-types/FlexContainerProps'
import { FlexItemProps } from '../prop-types/FlexItemProps'
import { renderChildrenWithProps } from '../utilities/renderChildrenWithProps'
import { isObject } from '../utilities/isTrue'

export type FlexProps = FlexContainerProps

const defaultProps: FlexProps = {}

function getColumnWidth(number) {
  return `${(100 / parseFloat(number)).toFixed(4)}%`
}

function getParsedChildProps(columns) {
  const props: any = {}

  if (columns) {
    props.fb = {}

    if (isObject(columns)) {
      Object.keys(columns).map(breakpoint => {
        console.log(columns[breakpoint])

        props.fb[breakpoint] = getColumnWidth(columns[breakpoint])
      })
    } else {
      props.fb = getColumnWidth(columns)
    }
  }

  return props
}

const Flex: React.FunctionComponent<FlexProps> & {
  defaultProps: Partial<FlexProps>
  Item: typeof FlexItem
} = ({ children, columns, ...rest }) => {
  const parsedChildProps = getParsedChildProps(columns)

  return (
    <Element display="flex" {...(columns ? { wrap: 'wrap' } : {})} {...rest}>
      {renderChildrenWithProps({ children, ...parsedChildProps })}
    </Element>
  )
}

Flex.defaultProps = defaultProps
Flex.displayName = 'Flex'

//Flex.Item
const flexItemDefaultProps: FlexProps = {}

const FlexItem: React.FunctionComponent<FlexItemProps> & {
  defaultProps: Partial<FlexItemProps>
} = ({ children, ...rest }) => (
  <Element maxw="100%" {...rest}>
    {children}
  </Element>
)

FlexItem.defaultProps = flexItemDefaultProps
FlexItem.displayName = 'FlexItem'

Flex.Item = FlexItem

export { Flex }
