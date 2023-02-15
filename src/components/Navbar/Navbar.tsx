import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../utils/useAuth";
import {
  NavBarContainer,
  NavBarLogo,
  Icon,
  Item,
  Link,
  NavBarList,
  NavBarListAct,
  LogoImg,
  DefaultColor,
} from "./style";
import {
  List,
  X,
  User,
  ShoppingCartSimple,
  SignOut,
  House,
  ForkKnife,
} from "phosphor-react";
import logo from "../../assets/logo.png";

export function Navbar() {
  const [menuClick, setMenuClick] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  const toggleMenuClick = () => {
    setMenuClick(!menuClick);
  };

  function handleSignout() {
    auth.logout();
    navigate("/login");
  }

  const ListLinks = () => {
    return (
      <>
        <Item>
          <Link>
            <NavLink to="/">
              <DefaultColor>
                <House size={22} alt={"Home Page"} />
              </DefaultColor>
            </NavLink>
          </Link>
        </Item>
        <Item>
          <Link>
            <NavLink to="/perfil">
              <DefaultColor>
                <User size={22} alt={"Perfil"} />
              </DefaultColor>
            </NavLink>
          </Link>
        </Item>
        <Item>
          <Link>
            <NavLink to="/products">
              <DefaultColor>
                <ForkKnife size={22} alt={"Catalog"} />
              </DefaultColor>
            </NavLink>
          </Link>
        </Item>
        <Item>
          <Link>
            <NavLink to="#">
            <DefaultColor>
              <ShoppingCartSimple size={22} alt={"Shopping Cart"} />
            </DefaultColor>
            </NavLink>
          </Link>
        </Item>
        <Item>
          <Link>
            <NavLink to="/login">
            <DefaultColor>
              <SignOut size={22} alt={"LogOut"} onClick={handleSignout} />
            </DefaultColor>
            </NavLink>
          </Link>
        </Item>
      </>
    );
  };

  return (
    <NavBarContainer>
      <NavBarLogo>
        Nate's Food <LogoImg src={logo} />{" "}
      </NavBarLogo>

      {menuClick ? (
        <Icon>
          <X onClick={toggleMenuClick} size={30} />
        </Icon>
      ) : (
        <Icon>
          <List onClick={toggleMenuClick} size={30} />
        </Icon>
      )}
      {menuClick ? (
        <NavBarListAct>
          {(() => {
            return <ListLinks />;
          })()}
        </NavBarListAct>
      ) : (
        <NavBarList>
          {(() => {
            return <ListLinks />;
          })()}
        </NavBarList>
      )}
    </NavBarContainer>
  );
}
