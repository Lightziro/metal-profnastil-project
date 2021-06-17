import React from 'react'
import HeaderMainPage from "../../Components/HeaderMainPage/HeaderMainPage";
import ClientListMainPage from "../../Components/ClientListMainPage/ClientListMainPage";
import {Box} from "@material-ui/core";

export default function Main(props) {
    document.title = 'Главная страница - Кировский завод металлопрофиля';
    return (
        <Box>
            <HeaderMainPage></HeaderMainPage>
            <ClientListMainPage></ClientListMainPage>
        </Box>
    );
}
