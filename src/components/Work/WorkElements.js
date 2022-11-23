import styled from "styled-components";

export const WorkSection = styled.section`
  display: block;
  margin: 0 64px 256px 64px;

  @media screen and (max-width: 768px) {
    margin: 0 16px 128px 16px;
  }
`;
export const WorkContent = styled.div`
  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  align-self: center;
  flex: 1;
`;
export const WorkContentH1 = styled.h1`
  display: block;
  max-width: 80%;
  margin-top: auto;
  margin-bottom: 64px;
  font-size: 38px;
  line-height: 120%;
  font-weight: 700;

  @media screen and (max-width: 990px) {
    font-size: 42px;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;
export const WorkGrid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;
  grid-column-gap: 64px;

  @media screen and (max-width: 990px) {
    grid-column-gap: 16px;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const WorkGridItems = styled.div`
  margin-bottom: 128px;
`;
export const WorkGridItemsImg = styled.img`
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
`;
