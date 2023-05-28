import { buildConfig } from 'payload/config'
import { cloudStorage } from '@payloadcms/plugin-cloud-storage'
import path from 'path'
import nestedDocs from '@payloadcms/plugin-nested-docs'
import Categories from './collections/Categories'
import Posts from './collections/Posts'
import Tags from './collections/Tags'
import Users from './collections/Users'
import Media from './collections/Media'
import Pages from './collections/Pages'
import Locations from './collections/Locations'
import Guides from './collections/Guides'
import RookeryEditions from './collections/RookeryEditions'
import MainMenu from './globals/MainNav'
import Footer from './globals/Footer'
import { adapter } from './s3-adapter'

export default buildConfig({
  serverURL: process.env.PAYLOAD_URL,
  admin: {
    user: Users.slug,
  },
  // globals are a single-instance collection, often used for navigation or site settings that live in one place
  globals: [MainMenu, Footer],
  // rateLimits provide basic API DDOS (Denial-of-service) protection and can limit accidental server load from scripts
  rateLimit: {
    trustProxy: true,
    window: 2 * 60 * 1000, // 2 minutes
    max: 2400, // limit each IP per windowMs
  },
  collections: [Categories, Posts, Tags, Users, Media, RookeryEditions, Pages, Locations, Guides],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  plugins: [
    nestedDocs({
      collections: ['pages'],
      parentFieldSlug: 'parent',
      breadcrumbsFieldSlug: 'breadcrumbs',
      generateLabel: (_, doc) => doc.title as string,
      generateURL: docs => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
    }),
    cloudStorage({
      collections: {
        media: {
          prefix: 'media/images',
          adapter,
          disablePayloadAccessControl: true,
        },
      },
    }),
  ],
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  localization: {
    defaultLocale: 'en',
    locales: ['en'],
  },
})
