import { CollectionConfig } from 'payload/types'
import populateFullTitle from '../hooks/populateFullTitle'
import slug from '../fields/slug'
import { populateAuthor } from '../hooks/populateAuthor'
import Content from '../blocks/Content'
import { Media } from '../blocks/Media'
import MediaContent from '../blocks/MediaContent'
import MediaSlider from '../blocks/MediaSlider'
import guideDetails from '../fields/guideDetails'
import { Accordion } from '../blocks/Accordion'

export const Guides: CollectionConfig = {
  slug: 'guides',
  admin: {
    // this is the name of a field which will be visible for the edit screen and is also used for relationship fields
    useAsTitle: 'guideName',
    // defaultColumns is used on the listing screen in the admin UI for the collection
    defaultColumns: ['guideName', 'author', 'createdAt', 'status'],
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
      name: 'guideName',
      label: 'Guide Name',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Details',
          fields: [guideDetails],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              label: false,
              type: 'blocks',
              minRows: 1,
              blocks: [Accordion, Content, Media, MediaContent, MediaSlider],
            },
          ],
        },
      ],
    },
    {
      name: 'fullTitle',
      type: 'text',
      localized: true,
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

export default Guides
