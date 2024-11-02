import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from './Context/ThemeContext.tsx';
import { MainPage } from '../src/pages/MainPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <MainPage />
    </ThemeProvider>
  </StrictMode>
);
