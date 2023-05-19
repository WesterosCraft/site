import { Block } from 'payload/types'
import link from '../fields/link'

export const LatestEdition: Block = {
  slug: 'latest-edition',
  graphQL: {
    singularName: 'LatestEdition',
  },
  labels: {
    singular: 'Latest Edition',
    plural: 'LatestEdition',
  },
  fields: [
    {
      type: 'text',
      name: 'heading',
      required: true,
      label: 'Heading',
    },
    {
      type: 'text',
      name: 'description',
      required: true,
      label: 'Description',
    },
    link({
      appearances: false,
      overrides: {
        label: false,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (data, { embeddedVideo }) => Boolean(!embeddedVideo?.embed),
        description: 'Maximum upload file size: 2MB. Recommended file size for images is <500KB.',
      },
    },
  ],
}
