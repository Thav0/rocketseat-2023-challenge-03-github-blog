/* eslint-disable camelcase */
import { IGithubRepositoryIssue } from '../../../../../contexts/GithubContext'
import { formatDateDifference } from '../../../../../util/dateFormatter'
import { PostWrapper, PostHeading, PostContent } from './styles'

export function Post({ githubIssue }: { githubIssue: IGithubRepositoryIssue }) {
  const { body, created_at, title } = githubIssue

  return (
    <PostWrapper>
      <PostHeading>
        <h2>{title}</h2>
        <span>{formatDateDifference(created_at)}</span>
      </PostHeading>
      <PostContent>{body}</PostContent>
    </PostWrapper>
  )
}
