import { ReactNode } from "react";

export interface IButtonProps {
  children?: ReactNode;
  label: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  className: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export interface IProfileInfoProps {
  profileInfo: {
    name: string;
    roleText:string;
    description: string;
  };
}
