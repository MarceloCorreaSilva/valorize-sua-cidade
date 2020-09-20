import React from "react";

// Layout
import Layout from "../Layouts/Default";

// Components
import FormSearch from "../../components/FormSearch";

function Home() {
  return (
    <Layout>
      <section className="uk-section uk-section-small">
        <div className="uk-container">
          <FormSearch />
        </div>
      </section>
    </Layout>
  );
}

export default Home;
