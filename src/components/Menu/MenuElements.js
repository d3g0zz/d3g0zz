import styled from "styled-components";

export const MenuSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  display: flex;
  align-items: center;
  padding: 32px 64px;

  @media screen and (max-width: 768px) {
    padding: 20px 16px;
  }
`;
