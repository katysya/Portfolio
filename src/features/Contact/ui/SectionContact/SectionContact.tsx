import { useTheme } from '@/app/Context/ThemeContext';

import { FormContact, SocialContact } from '../../index';

import './SectionContact.scss';

const SectionContact = () => {
  const { isDark } = useTheme();

  const generateStars = (numStars: number) => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const shadows = [];

    for (let i = 0; i < numStars; i++) {
      const x = Math.floor(Math.random() * width);
      const y = Math.floor(Math.random() * height);

      shadows.push(`${x}px ${y}px ${isDark ? 'white' : 'black'}`);
    }

    return shadows.join(', ');
  };

  return (
    <div className="section-contact">
      <div className="section-contact__block">
        <FormContact />
        <SocialContact />
      </div>
      <div
        className="section-contact__stars _1"
        style={{
          boxShadow: generateStars(140),
        }}
      ></div>
      <div
        className="section-contact__stars _2"
        style={{
          boxShadow: generateStars(100),
        }}
      ></div>
      <div
        className="section-contact__stars _3"
        style={{
          boxShadow: generateStars(120),
        }}
      ></div>
    </div>
  );
};

export default SectionContact;
