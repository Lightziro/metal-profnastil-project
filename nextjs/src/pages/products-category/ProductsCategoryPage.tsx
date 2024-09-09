import HeadLayout from "../../layouts/HeadLayout";
import Header from "../../components/header/Header";
import ListClient from "../../components/list-client/ListClient";
import Footer from "../../components/footer/Footer";
import React from "react";
import {Product} from "../../types/item";
import ListProducts from "../../components/list-products/ListProducts";
interface ProductsCategoryPage {
    products: Product[]
}
const ProductsCategoryPage: React.FC<ProductsCategoryPage> = ({products}) => {
    return (
        <div>
            <HeadLayout title='Профнастил и доборные элементы - Кировский завод металлопрофиля' keyWords='киров профнастил, профнастил, доборные элементы, профнастил цена, заборы из профнастила, металлочерепица, кровля, заборы киров, крыша' description='Профнастил, металлочерепицы, доборные элементы в г.Киров и по России по низким ценам с доставкой за один день'/>
            <Header/>
            {/*<HeaderMainPage></HeaderMainPage>*/}
            <ListProducts products={products}/>
            <ListClient></ListClient>
            <Footer></Footer>
        </div>
    )
}
export default ProductsCategoryPage
