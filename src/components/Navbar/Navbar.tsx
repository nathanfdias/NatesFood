import React, { useState } from "react";
import {
  NavBarContainer,
  NavBarLogo,
  Icon,
  Item,
  Link,
  NavBarList,
  NavBarListAct,
  LogoImg
} from "./style";
import {
  List,
  X,
  User,
  ShoppingCartSimple,
  SignOut,
  House,
  ForkKnife
} from "phosphor-react";
import logo from '../../assets/logo.png';

export function Navbar() {
  const [menuClick, setMenuClick] = useState(false);

  const toggleMenuClick = () => {
    setMenuClick(!menuClick);
  };

  const ListLinks = () => {
    return (
      <>
        <Item>
          <Link href={"#"}>
            <House size={22} alt={'Home Page'}/>
          </Link>
        </Item>
        <Item>
          <Link href={"#"}>
            <User size={22} alt={'Perfil'}/>
          </Link>
        </Item>
        <Item>
          <Link href={"#"}>
            <ForkKnife size={22} alt={'Catalog'}/>
          </Link>
        </Item>
        <Item>
          <Link href={"#"}>
            <ShoppingCartSimple size={22} alt={'Shopping Cart'}/>
          </Link>
        </Item>
        <Item>
          <Link href={"#"}>
            <SignOut size={22} alt={'LogOut'}/>
          </Link>
        </Item>
      </>
    );
  };

  return (
    <NavBarContainer>
      <NavBarLogo>Nate's Food <LogoImg src={logo}/> </NavBarLogo>

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
