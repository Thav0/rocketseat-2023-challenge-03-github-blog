/* eslint-disable camelcase */
import { IGithubRepositoryIssue } from '../../../../../contexts/GithubContext'
import { formatDateDifference } from '../../../../../util/dateFormatter'
import { slug } from '../../../../../util/slug'
import {
  PostWrapper,
  PostHeading,
  PostContent,
  PostHeadingLink,
} from './styles'

export function Post({ githubIssue }: { githubIssue: IGithubRepositoryIssue }) {
  const MAX_TEXT_LENGTH = 200
  const { id, body, created_at, title } = githubIssue

  function truncateText(text: string): string {
    if (text.length <= MAX_TEXT_LENGTH) {
      return text
    }

    const truncatedText = text.slice(0, MAX_TEXT_LENGTH - 3)
    return `${truncatedText}...`
  }

  return (
    <PostWrapper>
      <PostHeading>
        <PostHeadingLink to={`/issue/${slug(title)}/${id}`}>
          <h2>{title}</h2>
        </PostHeadingLink>
        <span>{formatDateDifference(created_at)}</span>
      </PostHeading>
      <PostContent>{truncateText(body)}</PostContent>
    </PostWrapper>
  )
}
