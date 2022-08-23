import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Section } from '../src/components/Section'

export default {
  title: 'Section',
  component: Section,
} as ComponentMeta<typeof Section>

const Template: ComponentStory<typeof Section> = args => <Section {...args}>Section</Section>

export const Story = Template.bind({})
Story.args = {}
Story.storyName = 'Section'
