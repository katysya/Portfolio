import './MainInput.scss';

interface IMainInput {
  type: string;
  placeholder: string;
}

const MainInput = ({ type, placeholder }: IMainInput) => {
  return (
    <input
      className="main-input"
      type={type}
      placeholder={placeholder}
      required
    />
  );
};

export default MainInput;
