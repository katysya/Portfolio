import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

import './ContainerContact.scss';

interface IFormContact {
  children?: ReactNode;
}

const FormContact = ({ children }: IFormContact) => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const highlightedCells = [3, 7, 8, 15, 25, 30, 33];

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
          style={{ animationDelay: `${index * 100}ms` }}
        />
      ))}
      <div className="form-contact-container__block">
        <h2 className="form-contact-container__block-title">
          Contact me
        </h2>
        {children}
      </div>
    </div>
  );
};

export default FormContact;
