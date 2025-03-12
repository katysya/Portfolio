import { useRef, useState } from 'react';
import { MainInput, TextArea, PrimaryButton } from '@/shared/ui';
import { PortfolioBot } from '@/shared/config/constants';

import './FormContact.scss';

const FormContact = () => {
  const [sendForm, setSendForm] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value || '';
    const message = messageRef.current?.value || '';

    const text = `Email: ${email}\nСообщение: ${message}`;

    const url = `${PortfolioBot.url}&text=${encodeURIComponent(
      text
    )}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        setSendForm(true);
        if (emailRef.current) emailRef.current.value = '';
        if (messageRef.current) messageRef.current.value = '';
      } else {
        console.log('Ошибка при отправке в Telegram.');
      }
    } catch (error) {
      console.log(`Ошибка: ${error}`);
    }
  };

  return (
    <form className="form-contact" onSubmit={handleSubmit}>
      <div className="form-contact__title">Написать мне</div>
      <div className="form-contact__block">
        <div
          className={`form-contact__thanks ${
            !sendForm ? '_hide' : ''
          }`}
        >
          Сообщение отправлено ✨
        </div>
        <MainInput
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Email*"
        />
        <TextArea ref={messageRef} placeholder="Cообщение*" />
        <PrimaryButton
          variant="submit"
          text="Отправить"
          icon="Send"
        ></PrimaryButton>
      </div>
    </form>
  );
};

export default FormContact;
