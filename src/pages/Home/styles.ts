import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const HeaderContent = styled.div`
  padding: 2rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.profile};
  border-radius: 0.625rem;
  gap: 2rem;
  /* transform: translateY(-50%); */
`

export const HeaderContentHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: ${(props) => props.theme.title};
    font-size: 1.5rem;
  }
`

export const GithubLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme.blue};
  font-weight: 700;
  text-decoration: none;
`

export const GithubProfileImage = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 0.5rem;
`

export const GithubProfileDescription = styled.p`
  line-height: 160%;
  color: ${(props) => props.theme.text};
  margin-top: 0.5rem;
`

export const GithubProfileLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.625rem;
  margin-top: 1.5rem;
`

export const GithubProfileLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`
