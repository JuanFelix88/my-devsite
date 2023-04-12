import styled from 'styled-components';

const CONTAINER_STRIP_WIDTH = `380px`;
const MOBILE_BREAKPOINT = `450px`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 230ms ease;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    transform: scale(0.8);
  }
`;

export const ContainerStrips = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerSeparetedStrips = styled.div`
  display: flex;
  width: ${CONTAINER_STRIP_WIDTH};

  & > div + div {
    margin-left: auto;
  }
`;

export const VerticalStrip = styled.div`
  width: 1px;
  height: auto;
  background-color: ${(p) => p.theme.colors.softGrey};
`;

export const HorizontalStrip = styled.div`
  width: ${CONTAINER_STRIP_WIDTH};
  height: 1px;
  background-color: ${(p) => p.theme.colors.softGrey};
`;

export const ContainerBoxes = styled.div`
  display: flex;
  flex-direction: row;

  width: calc(${CONTAINER_STRIP_WIDTH} + 100px);
  & > div + div {
    margin-left: auto;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  background-color: ${(p) => p.theme.colors.softWhite};
  border: 1px solid ${(p) => p.theme.colors.softGrey};
  border-radius: 4px;
  height: min-content;
`;

export const Items = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 5px;
  margin: 0;
`;

export const Item = styled.li`
  padding: 5px 0;
  list-style: none;
  margin: 0 10px;
  > a {
    display: flex;
    align-items: center;
    font-size: 12pt;
    font-weight: 500;
    color: ${(p) => p.theme.colors.black};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      opacity: 0.8;
    }

    & > svg {
      margin-right: 5px;
    }
  }
`;
