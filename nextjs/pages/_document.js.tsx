import * as React from "react";
import Document, {Html, Head, Main, NextScript} from "next/document";
import YandexMetric from "../src/components/yandex-metric/YandexMetric";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                {process.env.YANDEX_METRIC && <>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(${process.env.YANDEX_METRIC}, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });
              `,
                        }}
                    />
                    <noscript>
                        <div>
                            <img src="https://mc.yandex.ru/watch/12345678"
                                 style={{position: 'absolute', left: '-9999px'}}
                                 alt=""/>
                        </div>
                    </noscript>
                    <YandexMetric/>
                </>}
                </body>
            </Html>
        );
    }
}
