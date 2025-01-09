import { dataMockType } from './types/data'

export const dataMock: dataMockType = [
	{
		title: 'backlog',
		issues: [
			{
				id: '1',
				name: 'Sprint bugfix',
				description: 'Fix bugs',
			},
			{
				id: '6',
				name: 'web-site',
				description: 'Fix web-site',
			},
		],
	},
	{
		title: 'ready',
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
		issues: [
			{
				id: '4',
				name: 'test-finished',
				description: 'description finished',
			},
		],
	},
]
