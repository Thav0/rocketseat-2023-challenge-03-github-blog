import { Link, Outlet } from 'react-router-dom'
import GithubBlogLogo from '../../assets/github-blog-logo.svg'
import { HeaderWrapper } from './styles'

export function Layout() {
  return (
    <>
      <HeaderWrapper>
        <Link to="/">
          <GithubBlogLogo />
        </Link>
      </HeaderWrapper>
      <main>
        <Outlet />
      </main>
    </>
  )
}
