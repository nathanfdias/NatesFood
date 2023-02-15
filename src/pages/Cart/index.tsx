import { Navbar } from "../../components/Navbar/Navbar";
import { useContext } from 'react';
import {
  ActionTitle,
  Button,
  ButtonCheckout,
  Container,
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
  Title,
} from "./style";
import { CartContext } from "../../context/handleCart";

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
    <Container>
      <ContentDiv>
        <DivHeader>
          <HeaderTitle>Shopping Cart</HeaderTitle>
          <ActionTitle onClick={clearCart}>Remove All</ActionTitle>
        </DivHeader>

        {productsCart?.map((product) => {
          const subtotal: number = product.price * product.quantidade;
          totalPrice += subtotal;

          return(
            <DivCart>
              <ImageBox>
                <ImgProduct src={product.imageUrl} />
              </ImageBox>

              <DivAbout>
                <Title>{product.name}</Title>
                <Subtitle>Teste</Subtitle>
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
                <DivAmount>R$ {subtotal}</DivAmount>
                <DivRemove>
                  {" "}
                  <u  onClick={() => removalItem(product.id)}>Remove</u>
                </DivRemove>
              </DivPrices>
            </DivCart>
          )
        })}

        <LineBreak />

        <DivCheckout>
          <DivTotal>
            <DivSubAndItems>
              <Subtotal>Subtotal</Subtotal>
              <Items>Teste items</Items>
            </DivSubAndItems>
            <DivTotalAmount>$ {totalPrice}</DivTotalAmount>
          </DivTotal>

          <DivSubAndItems>
            <ButtonCheckout>Checkout</ButtonCheckout>
          </DivSubAndItems>
        </DivCheckout>
      </ContentDiv>
    </Container>
  );
}
