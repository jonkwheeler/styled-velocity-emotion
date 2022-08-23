import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Element } from '../src/components/Element'

export default {
  title: 'Element',
  component: Element,
} as ComponentMeta<typeof Element>

const Template: ComponentStory<typeof Element> = args => (
  <Element {...args} bg="red" cw={{ 0: 10, 768: 5 }} h={{ 0: 50, '768-1024': [50, 100] }}>
    Element
  </Element>
)

export const Story = Template.bind({})
Story.args = {}
Story.storyName = 'Element'
