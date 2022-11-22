import imageUrlBuilder from '@sanity/image-url'
import client from '../../../lib/client.js'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

const SampleImageComponent = ({ value }) => {
  return (
    <img
      src={urlFor().image(value).url()}
      alt={value.alt || ' '}
      loading='lazy'
    />
  )
}

const BlockContent = {
  block: {},
  types: {
    image: SampleImageComponent,
  },
}

export default BlockContent
