import styled from "styled-components";

export const FooterSection = styled.section`
  margin: 0 64px 0 64px;
`;
export const FooterContent = styled.div`
  display: block;
  width: 100%;
  padding-top: 64px;
  margin: auto auto 64px;
`;
export const FooterGrid = styled.div`
  display: grid;
  width: 100%;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;
