function Projetos() {
  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Projetos de Segurança do Trabalho</h1>

      {/* PROJETO 1 */}
      <div style={styles.card}>
        <h2>APR - Análise Preliminar de Risco</h2>
        <p>
          Elaboração de análise de risco para atividade de manutenção em área industrial,
          identificando perigos, avaliando riscos e propondo medidas de controle.
        </p>

        <ul>
          <li>Identificação de riscos mecânicos e elétricos</li>
          <li>Definição de uso de EPIs</li>
          <li>Procedimentos de bloqueio e etiquetagem (LOTO)</li>
        </ul>
      </div>

      {/* PROJETO 2 */}
      <div style={styles.card}>
        <h2>Plano de Emergência</h2>
        <p>
          Desenvolvimento de plano de evacuação para ambiente industrial com foco
          em incêndio e vazamento de produtos químicos.
        </p>

        <ul>
          <li>Mapeamento de rotas de fuga</li>
          <li>Treinamento de brigada</li>
          <li>Sinalização de segurança</li>
        </ul>
      </div>

      {/* PROJETO 3 */}
      <div style={styles.card}>
        <h2>Checklist de Inspeção de Segurança</h2>
        <p>
          Criação de checklist para inspeções periódicas em máquinas e equipamentos.
        </p>

        <ul>
          <li>Verificação de proteções mecânicas</li>
          <li>Condições de EPIs</li>
          <li>Organização do ambiente (5S)</li>
        </ul>
      </div>

      {/* PROJETO 4 */}
      <div style={styles.card}>
        <h2>DDS - Diálogo Diário de Segurança</h2>
        <p>
          Desenvolvimento de conteúdo para DDS com foco em prevenção de acidentes
          e conscientização dos colaboradores.
        </p>

        <ul>
          <li>Uso correto de EPIs</li>
          <li>Comportamento seguro</li>
          <li>Prevenção de acidentes comuns</li>
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

export default Projetos