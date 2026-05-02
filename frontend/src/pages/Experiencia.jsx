function Experiencia() {
  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Experiência Profissional</h1>

      {/* EXPERIÊNCIA 1 */}
      <div style={styles.card}>
        <h2>Técnico em Segurança do Trabalho</h2>
        <h4>Metalúrgica Jaguar Equipamentos | 2024 - Atual</h4>

        <p>
          Atuação na prevenção de acidentes e promoção de um ambiente de trabalho seguro,
          com foco em atividades industriais e operações de risco.
        </p>

        <ul>
          <li>Realização de inspeções de segurança em áreas produtivas</li>
          <li>Elaboração de APR (Análise Preliminar de Risco)</li>
          <li>Aplicação de treinamentos de NR-10, NR-12 e NR-35</li>
          <li>Investigação e análise de acidentes</li>
          <li>Controle e entrega de EPIs</li>
        </ul>
      </div>

      {/* EXPERIÊNCIA 2 */}
      <div style={styles.card}>
        <h2>Auxiliar de Segurança do Trabalho</h2>
        <h4>Empresa Academia LetsFit | 2023 - 2024</h4>

        <p>
          Suporte nas rotinas de segurança do trabalho, contribuindo para o cumprimento
          das normas regulamentadoras e redução de riscos ocupacionais.
        </p>

        <ul>
          <li>Apoio em inspeções de segurança</li>
          <li>Organização de documentos e laudos técnicos</li>
          <li>Controle de fichas de EPI</li>
          <li>Participação em DDS (Diálogo Diário de Segurança)</li>
        </ul>
      </div>

      {/* EXPERIÊNCIA 3 (OPCIONAL - SIMULADA) */}
      <div style={styles.card}>
        <h2>Projeto Acadêmico / Simulado</h2>
        <h4>Plano de Segurança Industrial</h4>

        <p>
          Desenvolvimento de projeto completo envolvendo análise de riscos,
          plano de emergência e medidas preventivas em ambiente industrial.
        </p>

        <ul>
          <li>Mapeamento de riscos ambientais</li>
          <li>Definição de medidas corretivas</li>
          <li>Elaboração de plano de evacuação</li>
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
  card: {
    backgroundColor: '#1e293b',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '20px',
    borderLeft: '5px solid #facc15'
  }
}

export default Experiencia