import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Flex } from '../src/components/Flex'

export default {
  title: 'Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = args => (
  <Flex element="footer" w="100%" bgColor="red" columns={{ 0: 1, 768: 3 }} {...args}>
    <Flex.Item element="span" bg="blue">
      Flex Item
    </Flex.Item>
    <Flex.Item>Flex Item</Flex.Item>
    <Flex.Item>Flex Item</Flex.Item>
  </Flex>
)

export const Story = Template.bind({})
Story.args = {}
Story.storyName = 'Flex'
