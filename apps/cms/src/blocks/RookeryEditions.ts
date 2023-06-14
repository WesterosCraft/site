import { RowLabelArgs } from 'payload/dist/admin/components/forms/RowLabel/types'
import { Block } from 'payload/types'

export const RookeryEditions: Block = {
  slug: 'rookery-editions',
  labels: {
    singular: 'Rookery Edition',
    plural: 'Rookery Editions',
  },
  fields: [
    {
      name: 'editions',
      type: 'array',
      admin: {
        components: {
          RowLabel: ({ data, index }: RowLabelArgs) => {
            return data?.name || `Edition ${String(index).padStart(2, '0')}`
          },
        },
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
        {
          name: 'thumbnail',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            description:
              'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
          },
        },
      ],
    },
  ],
}
