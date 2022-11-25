import { BiCategoryAlt } from 'react-icons/bi';

export default {
  name: 'categories',
  type: 'document',
  icon: BiCategoryAlt,
  title: 'Categories',
  fields: [
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      validation: Rule => Rule.required(),
    },
    {
      name: 'categorySlug',
      type: 'string',
      title: 'Slug',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'image',
    },
  ],
};
