import styled from 'styled-components'

export const PostWrapper = styled.div`
  padding: 2rem;
  border-radius: 0.625rem;
  background-color: ${(props) => props.theme.post};
`

export const PostHeading = styled.div`
  display: flex;
  justify-content: space-between;
  h2 {
    font-size: 1.25rem;
    color: ${(props) => props.theme.title};
  }
  span {
    line-height: 2rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme.span};
    flex-shrink: 0;
  }
`

export const PostContent = styled.div`
  margin-top: 1.25rem;
  color: ${(props) => props.theme.text};
  line-height: 1.625rem;
`
