import React from 'react';
import { IoLogoGithub } from 'react-icons/io5';

import { Container, ContainerStrips, VerticalStrip } from './styles';

const SingleTree: React.FC = () => {
  return (
    <Container>
      <ContainerStrips>
        <VerticalStrip style={{ height: `15px` }} />
      </ContainerStrips>
    </Container>
  );
};

export default SingleTree;
