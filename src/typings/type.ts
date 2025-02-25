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
    roleText: string;
    description: string;
  };
}

export interface IAboutMeSectionProps {
  aboutMeInfo: {
    description: string;
    subDescription?: string;
    proficiency: { techStackName: string; precentage: string }[];
    achievementsInfo: { count: string; description: string }[];
  };
  withSubDescription: boolean;
}

export interface IMyServiceSectionProps {
  myServiceInfo: {
    title: string;
    serviceData: { s_no: string; s_name: string; s_desc: string }[];
  };
}
