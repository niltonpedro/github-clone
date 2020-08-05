import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #24292e;

  padding: 11px 16px;
`;
export const GithubLogo = styled(FaGithub)`
  fill: #fff;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

export const SearchForm = styled.form`
  padding-left: 16px;
  width: 100%;

  input {
    background: #3F4448;
    outline: 0;
    border: 0;
    border-radius: 6px;
    padding: 7px 12px;
    width: 100%;

    &:focus {
      width: 318px
    }

    transition: width .2s ease-out
  }
`;