import Link from "next/link";
import Layout from "../components/Layout";
import App from "./_app";

const Page = () => (
  <Layout title="Home">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

const IndexPage = () => <App Component={Page} pageProps={{}} />;

export default IndexPage;
