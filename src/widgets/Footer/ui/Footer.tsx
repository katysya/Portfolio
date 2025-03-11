import { ContactLink } from '@/shared/ui';
import { useTheme } from '@app/Context/ThemeContext';

import { ContactData } from '@/shared/config/constants';

import './Footer.scss';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`footer ${isDark ? '_dark' : '_light'}`}>
      <div className="container footer__container">
        <div className="footer__content">
          <div className="footer__text">
            &copy;2025. All right reserved.
          </div>
          <div className="footer__social">
            {ContactData.map((item, index) => (
              <div key={index}>
                <ContactLink
                  variant="mini"
                  url={item.url}
                  name={item.name}
                  size={item.size}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
