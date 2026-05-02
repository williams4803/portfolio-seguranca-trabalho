function Contato() {
  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Contato</h1>

      <p style={styles.texto}>
        Estou disponível para oportunidades na área de Segurança do Trabalho.
        Entre em contato pelos canais abaixo:
      </p>

      <div style={styles.card}>
        <h2>Informações de Contato</h2>

        <p><strong>Nome:</strong> Williams Carvalho de Jesus</p>
        <p><strong>Email:</strong> h3260-wc@outlook.com</p>
        <p><strong>Telefone:</strong> (19) 9 9121-0145</p>
        <p><strong>LinkedIn:</strong> linkedin.com/in/williams-carvalho-40985b99</p>
      </div>

      <div style={styles.card}>
        <h2>Envie uma mensagem</h2>

        <form style={styles.form}>
          <input type="text" placeholder="Seu nome" style={styles.input} />
          <input type="email" placeholder="Seu email" style={styles.input} />
          <textarea placeholder="Sua mensagem" style={styles.textarea}></textarea>

          <a
              href="https://wa.me/551991210145?text=Olá%20Williams%2C%20gostaria%20de%20entrar%20em%20contato%20com%20você."
              target="_blank"
              style={styles.button}
        > 
              Falar no WhatsApp
          </a>

          <button type="submit" style={styles.button}>
            Enviar
          </button>
        </form>
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
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none'
  },
  textarea: {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    minHeight: '100px'
  },
  button: {
    backgroundColor: '#facc15',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
}

export default Contato