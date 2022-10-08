import styled from "styled-components";

export const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
`;

export const StyledNavigate = styled.button`
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  transition: .25s;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  &:active {
    background: rgba(0, 0, 0, 0.4);
  }
  img {
    width: 90%;
    height: auto;
  }
`;

export const StyledReload = styled(StyledNavigate)``;
