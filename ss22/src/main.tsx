import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ProductProvider } from './Context/global'   // ✅ import Provider

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductProvider>   
      <App />
    </ProductProvider>
  </StrictMode>,
)
