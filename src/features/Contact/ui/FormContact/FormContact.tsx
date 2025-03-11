import { MainInput, TextArea, PrimaryButton } from '@/shared/ui';

import './FormContact.scss';

const FormContact = () => {
  return (
    <form className="form-contact">
      <div className="form-contact__title">Написать мне</div>
      <div className="form-contact__block">
        <MainInput type="email" placeholder="Email*" />
        <TextArea />
      </div>
      <PrimaryButton
        variant="submit"
        text="Отправить"
        icon="Send"
      ></PrimaryButton>
    </form>
  );
};

export default FormContact;
