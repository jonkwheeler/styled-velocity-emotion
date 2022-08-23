import React from 'react'

/**
 * renderChildrenWithProps
 * @returns react child with props
 * @example
		function RadioGroup(props) {
			return (
				<div class="radio-group">
					{renderChildrenWithProps(props)}
				</div>
			)
		}

    pass a specific prop

    {renderChildrenWithProps({ children: children, hello: 'world' })}
 */

export function renderChildrenWithProps(props) {
  const { children = [], ...rest } = props

  return React.Children.map(children, child => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...rest })
    }
    return child
  })
}
