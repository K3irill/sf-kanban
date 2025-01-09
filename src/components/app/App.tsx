import Header from '../header/Header'
import './App.scss'
import Board from '../Board/Board'
import DataTasksProvider from '../../context/data-tasks-context'

const App = () => {
	return (
		<DataTasksProvider>
			<div className='app'>
				<Header />
				<Board />
			</div>
		</DataTasksProvider>
	)
}

export default App
