import './TextArea.scss';

const TextArea = () => {
  return (
    <textarea
      className="textarea"
      rows={3}
      placeholder="Сообщение*"
      required
    />
  );
};

export default TextArea;
