import { Field } from 'payload/types'

const projectDetails: Field = {
  name: 'projectDetails',
  label: 'Project Details',
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
              name: 'name',
              label: 'Location Name',
              type: 'text',
              required: true,
              admin: {
                width: '50%',
              },
            },
            {
              label: 'Region',
              name: 'region',
              type: 'select',
              required: true,
              options: [
                {
                  label: 'dorne',
                  value: 'dorne',
                },
                {
                  label: 'riverlands',
                  value: 'riverlands',
                },
                {
                  label: 'theWall',
                  value: 'theWall',
                },
                {
                  label: 'north',
                  value: 'north',
                },
                {
                  label: 'vale',
                  value: 'vale',
                },
                {
                  label: 'ironIslands',
                  value: 'ironIslands',
                },
                {
                  label: 'westerlands',
                  value: 'westerlands',
                },
                {
                  label: 'crownlands',
                  value: 'crownlands',
                },
                {
                  label: 'stormlands',
                  value: 'stormlands',
                },
                {
                  label: 'reach',
                  value: 'reach',
                },
                {
                  label: 'beyondTheWall',
                  value: 'beyondTheWall',
                },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              label: 'Project Status',
              name: 'status',
              type: 'select',
              required: true,
              defaultValue: 'notStarted',
              options: [
                { label: 'Completed', value: 'completed' },
                { label: 'In Progress', value: 'inProgress' },
                { label: 'Not started', value: 'notStarted' },
                { label: 'Abandoned', value: 'abandoned' },
                { label: 'Redo in progress', value: 'redoInProgress' },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              label: 'Project Type',
              name: 'type',
              type: 'select',
              required: true,
              defaultValue: 'miscellaneous',
              options: [
                { label: 'Castle', value: 'castle' },
                { label: 'Town', value: 'town' },
                { label: 'Village', value: 'village' },
                { label: 'City', value: 'city' },
                { label: 'Holdfast', value: 'holdfast' },
                { label: 'Keep', value: 'keep' },
                { label: 'Landmark', value: 'landmark' },
                { label: 'Ruin', value: 'ruin' },
                { label: 'Tower', value: 'tower' },
                { label: 'Clan', value: 'clan' },
                { label: 'Crannog', value: 'crannog' },
                { label: 'Miscellaneous', value: 'miscellaneous' },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              label: 'Warp',
              name: 'warp',
              type: 'text',
              admin: {
                width: '50%',
                description: 'In game warp, if available',
              },
            },
            {
              label: 'House',
              name: 'house',
              type: 'text',
              admin: {
                width: '50%',
                description: 'If location has a House, list it here',
              },
            },
            {
              type: 'text',
              name: 'application',
              label: 'Application',
              admin: {
                width: '50%',
                description: 'Link to users project application, if available',
              },
            },
            {
              name: 'projectLeads',
              admin: {
                width: '50%',
                description: 'Leader(s) or contributors of the project',
              },
              label: 'Project Lead(s)',
              type: 'text',
            },
            {
              name: 'dateStarted',
              label: 'Date Started',
              type: 'date',
              admin: {
                width: '50%',
              },
            },
            {
              name: 'dateCompleted',
              label: 'Date Completed',
              type: 'date',
              admin: {
                width: '50%',
              },
            },
            {
              label: 'Redo Available?',
              name: 'redoAvailable',
              type: 'checkbox',
              admin: {
                width: '50%',
                description: 'Check if this project is currently open to redo',
              },
              defaultValue: false,
            },
            {
              label: 'Server Project?',
              name: 'serverProject',
              type: 'checkbox',
              admin: {
                width: '50%',
                description: 'Check whether this project was a server wide effort',
              },
              defaultValue: false,
            },
          ],
        },
      ],
    },

    {
      name: 'dynmapLocation',
      type: 'group',
      admin: {
        description:
          'Information from dynmap in order to properly link to the location on the dynmap',
      },
      fields: [
        {
          name: 'dynmapZoom',
          type: 'text',
        },
        {
          name: 'dynmapXcoord',
          type: 'text',
        },
        {
          name: 'dynmapYcoord',
          type: 'text',
        },
      ],
    },
  ],
}
export default projectDetails
