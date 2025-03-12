import { forwardRef } from 'react';
import './TextArea.scss';

interface ITextArea {
  placeholder?: string;
  rows?: number;
}

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
  ({ placeholder = 'Сообщение*', rows = 3 }, ref) => {
    return (
      <textarea
        className="textarea"
        ref={ref}
        rows={rows}
        placeholder={placeholder}
        required
      />
    );
  }
);

export default TextArea;
