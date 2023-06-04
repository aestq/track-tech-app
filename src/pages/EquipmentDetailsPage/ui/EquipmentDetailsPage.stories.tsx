import type { Meta, StoryObj } from '@storybook/react'
import EquipmentDetailsPage from './EquipmentDetailsPage'

const meta: Meta<typeof EquipmentDetailsPage> = {
  title: 'pages/EquipmentCreatePage',
  component: EquipmentDetailsPage
}

type Story = StoryObj<typeof EquipmentDetailsPage>

export const Primary: Story = {}

export default meta
