import React, {
	createContext,
	PropsWithChildren,
	useState,
	Dispatch,
	SetStateAction,
} from 'react'
import { dataMock } from '../data'
import { dataMockType } from '../types/data'

type DataTaskContextType = {
	dataTasks: dataMockType
	setDataTasks: Dispatch<SetStateAction<dataMockType>>
}

const DataTaskContext = createContext<DataTaskContextType | undefined>(
	undefined
)

const DataTasksProvider = ({ children }: PropsWithChildren) => {
	const [dataTasks, setDataTasks] = useState(dataMock)

	return (
		<DataTaskContext.Provider value={{ dataTasks, setDataTasks }}>
			{children}
		</DataTaskContext.Provider>
	)
}

export const useDataTasks = () => {
	const context = React.useContext(DataTaskContext)
	if (!context) {
		throw new Error('useDataTasks must be used within a DataTasksProvider')
	}
	return context
}

export default DataTasksProvider
