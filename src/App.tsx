import AboutSection from "./components/AboutSection";
import MyServiceSection from "./components/MyServiceSection";
import Navbar from "./components/Navbar";
import ProfileSection from "./components/ProfileSection";
import {
  aboutMeSectionInfo,
  myServiceSectionInfo,
  profileSectionInfo,
} from "./constants/constants";

const AppLayout = () => {
  return (
    <div className="app">
      <Navbar />
      <ProfileSection profileInfo={profileSectionInfo} />
      <AboutSection
        aboutMeInfo={aboutMeSectionInfo}
        withSubDescription={false}
      />
      <MyServiceSection myServiceInfo={myServiceSectionInfo} />
    </div>
  );
};

export default AppLayout;
