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
  title: string
  body: string
  created_at: Date
}

interface IGithubContext {
  githubIssues: IGithubRepositoryIssue[] | []
  fetchGithubIssues: (query?: string) => Promise<void>
}

export const GithubContext = createContext({} as IGithubContext)

interface GithubProviderProps {
  children: ReactNode
}

const GITHUB_USERNAME = 'Thav0'
const GITHUB_REPOSITORY = 'rocketseat-2023-challenge-03-github-blog'

export function GithubProvider({ children }: GithubProviderProps) {
  const [githubIssues, setGithubIssues] = useState<IGithubRepositoryIssue[]>([])

  const fetchGithubIssues = useCallback(async (query = '') => {
    const response = await api.get('/search/issues', {
      params: {
        q: `${query}repo:${GITHUB_USERNAME}/${GITHUB_REPOSITORY}`,
      },
    })

    console.log(response, 'teste')

    const githubIssuesData = response.data.items.map(
      ({ title, body, created_at }: IGithubRepositoryIssue) => {
        return {
          title,
          body,
          created_at: new Date(created_at),
        }
      },
    )

    setGithubIssues(githubIssuesData)
  }, [])

  useEffect(() => {
    fetchGithubIssues()
  }, [fetchGithubIssues])

  return (
    <GithubContext.Provider value={{ githubIssues, fetchGithubIssues }}>
      {children}
    </GithubContext.Provider>
  )
}
