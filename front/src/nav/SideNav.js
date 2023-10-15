import Nav from "./Nav";
import NavLink from "./NavLink";
import NavList from "./NavList";

function isActive(path) {
  return window.location.pathname.startsWith(path);
}

function SideNav() {
  return (
    <Nav>
      <NavList>
        <NavLink to="/Notice" active={isActive("/Notice")}>
          고객센터
        </NavLink>
        <NavList expanded={isActive("/Notice")}>
          <NavLink to="/Notice" active={isActive("/Notice")}>
            공지사항
          </NavLink>
        </NavList>
      </NavList>
    </Nav>
  );
}

export default SideNav;
