import { useState, useContext } from "react";
import { CartContext } from "../../context/handleCart";
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
  DefaultColorCart,
  SymbolQuantityCartNumber,
  LinkCart,
} from "./style";
import {
  List,
  X,
  User,
  ShoppingCartSimple,
  SignOut,
  House,
  ForkKnife,
  Gear,
} from "phosphor-react";
import logo from "../../assets/logo.png";
import api from "../../service/api";

export function Navbar() {
  const [menuClick, setMenuClick] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const { productsCart } = useContext(CartContext);

  const toggleMenuClick = () => {
    setMenuClick(!menuClick);
  };

  function handleSignout() {
    api
      .post("/auth/signout")
      .then(() => {
        localStorage.removeItem("user");
        navigate("/");
      })
      .catch((error) => {
        if (error.message === "Failed to refresh token") {
          navigate("/login");
        }
      });
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
            <NavLink to="/products">
              <DefaultColor>
                <ForkKnife size={22} alt={"Catalog"} />
              </DefaultColor>
            </NavLink>
          </Link>
        </Item>
        <Item>
          <LinkCart>
            <NavLink to="/cart">
              <DefaultColorCart>
                <ShoppingCartSimple size={22} alt={"Shopping Cart"} />
                <SymbolQuantityCartNumber>
                  {productsCart.length}
                </SymbolQuantityCartNumber>
              </DefaultColorCart>
            </NavLink>
          </LinkCart>
        </Item>
        <Item>
          <Link>
            <NavLink to="/config">
              <DefaultColor>
                <Gear size={22} alt={"Config"} />
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
