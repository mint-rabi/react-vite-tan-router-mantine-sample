import ReactDOM from 'react-dom/client'
import App from './App'
import '@mantine/core/styles.css'

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
}
