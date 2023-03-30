import { Link, useParams } from 'react-router-dom'
import {
  GithubProfileLink,
  GithubProfileLinks,
  IssueContent,
  IssueHeader,
  IssueHeaderLinks,
} from './styles'
import GithubIcon from '../../assets/icons/github.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faChevronLeft,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect } from 'react'
import { GithubContext } from '../../contexts/GithubContext'
import ReactMarkdown from 'react-markdown'

type IIssueParams = {
  issueName: string
  issueId: string
} & Record<string, string>

export function Issue() {
  const { issueId } = useParams<IIssueParams>()
  const { githubIssue, fetchGithubIssueByID } = useContext(GithubContext)

  useEffect(() => {
    fetchGithubIssueByID(Number(issueId))
  }, [fetchGithubIssueByID, issueId])

  return (
    githubIssue && (
      <>
        <IssueHeader>
          <IssueHeaderLinks>
            <Link to="/">
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>voltar</span>
            </Link>
            <Link to={githubIssue.html_url} target="_blank">
              <span>Ver no github</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </IssueHeaderLinks>
          <h1>{githubIssue.title}</h1>
          <GithubProfileLinks>
            <GithubProfileLink>
              <GithubIcon width="16px" height="16px" />
              <div>teste</div>
            </GithubProfileLink>
            <GithubProfileLink>
              <FontAwesomeIcon icon={faBuilding} />
              <div>teste</div>
            </GithubProfileLink>
            <GithubProfileLink>
              <FontAwesomeIcon icon={faUserGroup} />
              <div>teste</div>
            </GithubProfileLink>
          </GithubProfileLinks>
        </IssueHeader>
        <IssueContent>
          <ReactMarkdown>{githubIssue.body}</ReactMarkdown>
        </IssueContent>
      </>
    )
  )
}
