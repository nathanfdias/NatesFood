import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/useAuth";
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
  const auth = useAuth();
  const navigate = useNavigate();

  const toggleMenuClick = () => {
    setMenuClick(!menuClick);
  };

  function handleSignout() { 
       auth.logout()
       navigate("/login")
  }

  const ListLinks = () => {
    return (
      <>
        <Item>
          <Link href={"/"}>
            <House size={22} alt={'Home Page'}/>
          </Link>
        </Item>
        <Item>
          <Link href={"/perfil"}>
            <User size={22} alt={'Perfil'}/>
          </Link>
        </Item>
        <Item>
          <Link href={"/products"}>
            <ForkKnife size={22} alt={'Catalog'}/>
          </Link>
        </Item>
        <Item>
          <Link href={"#"}>
            <ShoppingCartSimple size={22} alt={'Shopping Cart'}/>
          </Link>
        </Item>
        <Item>
          <Link >
            <SignOut size={22} alt={'LogOut'} onClick={handleSignout}/>
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
