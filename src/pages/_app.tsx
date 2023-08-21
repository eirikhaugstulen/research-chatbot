import '../styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from "next/dynamic";
import {Toaster} from "react-hot-toast";
import { Analytics } from '@vercel/analytics/react';

const App = ({ Component, pageProps }: AppProps) =>
    (
        <>
            <Component {...pageProps} />
            <Toaster gutter={20}/>
            <Analytics/>
        </>
    )

// Forcing client side render because of react-hot-toast hydration issue
export default dynamic(() => Promise.resolve(App), {
    ssr: false,
});
