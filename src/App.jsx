import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Search from './pages/Search'
import Settings from './pages/Settings'
import BottomNav from './components/BottomNav'
import Header from './components/Header'

export default function App() {
  return (
    <div className="app-container">
      <Header />
      
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>

      <BottomNav />
    </div>
  )
}