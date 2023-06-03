import type { CollectionConfig } from 'payload/types'

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    // allow guest users to fetch pages
    read: () => true,
    // The access for the remaining options use the default which prevents all guest access and is allowed for authenticated users
    create: () => true,
    // update: () => true,
    // delete: () => true,
  },
  upload: {
    disableLocalStorage: true,
    staticURL: '/media',
    staticDir: 'media',
    mimeTypes: ['image/*'],
    adminThumbnail: ({ doc }) =>
      `https://westeroscraft.s3.amazonaws.com/media/images/${doc.filename}`,
  },
  fields: [],
}

export default Media
