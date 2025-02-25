import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import arrow_icon from "../assets/arrow_icon.svg";
import { IMyServiceSectionProps } from "../typings/type";

const MyServiceSection: React.FC<IMyServiceSectionProps> = ({
  myServiceInfo,
}) => {
  return (
    <section className="my-service-section-wrapper">
      <div className="my-service-title-wrapper">
        <h1>{myServiceInfo.title}</h1>
        <img src={theme_pattern} alt="theme-img" />
      </div>
      <div className="my-service-cards-wrapper">
        {myServiceInfo.serviceData.map((service) => (
          <div className="my-service-card">
            <h2>{service?.s_no}</h2>
            <h3>{service?.s_name}</h3>
            <p>{service?.s_desc}</p>
            <div className="my-service-card-read-more-btn">
              <p>Read More</p>
              <img src={arrow_icon} alt="read-more-arrow" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyServiceSection;
