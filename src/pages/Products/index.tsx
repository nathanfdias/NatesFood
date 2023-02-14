import { Navbar } from '../../components/Navbar/Navbar';
import { MainProduct, ImageBanner, CategoryContainer, CategoryItem, Body, ProductsContainer, ProductsContent, ProductDescription, ProductImages, ProductButtonCart} from './styles';
import bannerImg from '../../assets/bannerFood.png';
import teste from '../../assets/teste.webp';
import { Hamburger, Pizza, BeerBottle, Cookie, Plus } from 'phosphor-react';

export function Products() {
    return(
        <Body>
        <Navbar />
        <MainProduct>
            <ImageBanner src={bannerImg}/>
            <CategoryContainer>
                <CategoryItem>
                    <Hamburger size={40}/>
                    <p>Hambuguer</p>
                </CategoryItem>
                <CategoryItem>
                    <Pizza size={40}/>
                    <p>Pizza</p>
                </CategoryItem>
                <CategoryItem>
                    <BeerBottle size={40}/>
                    <p>Bebidas</p>
                </CategoryItem>
                <CategoryItem>
                    <Cookie size={40}/>
                    <p>Doces</p>
                </CategoryItem>
            </CategoryContainer>
            <ProductsContainer>
                <ProductsContent>
                    <ProductImages src={teste}/>
                    <ProductDescription>
                        <p>Xtudo</p>
                        <p>17.99</p>
                        <ProductButtonCart>
                            {/* <Plus size={24}/> */}
                            <p>Adicionar</p>
                        </ProductButtonCart>
                    </ProductDescription>
                </ProductsContent>
                <ProductsContent>
                    <ProductImages src={teste}/>
                    <ProductDescription>
                        <p>Xtudo</p>
                        <p>17.99</p>
                        <ProductButtonCart>
                            {/* <Plus size={24}/> */}
                            <p>Adicionar</p>
                        </ProductButtonCart>
                    </ProductDescription>
                </ProductsContent>
                <ProductsContent>
                    <ProductImages src={teste}/>
                    <ProductDescription>
                        <p>Xtudo</p>
                        <p>17.99</p>
                        <ProductButtonCart>
                            {/* <Plus size={24}/> */}
                            <p>Adicionar</p>
                        </ProductButtonCart>
                    </ProductDescription>
                </ProductsContent>
                <ProductsContent>
                    <ProductImages src={teste}/>
                    <ProductDescription>
                        <p>Xtudo</p>
                        <p>17.99</p>
                        <ProductButtonCart>
                            {/* <Plus size={24}/> */}
                            <p>Adicionar</p>
                        </ProductButtonCart>
                    </ProductDescription>
                </ProductsContent>
                
            </ProductsContainer>
        </MainProduct>
        </Body>
    )
}