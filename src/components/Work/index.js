import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  WorkSection,
  WorkContent,
  WorkContentH1,
  WorkGrid,
  WorkGridItems,
  WorkGridItemsImg,
} from "../Work/WorkElements";

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
              <StaticImage src="../../images/images1.png" alt="A kitten" />
              {/* <WorkGridItemsImg></WorkGridItemsImg> */}
            </WorkGridItems>
            <WorkGridItems>
              <StaticImage src="../../images/images2.png" alt="A kitten" />
              {/* <WorkGridItemsImg></WorkGridItemsImg> */}
            </WorkGridItems>
          </WorkGrid>
        </WorkContent>
      </WorkSection>
    </>
  );
};

export default Work;
