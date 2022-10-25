import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {useEffect} from "react";
import Navigation from "./navigation";

function MyApp({Component, pageProps}: AppProps) {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    return <>
        <Navigation />
        <Component {...pageProps} />
    </>
}

export default MyApp
