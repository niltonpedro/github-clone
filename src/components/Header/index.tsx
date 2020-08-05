import React from 'react';

import { Container, GithubLogo, SearchForm } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <GithubLogo />
      <SearchForm>
        <input type="text" placeholder="Enter username or username/repo"/>
      </SearchForm>
    </Container>
  )
}

export default Header;