import HeadLayout from "../../layouts/HeadLayout";
import Header from "../../components/header/Header";
import ListClient from "../../components/list-client/ListClient";
import Footer from "../../components/footer/Footer";
import React from "react";
import {Product} from "../../types/item";
import ListProducts from "../../components/list-products/ListProducts";
import {MAIN_KEY_WORDS} from "../../constants/seo";
interface ProductsCategoryPage {
    products: Product[]
}
const ProductsCategoryPage: React.FC<ProductsCategoryPage> = ({products}) => {
    return (
        <div>
            <HeadLayout title='Профнастил - Кировский завод металлопрофиля' keyWords={MAIN_KEY_WORDS} description='Купить профнастил в городе Киров, в Кировской области и по России по низким ценам с доставкой за один день'/>
            <Header/>
            <ListProducts products={products}/>
            <ListClient></ListClient>
            <Footer></Footer>
        </div>
    )
}
export default ProductsCategoryPage
