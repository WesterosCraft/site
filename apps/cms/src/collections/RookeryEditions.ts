import { CollectionConfig } from 'payload/types'

const RookeryEditions: CollectionConfig = {
  slug: 'rookery-editions',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'link',
      type: 'text',
    },
  ],
  timestamps: false,
}

export default RookeryEditions
