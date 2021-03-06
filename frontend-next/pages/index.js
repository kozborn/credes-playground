import "../styles/index.css";
import axios from "axios";
import dynamic from "next/dynamic";
import Layout from "../layouts/Layout";
import Section from "../components/Section";
import _ from "underscore";
import { getServerBackendUrl, getClientBackendUrl } from "../lib/utils";
const Logos = dynamic(() => import("../components/Logos"), {
  ssr: false
});

const HomePage = ({ articlesAbout, logos, pageContent }) => {
  const headSection = !_.isEmpty(pageContent)
    ? _(pageContent.sections).find(section => {
        return section.identifier == "head-title";
      })
    : {};
  const programSection = !_.isEmpty(pageContent)
    ? _(pageContent.sections).find(section => section.identifier == "program")
    : {};

  return (
    <Layout>
      <Logos logos={logos} />

      <Section title={headSection.title} content={headSection.content} />
      <Section title={programSection.title} content={programSection.content} />
      <div>
        {articlesAbout.map(article => (
          <div key={article.id}>
            <Section
              title={article["article-title"]}
              content={article["article-content"]}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

HomePage.getInitialProps = async ({ req }) => {
  const baseUrl = req ? getServerBackendUrl() : getClientBackendUrl();

  const articles = await axios.get(
    `${baseUrl}/articles?page-position-identifier=about`
  );

  const logos = await axios.get(`${baseUrl}/logos`);

  const pageContent = await axios.get(`${baseUrl}/pages?page-name=homepage`);

  return {
    articlesAbout: articles.data,
    logos: logos.data,
    pageContent: pageContent.data[0] // expected to be only one
  };
};

export default HomePage;
