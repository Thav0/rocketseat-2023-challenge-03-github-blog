/* eslint-disable camelcase */
import { IGithubRepositoryIssue } from '../../../../../contexts/GithubContext'
import { formatDateDifference } from '../../../../../util/dateFormatter'
import { PostWrapper, PostHeading, PostContent } from './styles'

export function Post({ githubIssue }: { githubIssue: IGithubRepositoryIssue }) {
  const MAX_TEXT_LENGTH = 200
  const { body, created_at, title } = githubIssue

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
        <h2>{title}</h2>
        <span>{formatDateDifference(created_at)}</span>
      </PostHeading>
      <PostContent>{truncateText(body)}</PostContent>
    </PostWrapper>
  )
}
