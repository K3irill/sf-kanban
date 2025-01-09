import { dataMockType } from './types/data'

export const dataMock: dataMockType = [
	{
		title: 'backlog',
		replaceFrom: '',
		issues: [
			{
				id: '1',
				name: 'test-backlog',
				description: 'Fix bugs',
			},
		],
	},
	{
		title: 'ready',
		replaceFrom: 'backlog',
		issues: [
			{
				id: '2',
				name: 'test-ready',
				description: 'description ready',
			},
		],
	},
	{
		title: 'in-progress',
		replaceFrom: 'ready',
		issues: [
			{
				id: '3',
				name: 'test-progress',
				description: 'description progress',
			},
		],
	},
	{
		title: 'finished',
		replaceFrom: 'in-progress',
		issues: [
			{
				id: '4',
				name: 'test-finished',
				description: 'description finished',
			},
		],
	},
]
