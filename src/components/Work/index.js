import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  WorkSection,
  WorkContent,
  WorkContentH1,
  WorkGrid,
  WorkGridItems,
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
              <StaticImage src="../../images/work/images1.png" alt="" />
            </WorkGridItems>
            <WorkGridItems>
              <StaticImage src="../../images/work/images2.png" alt="" />
            </WorkGridItems>
          </WorkGrid>
        </WorkContent>
      </WorkSection>
    </>
  );
};

export default Work;
