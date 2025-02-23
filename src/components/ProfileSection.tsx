import React from "react";
import profile_img from "../assets/profile_img.svg";
import { IProfileInfoProps } from "../typings/type";
import Button from "./Button";

const ProfileSection: React.FC<IProfileInfoProps> = ({ profileInfo }) => {
  return (
    <section className="profile-section-wrapper">
      <img src={profile_img} alt="profile-image" />
      <h1>
        <span>{profileInfo?.name}</span>
        {profileInfo?.roleText}
      </h1>
      <p>{profileInfo?.description}</p>
      <div className="profile-action-btn-wrapper">
        <Button label="Connect with me" type="button" className="connect-action-btn" />
        <Button label="My Resume" type="button" className="resume-action-btn" />
      </div>
    </section>
  );
};

export default ProfileSection;
