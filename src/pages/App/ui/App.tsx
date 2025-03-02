import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '../../../../app/Context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import { MainPage } from '../../MainPage/index';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
