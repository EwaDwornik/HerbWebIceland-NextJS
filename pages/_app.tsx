import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {useEffect} from "react";
import Navigation from "./navigation";
import {useRouter} from "next/router";

function MyApp({Component, pageProps}: AppProps) {

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    const router = useRouter();

    const showNavigation = router.pathname !== "/";

    return <>
        {showNavigation && <Navigation />}
        <Component {...pageProps} />
    </>
}

export default MyApp
