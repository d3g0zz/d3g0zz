import * as React from "react"

import { GlobalStyle } from "../components/styles/GlobalStyles";
import Menu from "../components/Menu";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Enterapia = () => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      <Contact />
      <Footer />
    </>
  );
  
}

export default Enterapia

export const Head = () => <title>Enterapia</title>
