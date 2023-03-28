import { PostWrapper, PostHeading, PostContent } from './styles'

export function Post() {
  return (
    <PostWrapper>
      <PostHeading>
        <h2>JavaScript data types and data structures</h2>
        <span>Há 1 dia</span>
      </PostHeading>
      <PostContent>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have.
      </PostContent>
    </PostWrapper>
  )
}
