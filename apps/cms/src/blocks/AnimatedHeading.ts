import { Block } from 'payload/types'

export const AnimatedHeading: Block = {
  slug: 'animated-heading',
  graphQL: {
    singularName: 'AnimatedHeading',
  },
  labels: {
    singular: 'Animated Heading',
    plural: 'Animated Headings',
  },
  fields: [
    {
      type: 'text',
      name: 'label',
      required: true,
      label: 'Label',
    },
    {
      name: 'useAnimation',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
