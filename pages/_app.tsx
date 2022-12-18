import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import Layout from "../components/layout"
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <Head>
            <title>Flashback</title>
        </Head>
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </QueryClientProvider>

    </>
)

export default App
