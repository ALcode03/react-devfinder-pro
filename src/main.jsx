import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import { FavoritesProvider } from './context/FavoritesContext.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavoritesProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </FavoritesProvider>
  </StrictMode>
)
