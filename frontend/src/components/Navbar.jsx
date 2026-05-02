import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Segurança do Trabalho</h2>
       
      <ul style={styles.menu}>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/experiencia">Experiência</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
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
  menu: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
    color: '#e2e8f0',
    cursor: 'pointer'
  }
}

export default Navbar