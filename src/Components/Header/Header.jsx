import './Header.scss'

export default function Header() {
  return (
    <header>
      <div className='header-container'>
      <img src="/src/assets/headerLogo.svg" alt="Логотип" className='logoImg'/>
      <nav className='header-nav'>
        <ul className='header-nav-list'>
          <li className='header-nav-list-item'><a href="">Главная</a></li>
          <li className='header-nav-list-item'><a href="">Карточки</a></li>
          <li className='header-nav-list-item'><a href="">Таблица</a></li>
          <li className='header-nav-list-item'><a href="">Результаты</a></li>
        </ul>
      </nav>
      </div>
    </header>
  )
}
