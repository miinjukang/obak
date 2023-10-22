import SideNav from "../nav/SideNav";
import noticeStyles from "./Notice.module.css";

const Notice = () => {
  return (
    <div>
      <div className={noticeStyles.nav_bar}>
        <SideNav></SideNav>
      </div>
    </div>
  );
};

export default Notice;
