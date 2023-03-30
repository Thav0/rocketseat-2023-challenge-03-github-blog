import { useContext } from 'react'
import { SearchContainer } from './styles'
import { GithubContext } from '../../../../contexts/GithubContext'

export function SearchBox() {
  const { githubIssues } = useContext(GithubContext)

  return (
    <SearchContainer>
      <div>
        <strong>Publicações</strong>
        <span>
          {githubIssues.length > 0
            ? `${githubIssues.length} publicações`
            : '0 resultados'}
        </span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}
