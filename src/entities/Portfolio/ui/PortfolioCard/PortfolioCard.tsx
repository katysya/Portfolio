import { ReactNode, FC } from 'react';

import { Icon } from '@/shared/ui';

import './PortfolioCard.scss';

interface IPortfolioCard {
  icon: string;
  title: string;
  text: string;
  children?: ReactNode;
}

const PortfolioCard: FC<IPortfolioCard> = ({
  icon,
  title,
  text,
  children,
}) => {
  return (
    <div className="portfolio-card">
      <div className="portfolio-card__main">
        <div className="portfolio-card__name">
          <Icon name={icon} size={22} color="currentColor" />
          <div className="portfolio-card__title">{title}</div>
        </div>
        <div className="portfolio-card__description">{text}</div>
      </div>
      {children}
    </div>
  );
};

export default PortfolioCard;
