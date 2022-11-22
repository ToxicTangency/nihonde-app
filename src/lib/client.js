import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'epd7a49a',
  dataset: 'production',
  apiVersion: '2022-11-20',
  token: process.env.REACT_APP_SANITY_TOKEN,
  useCdn: true,
  ignoreBrowserTokenWarning: true,
})

export default client
