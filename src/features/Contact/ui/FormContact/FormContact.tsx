import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import './FormContact.scss';

const FormContact = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const highlightedCells = [3, 7, 15, 25, 33];

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedIndex(Math.floor(Math.random() * 37));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="form-contact-container">
      {[...Array(34)].map((_, index) => (
        <motion.div
          key={index}
          className={`form-contact-container__item ${
            highlightedCells.includes(index) ? '_highlighted' : ''
          } ${index === highlightedIndex ? '_animating' : ''}`}
        />
      ))}
      <div className="form-contact-container__block">
        <h2 className="form-contact-container__block-title">
          Contact me
        </h2>
      </div>
    </div>
  );
};

export default FormContact;
