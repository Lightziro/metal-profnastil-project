import HeadLayout from "../../layouts/HeadLayout";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import React from "react";
import WorkTime from "./WorkTime/WorkTime";
import OfficeInfo from "./OfficeInfo/OfficeInfo";

const ContactsPage = () => {
    return (
        <div>
            <HeadLayout title='Кировский завод металлопрофиля - Контакты'/>
            <Header></Header>
            <WorkTime/>
            <OfficeInfo/>
            <Footer></Footer>
        </div>
    )
}
export default ContactsPage;
