import { Navbar } from "../../components/Navbar/Navbar";
import { useContext } from 'react';
import {
  ActionTitle,
  Button,
  ButtonCheckout,
  ContentDiv,
  DivAbout,
  DivAmount,
  DivCart,
  DivCheckout,
  DivCounter,
  DivHeader,
  DivPrices,
  DivRemove,
  DivSubAndItems,
  DivTotal,
  DivTotalAmount,
  HeaderTitle,
  ImageBox,
  ImgProduct,
  Items,
  LineBreak,
  Number,
  Subtitle,
  Subtotal,
  Body,
  Title,
  Container,
  DivContainerCart
} from "./style";
import { CartContext } from "../../context/handleCart";
import { currencyFormat } from "../../utils/helpers";

export function Cart() {
  let totalPrice: number = 0;
  const {
    productsCart,
    clearCart,
    handleAddItemToCart,
    handleRemoveItemToCart,
    removalItem,
  } = useContext(CartContext);

  return (
    <Body>
      <Navbar/>
      <Container>

      <ContentDiv>
        <DivHeader>
          <HeaderTitle>Shopping Cart</HeaderTitle>
          <ActionTitle onClick={clearCart}>Remove All</ActionTitle>
        </DivHeader>
        <DivContainerCart>
          {productsCart?.map((product) => {
            const subtotal: number = product.price * product.quantidade;
            totalPrice += subtotal;

            return(
              <DivCart>
                <ImageBox>
                  <ImgProduct src={product.imageUrl} />
                </ImageBox>

                <DivAbout>
                  <Title>{product.name.substring(0,22)}</Title>
                </DivAbout>

                <DivCounter>
                  <Button onClick={() => handleRemoveItemToCart(product.id)}>-</Button>
                  <Number>{product.quantidade}</Number>
                  <Button 
                  onClick={() => {
                    handleAddItemToCart(
                      product.id,
                      product.name,
                      product.imageUrl,
                      product.price
                    )
                  }}>+</Button>
                </DivCounter>

                <DivPrices>
                  <DivAmount>{currencyFormat(subtotal)}</DivAmount>
                  <DivRemove>
                    {" "}
                    <u  onClick={() => removalItem(product.id)}>Remove</u>
                  </DivRemove>
                </DivPrices>
              </DivCart>
            )
          })}

        </DivContainerCart>

          <LineBreak />
        <DivCheckout>
          <DivTotal>
            <DivSubAndItems>
              {/* <Subtotal>Subtotal</Subtotal> */}
              <Items>{productsCart.length} items</Items>
            </DivSubAndItems>
            <DivTotalAmount>{currencyFormat(totalPrice)}</DivTotalAmount>
          </DivTotal>

          <DivSubAndItems>
            <ButtonCheckout>Voltar</ButtonCheckout>
            <ButtonCheckout>Fazer Pedido</ButtonCheckout>
          </DivSubAndItems>
        </DivCheckout>
      </ContentDiv>
      </Container>
    </Body>
  );
}
