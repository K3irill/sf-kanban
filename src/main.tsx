import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import App from './components/app/App'
import DataTasksProvider from './context/data-tasks-context'

createRoot(document.getElementById('root')!).render(
	<DataTasksProvider>
		<StrictMode>
			<App />
		</StrictMode>
	</DataTasksProvider>
)
