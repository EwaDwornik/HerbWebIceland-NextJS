import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {useEffect} from "react";
import Navigation from "./navigation";
import {useRouter} from "next/router";
import Head from 'next/head';

function MyApp({Component, pageProps}: AppProps) {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    const router = useRouter();

    const showNavigation = router.pathname !== "/";

    return <>
        <Head>
            <title>Icelandic flora</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap"
                  rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"/>

        </Head>
        {showNavigation && <Navigation/>}
        <Component {...pageProps} />
    </>
}

export default MyApp
