import { useContext } from 'react'
import { Post } from './Post'
import { PostsContent } from './styles'
import { GithubContext } from '../../../../contexts/GithubContext'

export function Posts() {
  const { githubIssues } = useContext(GithubContext)

  return (
    <PostsContent>
      {githubIssues.map((githubIssue, index) => (
        <Post key={index} githubIssue={githubIssue} />
      ))}
    </PostsContent>
  )
}
