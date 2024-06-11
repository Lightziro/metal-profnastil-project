import React from "react";
import {GetStaticProps, NextPage} from "next";
import { getCategories } from "../src/server/server-api";
import MainPageContent from "../src/pages/MainPage/MainPageContent";

interface MainPage {
    categories: any;
}
const MainPage: NextPage<MainPage> = ({categories}) => {
    return (
        <MainPageContent categories={categories}/>
    )
};
export default MainPage;
export const getStaticProps: GetStaticProps = async () => {
    const categories = await getCategories();
    return {
        props: {
            categories,
        },
        revalidate: 20,
    };
};
