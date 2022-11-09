import React from "react";

import {
  HeaderSection,
  HeaderContent,
  HeaderDescription,
  HeaderH1,
  HeaderP,
} from "./HeaderElements";

const Header = () => {
  return (
    <HeaderSection>
      <HeaderContent>
        <HeaderH1>
          Diseño de experiencias digitales innovadoras, sostenibles y flexibles.
        </HeaderH1>
        <HeaderDescription>
          <HeaderP>
            Soy un Diseñador de Producto (UX/UI) & Front-End centrado en las
            necesidades humanas, las posibilidades técnicas y el éxito
            empresarial.
          </HeaderP>
        </HeaderDescription>
      </HeaderContent>
    </HeaderSection>
  );
};

export default Header;
