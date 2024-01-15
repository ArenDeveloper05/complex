import { useEffect } from "react";

import Contact from "../components/contact/Contact";
import Layout from "../layout/Layout";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout>
      <Contact />
    </Layout>
  );
};

export default ContactPage;
