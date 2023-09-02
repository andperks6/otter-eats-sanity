import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [
        {
          title: 'Ingredient',
          name: 'ingredient',
          type: 'object',
          options: {
            columns: 3,
            collapsible: true
          },
          fields: [
            {name: 'name', type: 'string', title: 'Name'},
            {name: 'quantity', type: 'number', title: 'Quantity', validation: (Rule) => Rule.precision(2)},
            {name: 'unit', type: 'string', title: 'Unit'}
        
          ]
        }
      ]
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      validation: (Rule) => Rule.unique(),
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'grid',
        list: [
          {title: 'Breads', value: 'breads'},
          {title: 'Breakfasts', value: 'breakfasts'},
          {title: 'Lunches', value: 'lunches'},
          {title: 'Dinners', value: 'dinners'},
          {title: 'Drinks', value: 'drinks'}
        ]
      }
    },
    defineField({
      name: 'techniques',
      title: 'Techniques',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'technique',
          type: 'reference',
          weak: true,
          to: [
            { type: 'technique' }
          ]
        })
      ]
    }),
    defineField({
      name: 'relatedRecipies',
      title: 'Related Recipies',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'recipe',
          type: 'reference',
          to: [
            { type: 'recipe' }
          ]
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
