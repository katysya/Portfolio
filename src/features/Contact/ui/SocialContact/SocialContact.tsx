import { ContactLink } from '../../../../shared/ui';
import { ContactData } from '../../../../shared/config/constants';

import './SocialContact.scss';

const SocialContact = () => {
  return (
    <div className="social-contact">
      <div className="social-contact__heading">
        We're on Social Media
      </div>
      <div className="social-contact__icons">
        {ContactData.map((item, index) => (
          <div
            className={`social-contact__icon ${item.name}`}
            key={index}
          >
            <ContactLink
              variant="max"
              url={item.url}
              name={item.name}
              size={item.size}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialContact;
