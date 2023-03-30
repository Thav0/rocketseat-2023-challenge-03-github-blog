import styled from 'styled-components'

export const IssueHeader = styled.div`
  padding: 2rem 2.5rem;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.profile};
  border-radius: 0.625rem;
  gap: 2rem;
  h1 {
    margin-top: 1.25rem;
    line-height: 1.875rem;
  }
  /* transform: translateY(-50%); */
`

export const IssueHeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;

  a {
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const GithubProfileLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.625rem;
  margin-top: 0.5rem;
`

export const GithubProfileLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  color: ${(props) => props.theme.span};
`

export const IssueContent = styled.div`
  padding: 2.5rem 2rem;
`
