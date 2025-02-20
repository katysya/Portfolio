import {
  FormContact,
  ContainerContact,
} from '../../../features/Contact';

import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact">
      <ContainerContact>
        <FormContact />
      </ContainerContact>
    </div>
  );
};

export default Contact;
