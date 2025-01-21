import './Hashtag.scss';

interface IHashtag {
  text: string;
}

const Hashtag = ({ text }: IHashtag) => {
  return <div className="hashtag">{text}</div>;
};

export default Hashtag;
