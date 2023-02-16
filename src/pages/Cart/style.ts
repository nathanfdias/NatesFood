import styled from "styled-components";

export const Body = styled.div`
  background-color: rgb(240, 240, 240);
  min-height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  margin-bottom: 3rem;
  width: 80vw;
  min-height: 80vh;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const DivHeader = styled.div`
  margin: auto;
  width: 90%;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #2f3841;
  text-transform: uppercase;
`;

export const ActionTitle = styled.h5`
  font-size: 14px;
  font-weight: 600;
  color: #e44c4c;
  cursor: pointer;
  border-bottom: 1px solid #e44c4c;
  text-transform: uppercase;
`;

export const DivContainerCart = styled.div`
min-height: 26rem;
width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 20px;
`;

export const DivCart = styled.div`
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageBox = styled.div`
  width: 15%;
  text-align: center;
`;

export const ImgProduct = styled.img`
  height: 100px;
  width: 10rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  @media(max-width: 1400px){
    width: 8rem;
    height: 80px;
}
`;

export const DivAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 30rem;
`;

export const Title = styled.h1`
  padding-top: 5px;
  line-height: 10px;
  font-size: 32px;
  font-weight: 800;
  color: #202020;
  @media(max-width: 1400px){
    font-size: 24px;
    padding-left: 6rem;
    line-height: 20px;
  }
`;

export const DivCounter = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 900;
  color: #202020;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const Number = styled.h4`
  font-size: 20px;
  font-weight: 900;
  color: #202020;
`;

export const DivPrices = styled.div`
  width: 10rem;
  height: 100%;
  text-align: right;
  display: flex;
  flex-direction: column;
`;

export const DivAmount = styled.div`
  padding-top: 20px;
  font-size: 26px;
  font-weight: 800;
  color: #202020;
`;

export const DivRemove = styled.div`
  padding-top: 5px;
  font-size: 14px;
  font-weight: 600;
  color: #e44c4c;
  cursor: pointer;
`;

export const LineBreak = styled.hr`
  width: 86%;
  float: right;
  color: #e44c4c;
`;

export const DivCheckout = styled.div`
  margin-top: 1.5%;
  float: right;
  margin-right: 5%;
  width: 28%;
`;
export const DivTotal = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DivSubAndItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media(max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

`;

export const Subtotal = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #202020;
`;

export const Items = styled.h4`
  font-size: 16px;
  font-weight: 500;
  line-height: 10px;
`;

export const DivTotalAmount = styled.div`
  font-size: 28px;
  font-weight: 900;
  color: #202020;
`;

export const ButtonCheckout = styled.button`
padding-block: 0.7rem;
width: 9rem;
margin-block: 3rem;
  border: none;
  background: #202020;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  @media(max-width: 1300px) {
    margin-block: 1rem;
}
`;

export const DivEmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 26rem;
  width: 100%;
`;

export const TitleEmptyCart = styled.h2`
  font-size: 1.8rem;
  font-style: italic;
  font-weight: 700;
  color: #2f3841;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.65);
`;