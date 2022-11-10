import styled from "styled-components";
import { Link } from "gatsby";

export const MenuSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 32px 64px;
  z-index: 10;

  @media screen and (max-width: 768px) {
    padding: 20px 16px;
  }
`;
export const MenuLink = styled(Link)`
  display: block;
  font-size: 20px;
  font-weight: 700;
  line-height: 100%;
  text-decoration: none;

  &:hover {
    color: #c4c4c4;
    transition: 0.3s ease-out;
  }
`;
