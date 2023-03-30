import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostWrapper = styled.div`
  padding: 2rem;
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme.post};

  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${(props) => props.theme.label};
  }
`

export const PostHeading = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    line-height: 2rem;
    height: 5rem;
    overflow: hidden;
    font-size: 0.875rem;
    color: ${(props) => props.theme.span};
    flex-shrink: 0;
  }
`

export const PostHeadingLink = styled(Link)`
  text-decoration: none;
  h2 {
    font-size: 1.25rem;
    color: ${(props) => props.theme.title};
  }
`

export const PostContent = styled.div`
  margin-top: 1.25rem;
  color: ${(props) => props.theme.text};
  line-height: 1.625rem;
`
