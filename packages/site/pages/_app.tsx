import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";

import { MainLayout } from "../components/layout";
import "../table.css";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Flashback</title>
    </Head>
    <QueryClientProvider client={queryClient}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </QueryClientProvider>
  </>
);

export default App;
