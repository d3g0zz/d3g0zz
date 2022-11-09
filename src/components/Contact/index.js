import React from "react";
import { Link } from "gatsby";

import {
  ContactSection,
  ContactContent,
  ContactContentH1,
} from "./ContactElements";

const email = {
  display: "block",
  transition: "opacity 200ms ease",
  lineHeight: "100%",
  fontSize: "64px",
  fontWeight: "700",
  border: "1px none #000",
  textDecoration: "none",
};

const Contact = () => {
  return (
    <ContactSection>
      <ContactContent>
        <ContactContentH1>
          ¿Quieres trabajar conmigo o simplemente tomar un café? — ¡Envíame un
          mensaje!
          <Link
            style={email}
            to="mailto:h1d3g0zz@gmail.com?subject=¡Vamos a trabajar juntos!"
          >
            h1d3g0zz@gmail.com
          </Link>
        </ContactContentH1>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact;
