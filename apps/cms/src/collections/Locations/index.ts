import { CollectionConfig } from 'payload/types'
import populateFullTitle from '../../hooks/populateFullTitle'
import projectDetails from '../../fields/projectDetails'
import Content from '../../blocks/Content'

export const Locations: CollectionConfig = {
  slug: 'locations',
  admin: {
    // this is the name of a field which will be visible for the edit screen and is also used for relationship fields
    useAsTitle: 'fullTitle',
    // defaultColumns is used on the listing screen in the admin UI for the collection
    defaultColumns: ['fullTitle', 'author', 'createdAt', 'status'],
    group: 'Content',
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
      type: 'tabs',
      tabs: [
        {
          label: 'Details',
          fields: [projectDetails],
        },
        {
          label: 'Images',
          fields: [],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              label: false,
              type: 'blocks',
              minRows: 1,
              localized: true,
              blocks: [Content],
            },
          ],
        },
      ],
    },
  ],
}

export default Locations
