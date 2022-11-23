import styled from "styled-components";
import { Link } from "gatsby";

export const ContactSection = styled.section`
  display: block;
  margin: 0 64px 256px 64px;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 0 16px 128px 16px;
  }
`;
export const ContactContent = styled.div`
  width: 100%;
  max-width: 1140px;
  margin-right: auto;
  margin-left: auto;
  align-self: center;
  flex: 1;
`;
export const ContactContentH1 = styled.h1`
  display: block;
  max-width: 80%;
  margin-top: auto;
  margin-bottom: 64px;
  font-size: 38px;
  line-height: 110%;
  font-weight: 700;

  @media screen and (max-width: 990px) {
    max-width: 100%;
    font-size: 42px;
  }
  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;
export const ContactContentLink = styled(Link)`
  display: block;
  font-size: 38px;
  font-weight: 700;
  line-height: 100%;
  text-decoration: none;

  &:hover {
    color: #c4c4c4;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 990px) {
    max-width: 100%;
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 33px;
  }
`;
