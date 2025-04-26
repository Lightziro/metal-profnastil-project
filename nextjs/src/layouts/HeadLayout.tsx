import React from "react";
import Head from "next/head";
interface HeadLayout {
    title: string,
    description: string,
    keyWords: string,
}
const HeadLayout: React.FC<HeadLayout> = ({title, description, keyWords}) => {
    return (
        <Head>
            <title>{title}</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"/>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keyWords}/>
            <meta name="robots" content="index"/>
            <meta property="og:title" content={title} key="title"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={process.env.NEXT_PUBLIC_SITE_URL}/>
            <meta name="yandex-verification" content="d50a76c747e5c4c5"/>
        </Head>
    )
}
export default HeadLayout
