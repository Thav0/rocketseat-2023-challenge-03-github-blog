import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Issue } from './pages/Issues/Index'

export function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="issue/:issueName/:issueId" element={<Issue />} />
        </Route>
      </Routes>
    </>
  )
}
