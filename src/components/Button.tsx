import React from "react";
import { IButtonProps } from "../type/type";

const Button: React.FC<IButtonProps> = ({
  label,
  className,
  type,
  disabled,
  children,
  style,
  onClick,
}) => {
  return (
    <div>
      <button
        type={type}
        className={className}
        onClick={onClick}
        disabled={disabled}
        style={style}
      >
        {label && label}
        {children && children}
      </button>
    </div>
  );
};

export default Button;
