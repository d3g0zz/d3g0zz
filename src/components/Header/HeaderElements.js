import styled from "styled-components";

export const HeaderSection = styled.section`
  display: flex;
  min-height: 100vh;
  margin: 0 64px 0 64px;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 0 16px 0 16px;
  }
`;
export const HeaderContent = styled.div``;
export const HeaderDescription = styled.div`
  max-width: 560px;
  margin-top: 0px;
`;
export const HeaderH1 = styled.h1`
  display: block;
  max-width: 80%;
  margin-top: auto;
  margin-bottom: 32px;
  background-color: transparent;
  font-size: 72px;
  line-height: 100%;
  font-weight: 700;
  letter-spacing: 0px;
  object-fit: fill;

  @media screen and (max-width: 990px) {
    font-size: 48px;
    max-width: 100%;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;
export const HeaderP = styled.p`
  position: static;
  display: block;
  max-width: none;
  color: #c4c4c4;
  font-size: 18px;
  line-height: 150%;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
