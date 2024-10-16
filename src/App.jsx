import Layout from './components/layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
