import "../styles/global.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";

import Layout from "../components/layout/layout";

const queryClient = new QueryClient();

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
);

export default App;
