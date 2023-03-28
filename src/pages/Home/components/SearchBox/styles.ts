import styled from 'styled-components'

export const SearchContainer = styled.div`
  margin-top: 4.5rem;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 1.125rem;
      color: ${(props) => props.theme.subtitle};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.span};
    }
  }

  input {
    color: ${(props) => props.theme.label};
    font-size: 1rem;
    margin-top: 0.75rem;
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 0.375rem;
    background-color: ${(props) => props.theme.input};
    ::placeholder {
      color: ${(props) => props.theme.label};
    }
  }
`
