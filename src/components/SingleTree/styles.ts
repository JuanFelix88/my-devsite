import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerStrips = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VerticalStrip = styled.div`
  width: 1px;
  height: auto;
  background-color: ${(p) => p.theme.colors.softGrey};
`;
