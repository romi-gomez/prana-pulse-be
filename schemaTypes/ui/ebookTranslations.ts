import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'ebookTranslations',
  type: 'document',
  title: 'E-book UI Translations',
  description: 'Translations for section titles and activity types in the e-book',
  fields: [
    defineField({
      name: 'language',
      type: 'string',
      title: 'Language',
      description: 'Language code for these translations (e.g., "en", "es")',
      options: {
        list: [
          { title: 'Spanish (Default)', value: 'es' },
          { title: 'English', value: 'en' },
          // Add other languages as needed
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'isDefault',
      type: 'boolean',
      title: 'Is Default Language',
      description: 'Set to true if this is the default language (Spanish)',
      initialValue: false,
    }),
    defineField({
      name: 'sectionTitles',
      type: 'object',
      title: 'Section Titles',
      description: 'Translations for section titles in the e-book',
      fields: [
        { name: 'equilibriumState', type: 'string', title: 'Equilibrium State', initialValue: 'Estado de Equilibrio' },
        { name: 'equilibriumCategories', type: 'string', title: 'Equilibrium Categories', initialValue: 'Categorías del Equilibrio' },
        { name: 'instabilityImbalance', type: 'string', title: 'Instability and Imbalance', initialValue: 'Inestabilidad y Desequilibrio' },
        { name: 'challenges', type: 'string', title: 'Challenges', initialValue: 'Desafíos' },
        { name: 'excessEnergy', type: 'string', title: 'Excess Energy', initialValue: 'Exceso de Energía' },
        { name: 'excessCategories', type: 'string', title: 'Excess Categories', initialValue: 'Categorías del Exceso' },
        { name: 'pathToBalance', type: 'string', title: 'Path to Balance', initialValue: 'Camino hacia el Equilibrio' },
        { name: 'transformation', type: 'string', title: 'Transformation', initialValue: 'Transformación' },
        { name: 'objectives', type: 'string', title: 'Objectives', initialValue: 'Objetivos' },
        { name: 'generalDescription', type: 'string', title: 'General Description', initialValue: 'Descripción General' },
      ],
    }),
    defineField({
      name: 'activityTypes',
      type: 'object',
      title: 'Activity Types',
      description: 'Translations for different activity types',
      fields: [
        { name: 'activities', type: 'string', title: 'Activities', initialValue: 'Actividades' },
        { name: 'guidedMeditations', type: 'string', title: 'Guided Meditations', initialValue: 'Meditaciones Guiadas' },
        { name: 'dailyMeditations', type: 'string', title: 'Daily Meditations', initialValue: 'Meditaciones Diarias' },
        { name: 'practicesAndTools', type: 'string', title: 'Practices and Tools', initialValue: 'Prácticas y Herramientas' },
        { name: 'affirmations', type: 'string', title: 'Affirmations', initialValue: 'Afirmaciones' },
        { name: 'oracleMessages', type: 'string', title: 'Oracle Messages', initialValue: 'Mensajes del Oráculo' },
      ],
    }),
    defineField({
      name: 'mediaResources',
      type: 'object',
      title: 'Media Resources',
      description: 'Translations for media resource sections',
      fields: [
        { name: 'mediaTitle', type: 'string', title: 'Media Resources Title', initialValue: 'Recursos Multimedia' },
        { name: 'images', type: 'string', title: 'Images', initialValue: 'Imágenes' },
        { name: 'videos', type: 'string', title: 'Videos', initialValue: 'Videos' },
        { name: 'audios', type: 'string', title: 'Audios', initialValue: 'Audios' },
        { name: 'links', type: 'string', title: 'Links', initialValue: 'Enlaces' },
        { name: 'spotifyPlaylists', type: 'string', title: 'Spotify Playlists', initialValue: 'Listas de Spotify' },
      ],
    }),
    defineField({
      name: 'chatGPT',
      type: 'object',
      title: 'ChatGPT',
      description: 'Translations for ChatGPT prompts section',
      fields: [
        { name: 'promptsTitle', type: 'string', title: 'ChatGPT Prompts Title', initialValue: 'Prompts para ChatGPT' },
      ],
    }),
    defineField({
      name: 'navigation',
      type: 'object',
      title: 'Navigation',
      description: 'Translations for navigation elements',
      fields: [
        { name: 'downloadEbook', type: 'string', title: 'Download E-book', initialValue: 'Descargar E-book' },
        { name: 'downloadPDF', type: 'string', title: 'Download PDF', initialValue: 'Descargar PDF' },
        { name: 'backToCycles', type: 'string', title: 'Back to Cycles', initialValue: 'Volver a Ciclos' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'language',
      subtitle: 'isDefault',
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: `${title.toUpperCase()} Translations`,
        subtitle: subtitle ? '(Default Language)' : '',
      };
    },
  },
})
