import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePage } from '../../../../src/shared/ui/index';

import { pages } from '../config';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {pages.map((item) => (
          <Route
            key={item.id}
            path={item.path}
            element={
              <AnimatePage
                variants={0}
                transition={{ duration: 0.8 }}
              >
                <item.component />
              </AnimatePage>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
