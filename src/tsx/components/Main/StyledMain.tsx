import styled from "styled-components";

export const StyledMain = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  overflow: auto;
`;
export const StyledMainBody = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(77px, 1fr));
  grid-row-gap: 8px;
`;
export const StyledEntity = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  height: 60px;
  border: none;
  background: none;
  cursor: pointer;
  transition: .25s;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  &:active {
    background: rgba(0, 0, 0, 0.4);
  }
`;
export const StyledEntityIcon = styled.img`
  width: auto;
  height: 40px;
`;
export const StyledEntityLabel = styled.p`
  margin: 0;
`;