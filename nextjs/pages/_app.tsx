import React from "react";
import "../src/styles/main.scss";
const MyApp = ({ Component, pageProps }) => {
    return (
        <Component {...pageProps} />
    );
};
export default MyApp;
