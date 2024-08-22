import { type Meta, type StoryObj } from '@storybook/react'

import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
  title: 'components/Navbar',
  component: Navbar
}

export default meta

type Template = StoryObj<typeof Navbar>

export const Default: Template = {
  render: (args) => <Navbar {...args} />
}
