import '../css/tailwind.css';
import Head from 'next/head';
import { Layout } from '../components/layout/Layout';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
)

export default App;