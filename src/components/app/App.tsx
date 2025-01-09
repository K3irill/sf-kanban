import React, { useEffect } from 'react'
import Header from '../header/Header'
import './App.scss'
import Board from '../Board/Board'
import { useDataTasks } from '../../context/data-tasks-context'
import { BrowserRouter, Route, Routes } from 'react-router'
import TaskDetails from '../Task/TaskDetails/TaskDetails'
import Footer from '../footer/Footer'

const App = () => {
	const { setDataTasks } = useDataTasks()

	useEffect(() => {
		const storageTasks = localStorage.getItem('tasks')
		if (storageTasks) {
			try {
				const parsedTasks = JSON.parse(storageTasks)
				if (Array.isArray(parsedTasks)) {
					setDataTasks(parsedTasks)
				} else {
					console.warn('Tasks in localStorage are not an array')
				}
			} catch (error) {
				console.error('Error parsing tasks from localStorage:', error)
			}
		}
	}, [setDataTasks])

	return (
		<BrowserRouter>
			<div className='app'>
				<Header />
				<main>
					<Routes>
						<Route path='/' element={<Board />} />
						<Route path='tasks/:id' element={<TaskDetails />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
