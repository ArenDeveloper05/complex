import { useEffect } from "react";

import Home from "../components/home/Home";
import Layout from "../layout/Layout";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
