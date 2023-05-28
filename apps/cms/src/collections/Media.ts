import type { CollectionConfig } from 'payload/types'

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    disableLocalStorage: true,
    staticURL: '/media',
    staticDir: 'media',
    mimeTypes: ['image/*'],
    adminThumbnail: ({ doc }) =>
      `https://westeroscraft.s3.amazonaws.com/media/images/${doc.filename}`,
    imageSizes: [
      {
        height: 400,
        width: 400,
        crop: 'center',
        name: 'thumbnail',
      },
      {
        width: 900,
        height: 450,
        crop: 'center',
        name: 'sixteenByNineMedium',
      },
    ],
  },
  fields: [],
}

export default Media
