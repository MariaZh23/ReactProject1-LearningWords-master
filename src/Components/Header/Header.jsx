import './Header.scss'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header>
      <div className='header-container'>
        <Link to="/"><img src="/src/assets/headerLogo.svg" alt="Логотип" className='logoImg'/></Link>
        <nav className='header-nav'>
          <ul className='header-nav-list'>
            <li className='header-nav-list-item'><Link to="/">Главная</Link></li>
            <li className='header-nav-list-item'><Link to="/flashcard">Карточки</Link></li>
            <li className='header-nav-list-item'><Link to="/results">Результаты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
