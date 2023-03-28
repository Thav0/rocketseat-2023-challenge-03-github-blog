import { SearchContainer } from './styles'

export function SearchBox() {
  return (
    <SearchContainer>
      <div>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </div>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchContainer>
  )
}
