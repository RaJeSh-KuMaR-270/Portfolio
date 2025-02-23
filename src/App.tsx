import AboutSection from "./components/AboutSection";
import Navbar from "./components/Navbar";
import ProfileSection from "./components/ProfileSection";
import { aboutMeSectionInfo, profileSectionInfo } from "./constants/constants";

const AppLayout = () => {
  return (
    <div className="app">
      <Navbar />
      <ProfileSection profileInfo={profileSectionInfo} />
      <AboutSection
        aboutMeInfo={aboutMeSectionInfo}
        withSubDescription={false}
      />
    </div>
  );
};

export default AppLayout;
