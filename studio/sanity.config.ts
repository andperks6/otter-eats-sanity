import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash'

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID!
export const dataset = process.env.SANITY_STUDIO_DATASET!

export default defineConfig({
  name: 'otter-eats',
  title: 'Otter Eats',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool(), unsplashImageAsset()],
  schema: {
    types: schemaTypes,
  },
})
