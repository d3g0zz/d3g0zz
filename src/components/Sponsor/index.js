import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  SponsorSection,
  SponsorContent,
  SponsorContentH1,
  SponsorGrid,
  SponsorGridItems,
} from "../Sponsor/SponsorElements";

const Sponsor = () => {
  return (
    <>
      <SponsorSection>
        <SponsorContent>
          <SponsorContentH1>
            He tenido el privilegio
            <br />
            de trabajar con.
          </SponsorContentH1>
        </SponsorContent>
        <SponsorContent>
          <SponsorGrid>
            <SponsorGridItems>
              <StaticImage src="../../images/sponsor/images1.svg" alt="" />
            </SponsorGridItems>
            <SponsorGridItems>
              <StaticImage src="../../images/sponsor/images2.svg" alt="" />
            </SponsorGridItems>
            <SponsorGridItems>
              <StaticImage src="../../images/sponsor/images3.svg" alt="" />
            </SponsorGridItems>
          </SponsorGrid>
        </SponsorContent>
      </SponsorSection>
    </>
  );
};

export default Sponsor;
