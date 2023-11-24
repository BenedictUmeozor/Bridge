import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/header/Header";
import CrossBorder from "./components/CrossBorder";
import Hero from "./components/Hero";
import WhatWeOffer from "./components/WhatWeOffer";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Bridge - Home</title>
      </Helmet>
      <section>
        <Header />
        <Hero />
        <CrossBorder />
        <WhatWeOffer />
        <Footer />
      </section>
    </>
  );
};
export default HomePage;
