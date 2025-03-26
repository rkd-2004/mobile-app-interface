import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  
  return (
    <header className="header">
      <button onClick={() => navigate(-1)} className="back-button">
        &lt; Back
      </button>
      <h1 className="title">Mobile App</h1>
    </header>
  )
}