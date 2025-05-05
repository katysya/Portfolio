import { FC } from "react";

import Icon from "../Icon/ui/Icon";
import "./PrimaryButton.scss";
import CV from "../../assets/doc/CV_Fedyakina_Ekaterina_Frontend_Developer.pdf";

interface IPrimaryButton {
  variant: string;
  text: string;
  icon: string;
  disabled?: boolean;
}

const PrimaryButton: FC<IPrimaryButton> = ({
  variant,
  text,
  icon,
  disabled,
}) => {
  const Component = (variant === "link" ? "a" : "button") as "a" | "button";

  return (
    <Component
      className="primary-button"
      {...(variant === "link"
        ? {
            href: CV ?? undefined,
            download: "CV_Fedyakina_Ekaterina_Frontend_Developer",
          }
        : { disabled, type: "submit" })}
    >
      {text}
      <Icon name={icon} size={18} color="currentColor" />
    </Component>
  );
};

export default PrimaryButton;
