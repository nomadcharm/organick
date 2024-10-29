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
    default: "text-white bg-[var(--clr-blue-dianne)]",
    transparent: "border-1 border-solid border-[var(--clr-blue-dianne)] bg-transparent",
    accent: "bg-[var(--clr-golden-sand)]",
    fallback: "bg-[var(--clr-saltpan)]",
  };
  
  const buttonClass = buttonClasses[type];
  
  return (
    <button className={`flex items-center gap-2.5 py-7 px-[39px] rounded-2xl text-[20px] font-bold leading-6 ${buttonClass}`}
      {...props}
    >
      {isLoading ? <p>Loading</p> : children}
      {svg && <ReactSVG src={btnArrow} width={19} height={19} />}
    </button>
  );
};

export default Button;
