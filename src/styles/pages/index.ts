import styled from 'styled-components';

const MAX_PAGE_WIDTH = `800px`;
const MOBILE_BREAKPOINT = `520px`;

export const Container = styled.main``;

export const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const CallToPressButtonText = styled.span`
  font-size: 14pt;
  font-weight: 500;
`;

export const ButtonContact = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
  font-weight: 600;
  margin: 5px;
  color: ${(p) => p.theme.colors.black};
  font-size: medium;
  border-radius: 4px;
  border: 2px solid ${(p) => p.theme.colors.black};
  background-color: ${(p) => p.theme.colors.softBlue};
  transition: 190ms ease;
  cursor: pointer;
  text-decoration: none;

  :hover {
    transition: 120ms ease;
    background-color: ${(p) => p.theme.colors.blue};
    box-shadow: 0 0 2px 3px ${(p) => p.theme.colors.softCyan};
  }
`;

export const PublicSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px px;

  & > h1 {
    font-size: 36pt;
    font-weight: 800;
    font-style: normal;
    font-weight: 800;
    margin: 0;
    text-align: center;
  }

  & > h2 {
    transform: translateY(-30%);
    font-size: 12pt;
    font-weight: 500;
    font-style: normal;
    color: ${(p) => p.theme.colors.grey};
    margin: 0;
    text-align: center;
  }
`;

export const PublicSectionSpacer = styled.div`
  height: 35px;
  width: 0;
`;

export const TitleSection = styled.h3`
  font-size: 22pt;
  font-weight: 700;
  color: ${(p) => p.theme.colors.black};
`;

export const WhoAmISection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  max-width: 550px;
  p {
    font-size: 14pt;
    text-align: center;
    color: ${(p) => p.theme.colors.black};
    margin: 0;
  }
`;

export const TechnologiesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const SubTitle = styled.span`
  font-size: 8pt;
  font-weight: 500;
  font-style: normal;
  color: ${(p) => p.theme.colors.grey};
  margin-bottom: 10px;
  text-align: center;
`;

export const TechnologiesItems = styled.ul`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TechnologyItem = styled.li`
  display: flex;
  padding: 5px;

  & > span {
    font-size: 16pt;
    font-weight: 400;
  }
`;

export const InterestsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const InterestsItems = styled.ul`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InterestItem = styled.li`
  display: flex;
  padding: 5px;

  & > span {
    font-size: 16pt;
    font-weight: 400;
  }
`;

export const Footer = styled.footer`
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: center;
`;

export const FooterSeparator = styled.div`
  width: 95%;
  max-width: ${MAX_PAGE_WIDTH};
  height: 1px;
  background-color: ${(p) => p.theme.colors.softGrey};
`;

export const ContentFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  width: 100%;
  max-width: ${MAX_PAGE_WIDTH};

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const PersonalContainer = styled.div`
  display: flex;
  padding: 5px;
  width: 280px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 5px;
  height: 100%;

  & > img {
    width: 60px;
    height: 60px;
  }
`;

export const FooterInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    align-items: center;
  }

  & > span {
    font-size: 12pt;
    font-weight: 300;
  }

  & > h1 {
    font-size: 18pt;
    font-weight: 500;
    font-style: normal;
    color: ${(p) => p.theme.colors.black};
    margin: 5px 0;
  }

  & > h2 {
    transform: translateY(-30%);
    font-size: 12pt;
    font-weight: 500;
    font-style: normal;
    color: ${(p) => p.theme.colors.grey};
    margin: 0;
  }
`;

export const FooterContactContainer = styled.div`
  display: flex;
  padding: 5px;
  flex-direction: column;
  width: 180px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SocialsContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
`;

export const EmailContact = styled.a`
  font-size: 12pt;
  color: ${(p) => p.theme.colors.grey};
  text-decoration: none;
  cursor: pointer;
  text-align: center;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }
`;

export const SocialNetworksLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 20px;
  width: 100%;
  max-width: 200px;
`;

export const SocialNetwork = styled.a`
  display: flex;
  padding: 5px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  background: ${(p) => p.theme.colors.softGrey};

  & > svg {
    width: 24px;
    height: 24px;
    color: ${(p) => p.theme.colors.black};
  }

  &:hover {
    opacity: 0.7;
  }
`;
