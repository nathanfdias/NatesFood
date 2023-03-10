import styled from "styled-components";

export const NavBarContainer = styled.main`
  position: sticky;
  height: 70px;
  background-color: #2E2E2E;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px 0px 30px;
  margin-bottom: -70px;
  z-index: 5;
`;

export const NavBarLogo = styled.span`
  color: #fff;
  font-size: 1.8rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const LogoImg = styled.img`
  height: 2.6rem;
`

export const Icon = styled.div`
  cursor: pointer;
  color: #ffff;
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;

export const Item = styled.li`
  white-space: nowrap;
`;

export const NavBarList = styled.ul`
  display: flex;
  list-style: none;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    top: 70px;
    left: -100%;
    width: 100%;
    height: 300px;
    position: absolute;
    transition: all 0.5s ease;
  }
`;

export const NavBarListAct = styled.ul`
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    top: 70px;
    left: -100%;
    width: 100%;
    height: 300px;
    position: absolute;
    transition: all 0.5s ease;
    left: 0;
    list-style: none;
    text-decoration: none;
    background-color: #222;
  }
`;

export const Link = styled.div`
  font-size: 1.2rem;
  text-decoration: none;
  color: #F0BF8C;
  text-align: center;
  padding: 10px;
  margin: 0px 5px;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: transparent;
  transition: 250ms;

  &:hover {
    border-color: #F0BF8C;
    transition: 250ms;
  }

  @media (max-width: 800px) {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0px;
    border-width: 0px;
    opacity: 0.75;
    &:hover {
      border-width: 0px;
      opacity: 0.9;
    }
  }
`;

export const DefaultColor = styled.div`
  color: #F0BF8C;
`;

  export const DefaultColorCart = styled.div`
  color: #F0BF8C;
  display:flex;
  align-items: center;
  justify-content: center;
`;

export const LinkCart = styled.div`
  font-size: 1.2rem;
  text-decoration: none;
  color: #F0BF8C;
  text-align: center;
  padding: 10px;
  padding-bottom: 10px;
  margin: 0px 5px;
  transition: 250ms;
  height: 49px;

  &:hover {
    border-bottom: 1px solid #F0BF8C;
    transition: 250ms;
  }

  @media (max-width: 800px) {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0px;
    border-width: 0px;
    opacity: 0.75;
    &:hover {
      border-width: 0px;
      opacity: 0.9;
    }
  }
`;

export const SymbolQuantityCartNumber = styled.p`
border-color:red;
  font-size: 0.8rem;
  background-color: red;
  color: #fff;
  width: 0.8rem;
  height: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 60%;
  font-weight: 700;
  margin-left: -0.4rem;
  margin-top: -0.6rem;
`;