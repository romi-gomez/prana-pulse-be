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
        { name: 'equilibriumState', type: 'string', title: 'Equilibrium State', description: 'Translation for "Equilibrium State" section title', initialValue: 'Estado de Equilibrio' },
        { name: 'equilibriumCategories', type: 'string', title: 'Equilibrium Categories', description: 'Translation for "Equilibrium Categories" section title', initialValue: 'Categorías del Equilibrio' },
        { name: 'instabilityImbalance', type: 'string', title: 'Instability and Imbalance', description: 'Translation for "Instability and Imbalance" section title', initialValue: 'Inestabilidad y Desequilibrio' },
        { name: 'challenges', type: 'string', title: 'Challenges', description: 'Translation for "Challenges" section title', initialValue: 'Desafíos' },
        { name: 'excessEnergy', type: 'string', title: 'Excess Energy', description: 'Translation for "Excess Energy" section title', initialValue: 'Exceso de Energía' },
        { name: 'excessCategories', type: 'string', title: 'Excess Categories', description: 'Translation for "Excess Categories" section title', initialValue: 'Categorías del Exceso' },
        { name: 'pathToBalance', type: 'string', title: 'Path to Balance', description: 'Translation for "Path to Balance" section title', initialValue: 'Camino hacia el Equilibrio' },
        { name: 'transformation', type: 'string', title: 'Transformation', description: 'Translation for "Transformation" section title', initialValue: 'Transformación' },
        { name: 'objectives', type: 'string', title: 'Objectives', description: 'Translation for "Objectives" section title', initialValue: 'Objetivos' },
        { name: 'generalDescription', type: 'string', title: 'General Description', description: 'Translation for "General Description" section title', initialValue: 'Descripción General' },
      ],
    }),
    defineField({
      name: 'activityTypes',
      type: 'object',
      title: 'Activity Types',
      description: 'Translations for different activity types',
      fields: [
        { name: 'activities', type: 'string', title: 'Activities', description: 'Translation for "Activities" label', initialValue: 'Actividades' },
        { name: 'guidedMeditations', type: 'string', title: 'Guided Meditations', description: 'Translation for "Guided Meditations" label', initialValue: 'Meditaciones Guiadas' },
        { name: 'dailyMeditations', type: 'string', title: 'Daily Meditations', description: 'Translation for "Daily Meditations" label', initialValue: 'Meditaciones Diarias' },
        { name: 'practicesAndTools', type: 'string', title: 'Practices and Tools', description: 'Translation for "Practices and Tools" label', initialValue: 'Prácticas y Herramientas' },
        { name: 'affirmations', type: 'string', title: 'Affirmations', description: 'Translation for "Affirmations" label', initialValue: 'Afirmaciones' },
        { name: 'oracleMessages', type: 'string', title: 'Oracle Messages', description: 'Translation for "Oracle Messages" label', initialValue: 'Mensajes del Oráculo' },
      ],
    }),
    defineField({
      name: 'mediaResources',
      type: 'object',
      title: 'Media Resources',
      description: 'Translations for media resource sections',
      fields: [
        { name: 'mediaTitle', type: 'string', title: 'Media Resources Title', description: 'Translation for "Media Resources" section title', initialValue: 'Recursos Multimedia' },
        { name: 'images', type: 'string', title: 'Images', description: 'Translation for "Images" label', initialValue: 'Imágenes' },
        { name: 'videos', type: 'string', title: 'Videos', description: 'Translation for "Videos" label', initialValue: 'Videos' },
        { name: 'audios', type: 'string', title: 'Audios', description: 'Translation for "Audios" label', initialValue: 'Audios' },
        { name: 'links', type: 'string', title: 'Links', description: 'Translation for "Links" label', initialValue: 'Enlaces' },
        { name: 'spotifyPlaylists', type: 'string', title: 'Spotify Playlists', description: 'Translation for "Spotify Playlists" label', initialValue: 'Listas de Spotify' },
      ],
    }),
    defineField({
      name: 'chatGPT',
      type: 'object',
      title: 'ChatGPT',
      description: 'Translations for ChatGPT prompts section',
      fields: [
        { name: 'promptsTitle', type: 'string', title: 'ChatGPT Prompts Title', description: 'Translation for "ChatGPT Prompts" section title', initialValue: 'Prompts para ChatGPT' },
      ],
    }),
    defineField({
      name: 'navigation',
      type: 'object',
      title: 'Navigation',
      description: 'Translations for navigation elements',
      fields: [
        { name: 'downloadEbook', type: 'string', title: 'Download E-book', description: 'Translation for "Download E-book" button', initialValue: 'Descargar E-book' },
        { name: 'downloadPDF', type: 'string', title: 'Download PDF', description: 'Translation for "Download PDF" button', initialValue: 'Descargar PDF' },
        { name: 'backToCycles', type: 'string', title: 'Back to Cycles', description: 'Translation for "Back to Cycles" navigation link', initialValue: 'Volver a Ciclos' },
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
