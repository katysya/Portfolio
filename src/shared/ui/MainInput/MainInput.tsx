import { forwardRef } from 'react';
import './MainInput.scss';

interface IMainInput {
  type: string;
  name: string;
  placeholder: string;
}

const MainInput = forwardRef<HTMLInputElement, IMainInput>(
  ({ type, name, placeholder }, ref) => {
    return (
      <input
        className="main-input"
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        required
      />
    );
  }
);

export default MainInput;
