import './TextLabel.scss';

interface ITextLabel {
  primaryText: string;
  secondaryText: string;
  active: boolean;
}

const Textlabel = ({
  primaryText,
  secondaryText,
  active,
}: ITextLabel) => {
  return (
    <div className={`text-label ${active ? 'active' : ''}`}>
      <p className="text-label__primary text-label__text">
        {primaryText}
      </p>
      <p className="text-label__secondary text-label__text">
        {secondaryText}
      </p>
    </div>
  );
};

export default Textlabel;
