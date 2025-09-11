
import { createRoot } from 'react-dom/client'
import './App.css'
import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router'
function App() {
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
}

export default App