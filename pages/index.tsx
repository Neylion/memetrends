import Link from "next/link";
import Layout from "../components/Layout";
import http from "../utils/http";
import App from "./_app";

const Page = () => (
  <Layout title="Home">
    <h1>Hello 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>

      <button
        style={{ display: "block", marginTop: "20px", padding: "20px" }}
        onClick={() =>
          http.addMeme({
            id: 10,
            year: 2020,
            title: "Mois' Plan",
            slug: "mois-plan",
            description:
              "Gru's Plan is an exploitable four-panel comic series featuring the Despicable Me protagonist Gru using a presentation board. Edits of the comic typically feature an unexpected third presentation page, followed by a panel of Gru looking back at the board in confusion.",
            readMoreLink: "https://knowyourmeme.com/memes/grus-plan",
            media: {
              images: [
                {
                  id: "121341234",
                  alt: "Meme template",
                  link: "https://i.kym-cdn.com/entries/icons/original/000/025/648/template.jpg",
                },
                {
                  id: "12341234",
                  alt: "Meme example",
                  link:
                    "https://img.wattpad.com/abbe11014441ad514f580ac31c72a539b560e294/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f55554c5463625567556c6b734c773d3d2d3538373933323137392e313533373365633233623936623139343831333933363439353135332e6a7067?s=fit&w=720&h=720",
                },
              ],
            },
          })
        }
      >
        Temporarily add test meme (gone on restart)
      </button>
    </p>
  </Layout>
);

const IndexPage = () => <App Component={Page} pageProps={{}} />;

export default IndexPage;
