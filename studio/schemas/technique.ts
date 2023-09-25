import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
    name: 'technique',
    title: 'Technique',
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
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }),
        defineField({
            name: 'relatedRecipes',
            title: 'Recipes',
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
    ]
})