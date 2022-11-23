import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import {
  WorkSection,
  WorkContent,
  WorkContentH1,
  WorkGrid,
  WorkGridItems,
} from "../Work/WorkElements";

const email = {
  display: "block",
  transition: "opacity 200ms ease",
  lineHeight: "150%",
  fontSize: "18px",
  fontWeight: "700",
  border: "1px none #000",
  textDecoration: "none",
  paddingTop: "20px",
  textDecoration: "underline",
};

const Work = () => {
  return (
    <>
      <WorkSection>
        <WorkContent>
          <WorkContentH1>
            El trabajo que hago,
            <br />y los proyectos en los que he ayudado.
          </WorkContentH1>
        </WorkContent>
        <WorkContent>
          <WorkGrid>
            <WorkGridItems>
              <StaticImage src="../../images/work/images1.png" alt="" />
              <Link style={email} to="https://enterapia.co">
                Ver proyecto online
              </Link>
            </WorkGridItems>
            <WorkGridItems>
              <StaticImage src="../../images/work/images2.png" alt="" />
              <Link style={email} to="https://d3g0zz.com">
                Ver proyecto online
              </Link>
            </WorkGridItems>
          </WorkGrid>
        </WorkContent>
      </WorkSection>
    </>
  );
};

export default Work;
