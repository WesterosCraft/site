import { CollectionConfig } from 'payload/types'
import { Media } from '../blocks/Media'
import MediaContent from '../blocks/MediaContent'
import MediaSlider from '../blocks/MediaSlider'
import populateFullTitle from '../hooks/populateFullTitle'
import projectDetails from '../fields/projectDetails'
import Content from '../blocks/Content'
import { populateAuthor } from '../hooks/populateAuthor'
import slug from '../fields/slug'

export const Locations: CollectionConfig = {
  slug: 'locations',
  admin: {
    // this is the name of a field which will be visible for the edit screen and is also used for relationship fields
    useAsTitle: 'locationName',
    // defaultColumns is used on the listing screen in the admin UI for the collection
    defaultColumns: ['locationName', 'author', 'createdAt', 'status'],
    group: 'Content',
    disableDuplicate: true,
  },
  // the access is set to allow read for anyone
  access: {
    // allow guest users to fetch pages
    read: () => true,
    // The access for the remaining options use the default which prevents all guest access and is allowed for authenticated users
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'locationName',
      label: 'Location Name',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Details',
          fields: [projectDetails],
        },
        {
          label: 'Images',
          fields: [
            {
              name: 'bannerImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'A banner that relates to the location, if available',
              },
            },
            {
              name: 'locationImages',
              type: 'array',
              fields: [
                {
                  name: 'media',
                  type: 'upload',
                  relationTo: 'media',
                  admin: {
                    description:
                      'Maximum upload file size: 12MB. Recommended file size for images is <500KB.',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              label: false,
              type: 'blocks',
              // minRows: 1,
              blocks: [Content, Media, MediaContent, MediaSlider],
            },
          ],
        },
      ],
    },
    {
      name: 'fullTitle',
      type: 'text',
      hooks: {
        beforeChange: [
          // custom hook function to save the title using breadcrumbs field data
          populateFullTitle,
        ],
      },
      // to hide the field from the UI for the edit/create forms we can pass it a null value
      admin: {
        components: {
          Field: () => null,
        },
        // to remove it completely from the admin using the hidden property instead
        // hidden: true
      },
    },
    {
      name: 'breadcrumbs',
      type: 'array',
      fields: [
        {
          name: 'doc',
          type: 'relationship',
          relationTo: 'locations',
          // maxDepth is 0 to avoid extra database queries on breadcrumbs by not populating extra relationship data
          maxDepth: 0,
          admin: {
            disabled: true,
          },
        },
        {
          type: 'row',
          fields: [
            {
              name: 'url',
              label: 'URL',
              type: 'text',
              admin: {
                // assign the field widths using percents or pixels using "px"
                width: '50%',
              },
            },
            {
              name: 'label',
              type: 'text',
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
      admin: {
        disabled: true,
      },
    },
    // since configuration is in code we can call functions to define data structures dynamically in a reusable way
    slug(),
    {
      name: 'author',
      relationTo: 'users',
      type: 'relationship',
      hooks: {
        beforeChange: [
          // By using a hook to set the author, admins cannot change the author as is allowed in the posts
          // collections that has a defaultValue property to populates it and allow changing in the UI
          populateAuthor,
        ],
      },
      admin: {
        // this is going to be filled by the hook, or will remain the same on edit
        readOnly: true,
        position: 'sidebar',
      },
    },
  ],
}

export default Locations
