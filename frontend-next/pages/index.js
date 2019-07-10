import "../styles/index.css";
import Layout from "../layouts/Layout";

export default () => (
  <Layout>
    <div className="container px-12 py-5 shadow rounded">
      <h1 className="text-primary leading-normal">Next.js</h1>
      <p className="text-danger">with Tailwind CSS</p>
      <p className="text-gray-400">with Tailwind CSS</p>
    </div>
  </Layout>
);
