import { Icon, ContactLink } from '../../../shared/ui/index';
import { useTheme } from '../../../../app/Context/ThemeContext';

import './Footer.scss';

const Footer = () => {
  const { isDark } = useTheme();

  const settingsIcon = [
    {
      id: 1,
      name: 'Telegram',
      size: 22,
      url: '#telegram',
    },
    {
      id: 2,
      name: 'GitHub',
      size: 22,
      url: '#gitHub',
    },
    {
      id: 3,
      name: 'Email',
      size: 22,
      url: '#email',
    },
    {
      id: 4,
      name: 'LinkedIn',
      size: 22,
      url: '#linkedIn',
    },
  ];

  return (
    <footer className={`footer ${isDark ? 'dark' : 'light'}`}>
      <div className="container footer__container">
        <div className="footer__content">
          <div className="footer__text">
            &copy;2025. All right reserved.
          </div>
          <div className="footer__social">
            {settingsIcon.map((item) => (
              <ContactLink
                key={item.id}
                variant="mini"
                url={item.url}
                name={item.name}
                size={item.size}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
