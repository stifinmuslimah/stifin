import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'role',                         // ✅ tambahkan jabatan/role
      title: 'Role / Jabatan',
      type: 'string',
      description: 'Misal: Author, Editor, Bidan, Dokter, dsb.'
    }),
    defineField({
      name: 'image',
      title: 'Avatar / Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
      description: 'Bio singkat tentang penulis (opsional).'
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',                     // ✅ tampilkan role di preview
      media: 'image',
    },
  },
})
