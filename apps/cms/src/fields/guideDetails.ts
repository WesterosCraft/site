import { Field } from 'payload/types'

const guideDetails: Field = {
  name: 'guideDetails',
  label: 'Guide Details',
  type: 'group',
  fields: [
    {
      name: 'information',
      label: 'Information',
      admin: {
        description: 'General information about the location',
      },
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              label: 'Category',
              name: 'guideCategory',
              type: 'select',
              required: true,
              options: [
                {
                  label: 'How To',
                  value: 'howTo',
                },
                {
                  label: 'Resources',
                  value: 'resources',
                },
                {
                  label: 'Getting Started',
                  value: 'gettingStarted',
                },
                {
                  label: 'Rules and Guidelines',
                  value: 'rulesAndGuidelines',
                },
              ],
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
    },
  ],
}
export default guideDetails
