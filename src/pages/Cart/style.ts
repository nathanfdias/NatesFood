import styled from 'styled-components';

export const Body = styled.div`
  background-color: rgb(240, 240, 240);
  min-height: 100vh;
`;

export const Container = styled.div ` 
    margin: 0;
    padding: 0;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const ContentDiv = styled.div `
    width: 70%;
    height: 85%;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 0px 25px 40px #1687d933;
`

export const DivHeader = styled.div `
    margin: auto;
    width: 90%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;


`
export const HeaderTitle = styled.h3 `
    font-size: 20px;
    font-weight: 700;
    color: #2F3841;
    text-transform: uppercase;

`

export const ActionTitle = styled.h5 `
        font-size: 14px;
        font-weight: 600;
        color: #E44C4C;
        cursor: pointer;
        border-bottom: 1px solid #E44C4C;
        text-transform: uppercase;
`


export const DivCart = styled.div `
    margin: auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const ImageBox = styled.div `
    width: 15%;
    text-align: center;

`

export const ImgProduct = styled.img `
    height: 100px;
    border-radius: 8px
`

export const DivAbout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
`

export const Title = styled.h1 `
    padding-top: 5px;
    line-height: 10px;
    font-size: 32px;
    font-weight: 800;
    color: #202020;

`

export const Subtitle = styled.h3 `
    line-height: 10px;
    font-size: 18px;
    font-weight: 600;
    color: #909090;

`


export const DivCounter = styled.div`
    width: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export const Button = styled.button `
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
        background-color: #f5f5f5
    }

`

export const Number = styled.h4`
    font-size: 20px;
    font-weight: 900;
    color: #202020;

`


export const DivPrices = styled.div `
    height: 100%;
    text-align: right;
    display: flex;
    flex-direction: column;
`

export const DivAmount = styled.div `
    padding-top: 20px;
    font-size: 26px;
    font-weight: 800;
    color: #202020;    
`

export const DivRemove = styled.div `
    padding-top: 5px;
    font-size: 14px;
    font-weight: 600;
    color: #E44C4C;
    cursor: pointer;
`

export const LineBreak = styled.hr `
    width: 66%;
    float: right;
    margin-right: 5%;
    color: #E44C4C;

`

export const DivCheckout = styled.div `
    margin-top: 1.5%;
    float: right;
    margin-right: 5%;
    width: 28%;

`
export const DivTotal = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const DivSubAndItems = styled.div`

`

export const Subtotal = styled.h3`
    font-size: 22px;
    font-weight: 700;
    color: #202020;
`

export const Items = styled.h4`
    font-size: 16px;
    font-weight: 500;
    color: #909090;
    line-height: 10px;
`

export const DivTotalAmount = styled.div`
    font-size: 36px;
    font-weight: 900;
    color: #202020;
`

export const ButtonCheckout = styled.button `
    margin-top: 5px;
    width: 100%;
    height: 40px;
    border: none;
    background: linear-gradient(to bottom right, #B8D7FF, #8EB7EB);
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    color: #202020;
`