import React from "react";
// import { Link } from "gatsby";

import {
  ContactSection,
  ContactContent,
  ContactContentH1,
  ContactContentLink,
} from "./ContactElements";

const Contact = () => {
  return (
    <ContactSection>
      <ContactContent>
        <ContactContentH1>
          ¿Quieres trabajar conmigo o simplemente tomar un café? — ¡Envíame un
          mensaje!
          <ContactContentLink to="mailto:h1d3g0zz@gmail.com?subject=¡Vamos a trabajar juntos!">
            h1d3g0zz@gmail.com
          </ContactContentLink>
        </ContactContentH1>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact;
