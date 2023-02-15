import { BeerBottle, Cookie, Hamburger, Pizza } from "phosphor-react";
import { useEffect, useState } from "react";
import bannerImg from "../../assets/bannerFood.png";
import { Navbar } from "../../components/Navbar/Navbar";
import { api } from "../../service/api";
import { currencyFormat } from "../../utils/helpers";
import {
  Body,
  CategoryContainer,
  CategoryItem,
  ImageBanner,
  MainProduct,
  ProductsContainer,
  ProductButtonCart,
  ProductDescription,
  ProductImages,
  ProductsContent
} from "./styles";

interface IProduct {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

export function Products() {
  const [products, setProducts] = useState<IProduct[]>();
  const [categoryName, setCategoryName] = useState("Hamburguer");

  useEffect(() => {
    api
    .get(`/products/search?categoryName=${categoryName}&isActive=true&page=0&size=10`)
      .then((res) => {
        setProducts(res.data.content);
        console.log(res.data.content);
      })
      .catch((erro) => {
        console.log("Erro Inesperado");
      });
  }, [categoryName]);

  return (
    <Body>
      <Navbar />
      <MainProduct>
        <ImageBanner src={bannerImg} />
        <CategoryContainer>
          <CategoryItem onClick={() => setCategoryName("Hamburguer")}>
            <Hamburger size={40} />
            <p>Hambuguer</p>
          </CategoryItem>
          <CategoryItem onClick={() => setCategoryName("Pizzas")}>
            <Pizza size={40} />
            <p>Pizza</p>
          </CategoryItem>
          <CategoryItem onClick={() => setCategoryName("Bebidas")}>
            <BeerBottle size={40} />
            <p>Bebidas</p>
          </CategoryItem>
          <CategoryItem onClick={() => setCategoryName("Doces")}>
            <Cookie size={40} />
            <p>Doces</p>
          </CategoryItem>
        </CategoryContainer>
        <ProductsContainer>
          {products?.map((product) => {
            return(
                <ProductsContent key={product.id}>
                    <ProductImages src={product.imageUrl}/>
                    <ProductDescription>
                        <p>{product.name}</p>
                        <p>{currencyFormat(product.price)}</p>
                        <ProductButtonCart>
                            <p>Adicionar</p>
                        </ProductButtonCart>
                    </ProductDescription>
                </ProductsContent>
            )
          })}
        </ProductsContainer>
      </MainProduct>
    </Body>
  );
}
