import HeadLayout from "../../layouts/HeadLayout";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import React from "react";
import WorkTime from "./WorkTime/WorkTime";
import OfficeInfo from "./OfficeInfo/OfficeInfo";
import {MAIN_KEY_WORDS} from "../../constants/seo";

const ContactsPage = () => {
    return (
        <div>
            <HeadLayout title='Контакты - Кировский завод металлопрофиля' keyWords={MAIN_KEY_WORDS} description='Продажа профнастила в г.Киров и по Кировской области по низким ценам'/>
            <Header></Header>
            <WorkTime/>
            <OfficeInfo/>
            <Footer></Footer>
        </div>
    )
}
export default ContactsPage;
