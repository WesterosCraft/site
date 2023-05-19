import { Block } from 'payload/types'
import link from '../fields/link'

export const Banner: Block = {
  slug: 'banner',
  labels: {
    singular: 'Banner',
    plural: 'Banner',
  },
  fields: [
    {
      type: 'text',
      name: 'label',
      required: true,
      label: 'Label',
    },
    link({
      appearances: false,
      overrides: {
        label: false,
      },
    }),
  ],
}
