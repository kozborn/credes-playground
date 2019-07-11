import "../styles/index.css";
import axios from "axios";
import Layout from "../layouts/Layout";
import Logos from "../components/Logos";
import Section from "../components/Section";
import _ from "underscore";
import { getUrl } from "../lib/utils";

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
  const articles = await axios.get(
    `${getUrl(req)}/articles?page-position-identifier=about`
  );

  const logos = await axios.get(`${getUrl(req)}/logos`);

  const pageContent = await axios.get(
    `${getUrl(req)}/pages?page-name=homepage`
  );

  return {
    articlesAbout: articles.data,
    logos: logos.data,
    pageContent: pageContent.data[0] // expected to be only one
  };
};

export default HomePage;
