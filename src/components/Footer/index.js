import React from "react";
import { Link } from "gatsby";

import {
  FooterSection,
  FooterContent,
  FooterGrid,
  FooterGridItems,
  FooterGridItemsH1,
  FooterGridItemsP,
  FooterRights,
  FooterRightsP,
} from "./FooterElements";

const email = {
  display: "block",
  transition: "opacity 200ms ease",
  lineHeight: "100%",
  fontSize: "14px",
  fontWeight: "700",
  border: "1px none #000",
  textDecoration: "none",
};

const Footer = () => {
  return (
    <FooterSection>
      <FooterContent>
        <FooterGrid>
          <FooterGridItems>
            <FooterGridItemsH1>Social Media —</FooterGridItemsH1>
            <Link style={email} to="https://github.com/d3g0zz">
              Github
            </Link>
          </FooterGridItems>
          <FooterGridItems>
            <FooterGridItemsH1>Ubicado En —</FooterGridItemsH1>
            <FooterGridItemsP>Colombia</FooterGridItemsP>
          </FooterGridItems>
          <FooterGridItems>
            <FooterGridItemsH1>Contacto —</FooterGridItemsH1>
            <FooterGridItemsP>
              <Link
                style={email}
                to="mailto:h1d3g0zz@gmail.com?subject=¡Vamos a trabajar juntos!"
              >
                h1d3g0zz@gmail.com
              </Link>
            </FooterGridItemsP>
          </FooterGridItems>
        </FooterGrid>
      </FooterContent>
      <FooterRights>
        <FooterRightsP>© D3g0Zz 2022. All rights reserved.</FooterRightsP>
      </FooterRights>
    </FooterSection>
  );
};

export default Footer;
