import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

// import { createClient } from "next-sanity";

// export const sanityClient = createClient({
//   projectId: "id02lgqr",  // Tumhara project ID
//   dataset: "production",  // Tumhara dataset name
//   useCdn: true,  // For faster response
//   apiVersion: "2021-08-31",  // Use latest version
// });

