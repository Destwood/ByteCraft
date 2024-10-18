import Layout from './components/layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import Profile from './pages/Profile/Profile'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
