import { useState } from "react";
import navStyles from "./Nav.module.css";
function SideNav() {
  const [isOpen, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu((currentIsOpen) => !currentIsOpen);
  };
  return (
    <div>
      <ul className={navStyles.big_menu} onClick={() => toggleMenu()}>
        고객센터
      </ul>
      <ul className={isOpen ? navStyles.show_menu : navStyles.hide_menu}>
        <li>공지사항</li>
      </ul>
    </div>
  );
}

export default SideNav;
