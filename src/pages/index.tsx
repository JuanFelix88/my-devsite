import React from 'react';

import {
  AvatarContainer,
  ButtonContact,
  CallToPressButtonText,
  FooterContactContainer,
  Container,
  ContentFooterContainer,
  DescriptionContainer,
  Footer,
  FooterSeparator,
  Header,
  InterestItem,
  InterestsItems,
  InterestsSection,
  PersonalContainer,
  FooterInfoContainer,
  PublicSection,
  PublicSectionSpacer,
  SubTitle,
  TechnologiesItems,
  TechnologiesSection,
  TechnologyItem,
  TitleSection,
  WhoAmISection,
  SocialsContainer,
  EmailContact,
  SocialNetworksLinks,
  SocialNetwork,
} from '@/styles/pages';
import Head from 'next/head';
import Tree from '@/components/Tree';
import SingleTree from '@/components/SingleTree';
import AvatarImage from '@/../assets/i.png';
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoMedium,
} from 'react-icons/io5';

const contactLink = `http://web.whatsapp.com/send?phone=5541996936329`;

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Juan Andrade - Conheça minha página pessoal</title>
      </Head>
      <Header>
        <CallToPressButtonText>Fale Comigo!</CallToPressButtonText>
        <ButtonContact
          title="Fale comigo através de um contato simples e rápido"
          href={contactLink}
        >
          Contato de Juan
        </ButtonContact>
      </Header>
      <PublicSection>
        <AvatarContainer>
          <img
            src={AvatarImage.src}
            alt="Imagem de Juan Felix em forma de um avatar, toda a imagem está cinza e mostra principalmente o seu rosto."
          />
        </AvatarContainer>
        <h1>Juan Andrade</h1>
        <h2>Software Engineering</h2>
        <PublicSectionSpacer />
        <TitleSection>#PÚBLICO</TitleSection>
        <Tree />
      </PublicSection>

      <WhoAmISection>
        <TitleSection>#QUEM-SOU</TitleSection>
        <SingleTree />
        <DescriptionContainer>
          <p>
            Curitibano de 23 anos, cafézeiro, louco por código e fascinado nas
            tecnologias Web.
          </p>
          <p>
            Gosto muito de automatizar tarefas, desconstruir e buscar
            conhecimento para me aprofundar em coisas que me interessam.
          </p>
          <p>~Escovar bits quando possível? por que não?</p>
        </DescriptionContainer>
      </WhoAmISection>
      <TechnologiesSection>
        <TitleSection>#TECNOLOGIAS</TitleSection>
        <SubTitle>
          Você nunca verá porcentagens aqui porque estou sempre estudando
        </SubTitle>
        <SingleTree />
        <TechnologiesItems>
          <TechnologyItem>
            <span>TypeScript/JavaScript</span>
          </TechnologyItem>
          <TechnologyItem>
            <span>Style Components</span>
          </TechnologyItem>
          <TechnologyItem>
            <span>Node.js</span>
          </TechnologyItem>
          <TechnologyItem>
            <span>React.js</span>
          </TechnologyItem>
          <TechnologyItem>
            <span>Next.js</span>
          </TechnologyItem>
          <TechnologyItem>
            <span>Electron.js</span>
          </TechnologyItem>
          <TechnologyItem>
            <span>Docker</span>
          </TechnologyItem>
          <TechnologyItem>
            <span>PM2</span>
          </TechnologyItem>
          <TechnologyItem>
            <span>Windows WSL</span>
          </TechnologyItem>
          <TechnologyItem>
            <span>PostgreSQL</span>
          </TechnologyItem>
          <TechnologyItem>
            <span>Sass</span>
          </TechnologyItem>
          <TechnologyItem>
            <span>MongoDB</span>
          </TechnologyItem>
          <TechnologyItem>
            <span>Vue.js</span>
          </TechnologyItem>
        </TechnologiesItems>
      </TechnologiesSection>
      <InterestsSection>
        <TitleSection>#INTERESSES</TitleSection>
        <SubTitle>
          Coisas que venho estudando mas ainda não tenho larga experiência
        </SubTitle>
        <SingleTree />
        <InterestsItems>
          <InterestItem>
            <span>Native Addons - Node.js</span>
          </InterestItem>
          <InterestItem>
            <span>Rust</span>
          </InterestItem>
          <InterestItem>
            <span>Web 3.0</span>
          </InterestItem>
          <InterestItem>
            <span>Remix.js</span>
          </InterestItem>
          {/* <InterestItem>
            <span>C#</span>
          </InterestItem> */}
          <InterestItem>
            <span>Micro Frontends</span>
          </InterestItem>
          <InterestItem>
            <span>Kafka</span>
          </InterestItem>
          <InterestItem>
            <span>AWS</span>
          </InterestItem>
          <InterestItem>
            <span>Clean Architecture</span>
          </InterestItem>
          <InterestItem>
            <span>TDD</span>
          </InterestItem>
          <InterestItem>
            <span>PWA</span>
          </InterestItem>
          <InterestItem>
            <span>Serverless</span>
          </InterestItem>
          <InterestItem>
            <span>OKRs</span>
          </InterestItem>
        </InterestsItems>
      </InterestsSection>
      <Footer>
        <FooterSeparator />
        <ContentFooterContainer>
          <PersonalContainer>
            <AvatarContainer>
              <img
                src={AvatarImage.src}
                alt="Imagem de Juan Felix em forma de um avatar, toda a imagem está cinza e mostra principalmente o seu rosto."
              />
            </AvatarContainer>
            <FooterInfoContainer>
              <h1>Juan Andrade</h1>
              <h2>Software Engineering</h2>
            </FooterInfoContainer>
          </PersonalContainer>
          <FooterContactContainer>
            <CallToPressButtonText>Fale Comigo!</CallToPressButtonText>
            <ButtonContact
              title="Fale comigo através de um contato simples e rápido"
              href={contactLink}
            >
              Contato de Juan
            </ButtonContact>
          </FooterContactContainer>
        </ContentFooterContainer>
        <SocialsContainer>
          <EmailContact
            href="mailto:andrade.juan@outlook.com.br"
            title="Envie-me um email!"
          >
            andrade.juan@outlook.com.br
          </EmailContact>
          <SocialNetworksLinks>
            <SocialNetwork
              href="https://github.com/juanfelix88"
              title="Veja o GitHub!"
            >
              <IoLogoGithub />
            </SocialNetwork>

            <SocialNetwork
              href="https://instagram.com/mattefelixoff"
              title="Me encontre no Instagram!"
            >
              <IoLogoInstagram />
            </SocialNetwork>
            <SocialNetwork
              href="https://medium.com/@juanfelix88"
              title="Leia alguns artigos meus."
            >
              <IoLogoMedium />
            </SocialNetwork>
            <SocialNetwork
              href="https://www.linkedin.com/in/juan-felix-425008163"
              title="Veja o meu LinkedIn!"
            >
              <IoLogoLinkedin />
            </SocialNetwork>
          </SocialNetworksLinks>
        </SocialsContainer>
      </Footer>
    </Container>
  );
};

export default Home;
