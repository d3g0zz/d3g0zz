import styled from "styled-components";

export const FooterSection = styled.section`
  margin: 0 64px 0 64px;

  @media screen and (max-width: 768px) {
    margin: 0 16px 0 16px;
  }
`;
export const FooterContent = styled.div`
  display: block;
  width: 100%;
  padding-top: 64px;
  margin: auto auto 64px;

  @media screen and (max-width: 768px) {
    margin-bottom: 32px;
    padding-top: 32px;
  }
`;
export const FooterGrid = styled.div`
  display: grid;
  width: 100%;
  grid-auto-columns: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;

  @media screen and (max-width: 768px) {
    grid-row-gap: 16px;
    grid-template-columns: 1fr;
  }
`;
export const FooterGridItems = styled.div``;
export const FooterGridItemsH1 = styled.h1`
  display: block;
  max-width: 100%;
  font-size: 18px;
  line-height: 150%;
  font-weight: 400;
`;
export const FooterGridItemsP = styled.p`
  display: block;
  max-width: 100%;
  font-size: 14px;
  line-height: 150%;
  font-weight: 400;
`;
export const FooterRights = styled.div`
  display: block;
  margin: 0 auto auto;
  padding-bottom: 32px;
  flex: 1;
  text-align: left;

  @media screen and (max-width: 768px) {
  }
`;
export const FooterRightsP = styled.p`
  display: block;
  font-size: 14px;
`;
