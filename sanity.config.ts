import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'

const projectId = 'o2h9758v';
const title = 'Bug Repro Test';
const datasets = ['production', 'staging'];

export default defineConfig(datasets.map((dataset) => ({
  name: dataset,
  subtitle: title,
  projectId,
  title: dataset[0].toUpperCase() + dataset.slice(1),
  dataset,
  basePath: `/${dataset}`,
  plugins: [
    deskTool(),
    visionTool(),
    googleMapsInput(),
  ],
  schema: {
    types: schemaTypes,
  },
})));