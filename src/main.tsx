import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { LoginProvider } from './context/LoginContext.tsx'
import { DetailProvider } from './context/DetailContext.tsx'

createRoot(document.getElementById('root')!).render(
	<AuthProvider>
		<ThemeProvider>
			<LoginProvider>
				<DetailProvider>
					<App />
				</DetailProvider>
			</LoginProvider>
		</ThemeProvider>
	</AuthProvider>,
)
