import {
  MainInput,
  TextArea,
  PrimaryButton,
} from '../../../../shared/ui';

import './FormContact.scss';

const FormContact = () => {
  return (
    <form className="form-contact">
      <div className="form-contact__block">
        <MainInput type="text" placeholder="Name*" />
        <MainInput type="email" placeholder="Email*" />
      </div>
      <TextArea />
      <PrimaryButton
        variant="submit"
        text="Submit"
        icon="Send"
      ></PrimaryButton>
    </form>
  );
};

export default FormContact;
