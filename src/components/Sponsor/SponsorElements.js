import styled from "styled-components";

export const SponsorSection = styled.section`
  display: block;
  margin: 0 64px 256px 64px;

  @media screen and (max-width: 768px) {
    margin: 0 16px 128px 16px;
  }
`;
export const SponsorContent = styled.div`
  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  align-self: center;
  flex: 1;
`;
export const SponsorContentH1 = styled.h1`
  display: block;
  max-width: 80%;
  margin-top: auto;
  margin-bottom: 64px;
  font-size: 54px;
  line-height: 120%;
  font-weight: 700;

  @media screen and (max-width: 990px) {
    font-size: 42px;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;
export const SponsorGrid = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-row-gap: 0;
  grid-column-gap: 16px;
`;
export const SponsorGridItems = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 64px;
  justify-content: center;
  align-items: center;
`;
