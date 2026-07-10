import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  const alternarMenu = () => {
    setMenuAberto((valorAtual) => !valorAtual)
  }

  const fecharMenu = () => {
    setMenuAberto(false)
  }

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Segurança do Trabalho</h2>

      <button
        type="button"
        style={styles.botaoMenu}
        onClick={alternarMenu}
        aria-label="Abrir menu de navegação"
        aria-expanded={menuAberto}
      >
        ☰
      </button>

      {menuAberto && (
        <ul style={styles.menuDropdown}>
          <li><Link to="/" onClick={fecharMenu}>Início</Link></li>
          <li><Link to="/sobre" onClick={fecharMenu}>Sobre</Link></li>
          <li><Link to="/experiencia" onClick={fecharMenu}>Experiência</Link></li>
          <li><Link to="/projetos" onClick={fecharMenu}>Projetos</Link></li>
          <li><Link to="/contato" onClick={fecharMenu}>Contato</Link></li>
          <li><Link to="/gestao-ambiental" onClick={fecharMenu}>Gestão Ambiental</Link></li>
        </ul>
      )}
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#0f172a',
    padding: '15px 30px',
    borderBottom: '2px solid #facc15'
  },
  logo: {
    color: '#facc15'
  },
  botaoMenu: {
    backgroundColor: 'transparent',
    border: '1px solid #facc15',
    color: '#facc15',
    fontSize: '24px',
    borderRadius: '8px',
    padding: '4px 10px',
    cursor: 'pointer'
  },
  menuDropdown: {
    position: 'absolute',
    top: '70px',
    right: '30px',
    backgroundColor: '#0f172a',
    border: '1px solid #facc15',
    borderRadius: '10px',
    padding: '12px 16px',
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    color: '#e2e8f0',
    cursor: 'pointer'
  }
}

export default Navbar