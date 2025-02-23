import Navbar from "./components/Navbar";
import ProfileSection from "./components/ProfileSection";
import { profileSectionInfo } from "./constants/constants";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <ProfileSection profileInfo={profileSectionInfo} />
    </div>
  );
};

export default AppLayout;
