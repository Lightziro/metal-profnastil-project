import HeadLayout from "../../layouts/HeadLayout";
import Header from "../../components/header/Header";
import HeaderMainPage from "./HeaderMain/HeaderMainPage";
import ListCategories from "../../components/list-categories/ListCategories";
import ListClient from "../../components/list-client/ListClient";
import Footer from "../../components/footer/Footer";
import React from "react";
import {Category} from "../../types/item";
import {MAIN_KEY_WORDS} from "../../constants/seo";
interface MainPageContent {
    categories: Category[]
}
const MainPageContent: React.FC<MainPageContent> = ({categories}) => {
    return (
        <div>
            <HeadLayout title='Профнастил и доборные элементы - Кировский завод металлопрофиля' keyWords={MAIN_KEY_WORDS} description='Купить профнастил, металлочерепицы, доборные элементы в городе Киров, в Кировской области и по России по низким ценам с доставкой за один день'/>
            <Header/>
            <HeaderMainPage></HeaderMainPage>
            <ListCategories categories={categories}/>
            <ListClient></ListClient>
            <Footer></Footer>
        </div>
    )
}
export default MainPageContent
