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

export function Home() {
  return (
    <HeaderContent>
      <GithubProfileImage
        src="https://avatars.githubusercontent.com/u/7991015?v=4"
        alt="Github profile image"
      />
      <div>
        <HeaderContentHeading>
          <h2>Gustavo Junior Diniz</h2>
          <GithubLink to="/">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </GithubLink>
        </HeaderContentHeading>
        <GithubProfileDescription>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </GithubProfileDescription>

        <GithubProfileLinks>
          <GithubProfileLink>
            <GithubIcon width="16px" height="16px" />
            <div>Thav0</div>
          </GithubProfileLink>
          <GithubProfileLink>
            <FontAwesomeIcon icon={faBuilding} />
            <div>Thav0</div>
          </GithubProfileLink>
          <GithubProfileLink>
            <FontAwesomeIcon icon={faUserGroup} />
            <div>Thav0</div>
          </GithubProfileLink>
        </GithubProfileLinks>
      </div>
    </HeaderContent>
  )
}
