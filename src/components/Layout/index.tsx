import { Link, Outlet } from 'react-router-dom'
import GithubBlogLogo from '../../assets/github-blog-logo.svg'
import { HeaderWrapper, MainWrapper } from './styles'

export function Layout() {
  return (
    <>
      <HeaderWrapper>
        <Link to="/">
          <GithubBlogLogo />
        </Link>
      </HeaderWrapper>
      <MainWrapper>
        <Outlet />
      </MainWrapper>
    </>
  )
}
