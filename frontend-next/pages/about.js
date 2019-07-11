import "../styles/index.css";
import Layout from "../layouts/Layout";
import axios from "axios";
import { getUrl } from "../utils/utils";

function About({ articles }) {
  return (
    <Layout>
      <div className="container px-12 py-5 shadow rounded">
        <h1 className="text-primary leading-normal">About</h1>
        {articles.map(article => (
          <div key={article.id}>
            <h2>{article["article-title"]}</h2>
            <div>{article["article-content"]}</div>
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
