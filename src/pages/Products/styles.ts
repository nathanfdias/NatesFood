import styled from "styled-components";

export const Body = styled.div`
  background-color: rgb(240, 240, 240);
`;

export const MainProduct = styled.main`
  width: 100%;
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageBanner = styled.img`
  width: 25%;
`;

export const CategoryContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  width: 68%;
  background-color: #fff;
  border-radius: 34px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.4rem;
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* color: ; */
  font-size: 1.2rem;
  cursor: pointer;
`;

export const ProductsContainer = styled.div`
width: 100%;
display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-inline: 10rem;
  gap: 6rem;
  margin-bottom: 4rem;
`;

export const ProductsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

export const ProductImages = styled.img`
      width: 260px;
  height: 320px;
  background-size: cover;
background-position: center;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
`

export const ProductDescription = styled.div`
    width: 260px;
  height: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  border-top: none;
  font-size: 1.4rem;
  font-family: 'Courier New', Courier, monospace;
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
`

export const ProductButtonCart = styled.button`
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #202020;
    color: white;
    cursor: pointer;
    padding: 0.4rem;
    font-size: 0.8rem;
    font-weight: bolder;
`
