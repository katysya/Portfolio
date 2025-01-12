import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '../../../../app/Context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

import { Header } from '../../../widgets/Header/index';
import { Footer } from '../../../widgets/Footer/index';

import { AnimatedRoutes } from '../../../../app/providers/router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
