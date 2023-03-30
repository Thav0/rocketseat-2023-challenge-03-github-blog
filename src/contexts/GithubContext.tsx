/* eslint-disable camelcase */
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

export interface IGithubRepositoryIssue {
  id: string
  title: string
  body: string
  html_url: string
  created_at: Date
}

interface IGithubContext {
  githubIssue: IGithubRepositoryIssue
  githubIssues: IGithubRepositoryIssue[]
  fetchGithubIssues: (query?: string) => Promise<void>
  fetchGithubIssueByID: (issueID: number) => Promise<void>
}

export const GithubContext = createContext({} as IGithubContext)

interface GithubProviderProps {
  children: ReactNode
}

const GITHUB_USERNAME = 'Thav0'
const GITHUB_REPOSITORY = 'rocketseat-2023-challenge-03-github-blog'

export function GithubProvider({ children }: GithubProviderProps) {
  const [githubIssues, setGithubIssues] = useState<IGithubRepositoryIssue[]>([])
  const [githubIssue, setGithubIssue] = useState({} as IGithubRepositoryIssue)

  const fetchGithubIssues = useCallback(async (query = '') => {
    const response = await api.get('/search/issues', {
      params: {
        q: `${query}repo:${GITHUB_USERNAME}/${GITHUB_REPOSITORY}`,
      },
    })

    const githubIssuesData = response.data.items.map(
      ({ number, title, body, html_url, created_at }) => {
        return {
          id: number,
          title,
          html_url,
          body,
          created_at: new Date(created_at),
        }
      },
    )

    setGithubIssues(githubIssuesData)
  }, [])

  const fetchGithubIssueByID = useCallback(async (issueId: number) => {
    const response = await api.get(
      `repos/${GITHUB_USERNAME}/${GITHUB_REPOSITORY}/issues/${issueId}`,
      {
        params: {
          q: `repo:/`,
        },
      },
    )
    setGithubIssue(response.data)
  }, [])

  useEffect(() => {
    fetchGithubIssues()
  }, [fetchGithubIssues])

  return (
    <GithubContext.Provider
      value={{
        githubIssues,
        githubIssue,
        fetchGithubIssues,
        fetchGithubIssueByID,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}
