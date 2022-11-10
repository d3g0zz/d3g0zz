import * as React from "react";

import { GlobalStyle } from "../components/styles/GlobalStyles";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Sponsor from "../components/Sponsor";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Header />
      <Work />
      <Sponsor />
      <Contact />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>D3g0Zz - Designer UX/UI & Front-End</title>;
