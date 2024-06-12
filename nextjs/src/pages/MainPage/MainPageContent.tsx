import HeadLayout from "../../layouts/HeadLayout";
import Header from "../../components/header/Header";
import HeaderMainPage from "./HeaderMain/HeaderMainPage";
import ListCategories from "../../components/list-categories/ListCategories";
import ListClient from "../../components/list-client/ListClient";
import Footer from "../../components/footer/Footer";
import React from "react";
import {Category} from "../../types/item";
interface MainPageContent {
    categories: Category[]
}
const MainPageContent: React.FC<MainPageContent> = ({categories}) => {
    return (
        <div>
            <HeadLayout title='Кировский завод металлопрофиля - Главная' keyWords='киров профнастил, профнастил, профнастил цена, заборы из профнастила, металлочерепица, кровля, заборы киров, крыша' description='Продажа профнастила в г.Киров и по Кировской области по низким ценам'/>
            <Header/>
            <HeaderMainPage></HeaderMainPage>
            <ListCategories categories={categories}/>
            <ListClient></ListClient>
            <Footer></Footer>
        </div>
    )
}
export default MainPageContent
