import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import profile_img from "../assets/about_profile.svg";
import { IAboutMeSectionProps } from "../typings/type";

const AboutSection: React.FC<IAboutMeSectionProps> = ({
  aboutMeInfo,
  withSubDescription,
}) => {
  return (
    <section className="about-section">
      <div className="about-section-title-wrapper">
        <h1>About me</h1>
        <img src={theme_pattern} alt="about-me" />
      </div>
      <div className="about-me-profile-info-wrapper">
        <div className="profile-info-left-section">
          <img src={profile_img} alt="profile-image" />
        </div>
        <div className="profile-info-right-section-wrapper">
          <div className="about-me-description-section">
            <p>{aboutMeInfo?.description}</p>
            {withSubDescription && <p>{aboutMeInfo?.subDescription}</p>}
          </div>
          <div className="about-me-skills-wrapper">
            {aboutMeInfo?.proficiency?.map((skillItem) => (
              <div className="about-me-skill" key={skillItem?.techStackName}>
                <p>{skillItem?.techStackName}</p>
                <hr style={{ width: `${skillItem?.precentage}` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="about-me-achievements-wrapper">
        {aboutMeInfo?.achievementsInfo?.map((achievementItem) => (
          <>
            <div className="about-me-achievement">
              <h1>{achievementItem?.count}</h1>
              <p>{achievementItem?.description}</p>
            </div>
            <hr />
          </>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
