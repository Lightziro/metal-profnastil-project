import React from "react";
import Head from "next/head";
interface HeadLayout {
    title: string,
}
const HeadLayout: React.FC<HeadLayout> = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta property="og:title" content="Кировский завод металлопрофиля - Контакты" key="title"/>
        </Head>
    )
}
export default HeadLayout
