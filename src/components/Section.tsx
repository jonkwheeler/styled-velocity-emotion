import React from 'react'
import { Element, ElementProps } from './Element'

export interface SectionProps extends ElementProps {
  /**
   * The content after the section-item
   * @type React.ReactNode
   */
  afterContent?: React.ReactNode

  /**
   * The content before the section-item
   * @type React.ReactNode
   */
  beforeContent?: React.ReactNode

  /**
   * The props of the section-item
   * @type Partial<ElementProps>
   */
  sectionItemProps?: Partial<ElementProps>
}

const defaultProps: SectionProps = {
  element: 'section',
}

const Section: React.FunctionComponent<SectionProps> & {
  defaultProps: Partial<SectionProps>
  Item: typeof SectionItem
} = ({ afterContent, beforeContent, children, element, sectionItemProps, ...rest }) => (
  <Element element={element} w="100%" z={100} {...rest}>
    {beforeContent}

    <SectionItem {...sectionItemProps}>{children}</SectionItem>

    {afterContent}
  </Element>
)

Section.defaultProps = defaultProps
Section.displayName = 'Section'

const SectionItem = ({ children, ...rest }) => (
  <Element w="100%" maxw="var(--sv-section-item-maxw)" m="auto" {...rest}>
    {children}
  </Element>
)

Section.Item = SectionItem

export { Section }
