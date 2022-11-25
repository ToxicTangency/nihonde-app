import { BsFileEarmarkPost } from 'react-icons/bs';

export default {
  name: 'posts',
  type: 'document',
  icon: BsFileEarmarkPost,
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
      title: 'Title',
      validation: Rule => Rule.required(),
    },
    {
      title: 'Post Category',
      name: 'postCategory',
      type: 'reference',
      to: [{ type: 'categories' }],
    },
    {
      name: 'categoryname',
      type: 'string',
      title: 'category-name',
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
};
