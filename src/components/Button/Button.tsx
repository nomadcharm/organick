import { FC, HTMLAttributes, ReactElement } from "react";
import { ReactSVG } from "react-svg";
import { btnArrow } from "../../assets/img/assets";

type ButtonType = "default" | "transparent" | "accent" | "fallback";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  type: ButtonType;
  svg?: boolean
  children?: string | ReactElement;
}

const Button: FC<ButtonProps> = ({ isLoading, type, svg, children, ...props }): ReactElement => {

  const buttonClasses: Record<ButtonType, string> = {
    default: "bg-[var(--clr-blue-dianne)]",
    transparent: "bg-transparent",
    accent: "bg-[var(--clr-golden-sand)]",
    fallback: "bg-[var(--clr-saltpan)]",
  };
  
  const buttonClass = buttonClasses[type];
  
  return (
    <button className={buttonClass}
      {...props}
    >
      {isLoading ? <p>Loading</p> : children}
      {svg && <ReactSVG src={btnArrow} />}
    </button>
  );
};

export default Button;
