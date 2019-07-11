import axios from "axios";
import Layout from "../layouts/Layout";
import Markdown from "../components/Markdown";
import { getUrl } from "../lib/utils";
import "../styles/index.css";

function About({ articles }) {
  return (
    <Layout>
      <div className="container px-12 py-5 shadow rounded">
        <h1 className="text-primary leading-normal">About</h1>
        {articles.map(article => (
          <div key={article.id}>
            <h2>{article["article-title"]}</h2>
            <Markdown content={article["article-content"]} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

About.getInitialProps = async ({ req }) => {
  const response = await axios.get(
    `${getUrl(req)}/articles?page-position-identifier=about`
  );
  return { articles: response.data };
};

export default About;
