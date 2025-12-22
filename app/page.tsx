import React from "react";
import Header from "./Components/header";
import Hero from "./Components/hero";
import Showcase from "./Components/showcase";
import Showcase2 from "./Components/showcase2";
import Reviews from "./Components/reviews";
import Footer from "./Components/footer";

const Page: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Showcase />
      <Showcase2 />
      <Reviews />
      <Footer />
    </>
  );
};

export default Page;
