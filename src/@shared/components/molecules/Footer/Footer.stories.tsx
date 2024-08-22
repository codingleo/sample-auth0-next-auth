import { Meta, StoryObj } from '@storybook/react'

import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'components/Footer',
  component: Footer
}

export default meta

type Template = StoryObj<typeof Footer>

export const Default: Template = {
  render: (args) => <Footer {...args} />
}
