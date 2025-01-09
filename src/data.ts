import { dataMockType } from './types/data'

export const dataMock: dataMockType = [
	{
		title: 'backlog',
		replaceFrom: '',
		issues: [],
	},
	{
		title: 'ready',
		replaceFrom: 'backlog',
		issues: [],
	},
	{
		title: 'in-progress',
		replaceFrom: 'ready',
		issues: [],
	},
	{
		title: 'finished',
		replaceFrom: 'in-progress',
		issues: [],
	},
]
