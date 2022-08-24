import React from 'react'
import { Element, ElementProps } from '../Element'
import { FlexProps } from './FlexProps'
import { isObject } from '../../utilities/isTrue'

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
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          const { type = {} }: any = child
          const { displayName = '__UnknownComponent__' } = type

          // Only pass SV props to an SV Element
          const isValidChild = [Element.displayName, FlexItem.displayName].indexOf(displayName) !== -1

          return React.cloneElement(child, { ...(isValidChild ? parsedChildProps : {}), ...rest })
        }
        return child
      })}
    </Element>
  )
}

Flex.defaultProps = defaultProps
Flex.displayName = 'Flex'

//Flex.Item
export type FlexItemProps = ElementProps
const FlexItem = ({ children, ...rest }: FlexItemProps) => <Element {...rest}>{children}</Element>
FlexItem.displayName = 'FlexItem'
Flex.Item = FlexItem

export { Flex }
