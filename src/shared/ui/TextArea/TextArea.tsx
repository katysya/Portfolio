import './TextArea.scss';

const TextArea = () => {
  return (
    <textarea
      className="textarea"
      rows={3}
      placeholder="Message*"
      required
    />
  );
};

export default TextArea;
