import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import {Users} from './collections/Users';
import {Products} from './collections/Products';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    // Add Collections here
    Products,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
