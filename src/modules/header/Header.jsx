import './header.css'

function Header() {
  return (
    <header className='container'>
      <div>
        <img src="" alt="Meilin logo" width={100} />
      </div>
      <div className="header-options">
        <ul>
          <li>Sobre mí</li>
          <li>Producciones artísticas</li>
          <li>Productos</li>
        </ul>
      </div>
    </header>
  )
}

export default Header