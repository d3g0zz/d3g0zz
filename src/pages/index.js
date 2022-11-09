import * as React from "react";

import { GlobalStyle } from "../components/styles/GlobalStyles";
import Menu from "../components/Menu";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Header />
      <Contact />
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>D3g0Zz - Designer UX/UI & Front-End</title>;
