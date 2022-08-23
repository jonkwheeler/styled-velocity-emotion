import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Main } from '../src/components/Main'

export default {
  title: 'Main',
  component: Main,
} as ComponentMeta<typeof Main>

const Template: ComponentStory<typeof Main> = args => <Main {...args}>Main</Main>

export const Story = Template.bind({})
Story.args = {}
Story.storyName = 'Main'
