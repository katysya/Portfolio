import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '../../../../app/Context/ThemeContext';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from '../../Home/index';
import { Projects } from '../../Projects/index';
import { Header } from '../../../widgets/Header/index';
import { Footer } from '../../../widgets/Footer/index';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
