const saveTaskToLocalStorage = (tasks: any[]) => {
	try {
		const tasksJSON = JSON.stringify(tasks)
		localStorage.setItem('tasks', tasksJSON)
	} catch (error) {
		console.error('Error saving tasks to localStorage:', error)
	}
}

export default saveTaskToLocalStorage
