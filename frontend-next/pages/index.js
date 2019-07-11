import "../styles/index.css";
import Layout from "../layouts/Layout";
import axios from "axios";
import { getUrl } from "../utils/utils";

const HomePage = ({ articlesAbout }) => (
  <Layout>
    <div className="container px-12 py-5 shadow rounded">
      <h1 className="text-primary leading-normal">Next.js</h1>
      <p className="text-danger">with Tailwind CSS</p>
      <p className="text-gray-400">with Tailwind CSS</p>
    </div>
    <div>
      {articlesAbout.map(article => (
        <div key={article.id}>
          <h2>{article["article-title"]}</h2>
          <div>{article["article-content"]}</div>
        </div>
      ))}
    </div>
    ,
  </Layout>
);

HomePage.getInitialProps = async ({ req }) => {
  const response = await axios.get(
    `${getUrl(req)}/articles?page-position-identifier=about`
  );
  return { articlesAbout: response.data };
};

export default HomePage;
