import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// react query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'

// create query client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
