export default {
  name: 'posts',
  type: 'document',
  title: 'Posts',
  fields: [
    {
      name: 'id',
      type: 'number',
      title: 'id',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      type: 'string',
      title: 'title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'category',
      type: 'string',
      title: 'category',
      validation: Rule => Rule.required(),
    },
    {
      name: 'text',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'author',
      type: 'string',
      title: 'author',
      validation: Rule => Rule.required(),
    },
    {
      name: 'date',
      type: 'date',
      title: 'date',
      validation: Rule => Rule.required(),
    },
    {
      name: 'likes',
      type: 'number',
      title: 'likes',
    },
    {
      name: 'image',
      type: 'image',
      title: 'image',
      validation: Rule => Rule.required(),
    },
  ],
}
