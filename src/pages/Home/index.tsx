/* eslint-disable camelcase */
import {
  GithubLink,
  GithubProfileDescription,
  GithubProfileImage,
  GithubProfileLink,
  GithubProfileLinks,
  HeaderContent,
  HeaderContentHeading,
} from './styles'

import GithubIcon from '../../assets/icons/github.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faArrowUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { SearchBox } from './components/SearchBox'
import { Posts } from './components/Posts'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface GithubUserProfileData {
  login: string
  avatar_url: string
  url: string
  html_url: string
  name: string
  location: string
  bio: string
  followers: number
}

export function Home() {
  const [githubProfile, setGithubProfile] = useState(
    {} as GithubUserProfileData,
  )

  const fetchGithubUserProfileData = useCallback(async () => {
    const response = await api.get('users/Thav0')
    const { login, avatar_url, html_url, url, name, location, bio, followers } =
      response.data

    const githubProfileData = {
      login,
      avatar_url,
      html_url,
      url,
      name,
      location,
      bio,
      followers,
    }

    setGithubProfile(githubProfileData)
  }, [])

  useEffect(() => {
    fetchGithubUserProfileData()
  }, [fetchGithubUserProfileData])

  return (
    <>
      <HeaderContent>
        <GithubProfileImage
          src={githubProfile.avatar_url}
          alt={githubProfile.login}
        />
        <div>
          <HeaderContentHeading>
            <h2>{githubProfile.name}</h2>
            <GithubLink to={githubProfile.html_url} target="_blank">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </GithubLink>
          </HeaderContentHeading>
          <GithubProfileDescription>
            {githubProfile.bio}
          </GithubProfileDescription>

          <GithubProfileLinks>
            <GithubProfileLink>
              <GithubIcon width="16px" height="16px" />
              <div>{githubProfile.login}</div>
            </GithubProfileLink>
            <GithubProfileLink>
              <FontAwesomeIcon icon={faBuilding} />
              <div>{githubProfile.login}</div>
            </GithubProfileLink>
            <GithubProfileLink>
              <FontAwesomeIcon icon={faUserGroup} />
              <div>{githubProfile.login}</div>
            </GithubProfileLink>
          </GithubProfileLinks>
        </div>
      </HeaderContent>
      <SearchBox />
      <Posts />
    </>
  )
}
