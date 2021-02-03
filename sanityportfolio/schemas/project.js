const blurbMaxLength = 100;

const projectSchema = {
	name: 'project',
	title: 'Project',
	type: 'document',

	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'created',
			title: 'Created',
			description: 'Which year was the project created?',
			type: 'date',
			options: {
				dateFormat: 'YYYY',
			},
		},
		{
			name: 'technolgies',
			title: 'Technologies',
			description: 'List the technologies, software and languages used on this project',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			name: 'coverImage',
			title: 'Cover image',
			description: 'Main image for project. Displayed on projects page.',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'media',
			title: 'Media',
			description: 'Images and videos that will be displayed on the show page for the project.',
			type: 'array',
			of: [{ type: 'file' }],
		},
		{
			name: 'blurb',
			title: 'Blurb',
			description: 'A short summary of the project',
			type: 'text',
			maxLength: blurbMaxLength,
			validation: (Rule) =>
				Rule.max(blurbMaxLength).error(`Don't make the blurb too long! (${blurbMaxLength} characters)`),
		},
		{
			name: 'description',
			title: 'Description',
			description: 'Description of the project. Can include technologies used, what the project does, etc.',
			type: 'text',
		},
		{
			name: 'features',
			title: 'Features',
			description: 'List the main parts of the project.',
			type: 'array',
			of: [{ type: 'string' }],
		},
		{
			name: 'reflection',
			title: 'Reflection',
			description: `Describe what you learned and what went well, say what didn't go so well and where you would improve/what you would do in the future.`,
			type: 'text',
		},
		{
			name: 'githubLink',
			title: 'GitHub link',
			type: 'url',
		},
	],
};

export default projectSchema;
