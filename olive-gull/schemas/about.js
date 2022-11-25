import { GrCircleInformation } from 'react-icons/gr';

export default {
  name: 'about',
  type: 'document',
  icon: GrCircleInformation,
  title: 'About',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'phrase',
      type: 'string',
      title: 'phrase',
      validation: Rule => Rule.required(),
    },
    {
      name: 'text',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
      validation: Rule => Rule.required(),
    },
    {
      name: 'authors',
      type: 'string',
      title: 'authors',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'image',
      validation: Rule => Rule.required(),
    },
  ],
};
