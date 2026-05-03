function Sobre() {
  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Sobre</h1>

      <p style={styles.texto}>
        Profissional da área de Segurança do Trabalho com foco na prevenção de acidentes,
        análise de riscos e cumprimento das Normas Regulamentadoras (NRs). Experiência em
        ambiente industrial, com atuação em inspeções, treinamentos e controle de riscos.
      </p>

      {/* FORMAÇÃO */}
      <div style={styles.card}>
        <h2>Formação</h2>
        <p>Técnico em Segurança do Trabalho</p>
        <p>Instituição: Centro Educacional Estácio Ribeirão Preto - SP</p>
      </div>

      {/* CERTIFICAÇÕES */}
      <div style={styles.card}>
        <h2>Certificações (NRs)</h2>

        <ul>
          <li>NR-10 – Segurança em Instalações Elétricas</li>
          <li>NR-12 – Segurança em Máquinas e Equipamentos</li>
          <li>NR-35 – Trabalho em Altura</li>
          <li>NR-33 – Espaço Confinado</li>
          <li>NR-06 – Equipamentos de Proteção Individual (EPI)</li>
          <li>NR-11 – Transporte em Movimento, Armazenagem e Manuseio de Materiais</li>
        </ul>
      </div>

      {/* COMPETÊNCIAS */}
      <div style={styles.card}>
        <h2>Competências Técnicas</h2>

        <ul>
          <li>Elaboração de APR (Análise Preliminar de Risco)</li>
          <li>Investigação de acidentes</li>
          <li>Inspeções de segurança</li>
          <li>Aplicação de DDS</li>
          <li>Controle e gestão de EPIs</li>
        </ul>
      </div>
    </div>
  )
}

const styles = {
  container: {
    padding: '30px'
  },
  titulo: {
    marginBottom: '20px',
    color: '#facc15'
  },
  texto: {
    marginBottom: '20px'
  },
  card: {
    backgroundColor: '#1e293b',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    borderLeft: '5px solid #facc15'
  }
}

export default Sobre