import risco from "../assets/documentos/Gerenciamento de Riscos .pdf";
import higiene from "../assets/documentos/Higiene do Trabalho .pdf";
import legislacao from "../assets/documentos/Legislação Normas e Programa em Segurança do trabalho .pdf";
import incendio from "../assets/documentos/Proteção Contra incêndio e Explosões .pdf";
import saude from "../assets/documentos/Saúde Ocupacional .pdf";

const documentos = [
  {
    titulo: "Gerenciamento de Riscos",
    descricao: "Material de apoio com conceitos, metodologias e boas práticas para identificação e controle de riscos.",
    arquivo: risco,
  },
  {
    titulo: "Higiene do Trabalho",
    descricao: "Conteúdo voltado à prevenção de agravos ambientais e à promoção de condições seguras no ambiente laboral.",
    arquivo: higiene,
  },
  {
    titulo: "Legislação, Normas e Programa em Segurança do Trabalho",
    descricao: "Resumo das principais referências normativas e da estruturação de programas de segurança.",
    arquivo: legislacao,
  },
  {
    titulo: "Proteção Contra Incêndio e Explosões",
    descricao: "Materiais sobre prevenção, medidas de controle e resposta a emergências relacionadas a incêndios.",
    arquivo: incendio,
  },
  {
    titulo: "Saúde Ocupacional",
    descricao: "Conteúdo sobre prevenção de doenças ocupacionais, saúde no trabalho e gestão preventiva.",
    arquivo: saude,
  },
];

function GestaoAmbiental() {
  return (
    <section style={styles.container}>
      <h1 style={styles.titulo}>Gestão Ambiental</h1>

      <p style={styles.descricao}>
        
          Instituição: Universidade Estácio de Sá. Duração: 12 meses. Carga horária: 360 horas. Modalidade: EAD. Certificação: Pós-graduação lato sensu em Gestão Ambiental. sustentabilidade, prevenção de riscos e boas práticas ambientais aplicadas ao ambiente corporativo.

      </p>

      <h2 style={styles.subtitulo}>Disciplinas Cursadas</h2>
      <ul style={styles.lista}>
        <li>Certificação e Auditorias de SGA</li>
        <li>Ciências Ambientais e Substâncias Químicas</li>
        <li>Gerenciamento Ambiental nas Empresas</li>
        <li>Gerenciamento de Resíduos e Efluentes</li>
        <li>Gestão de Riscos Ambientais</li>
      </ul>

      <section style={styles.certificacoes}>
        <h2 style={styles.subtitulo}>Certificações e Competências Técnicas</h2>

        <div style={styles.card}>
          <h3 style={styles.cardTitulo}>Saúde Ocupacional</h3>
          <p style={styles.cardTexto}>
            Competências em doenças ocupacionais, toxicologia industrial,
            psicologia do trabalho e saúde e segurança ocupacional.
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitulo}>Proteção Contra Incêndios e Explosões</h3>
          <p style={styles.cardTexto}>
            Conhecimentos em prevenção e controle de incêndios,
            explosões, primeiros socorros e segurança operacional.
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitulo}>Legislação, Normas e Programas em Segurança do Trabalho</h3>
          <p style={styles.cardTexto}>
            Aplicação de legislação trabalhista, previdenciária,
            normas regulamentadoras e programas de segurança.
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitulo}>Gerenciamento de Riscos</h3>
          <p style={styles.cardTexto}>
            Identificação de perigos, avaliação de riscos ocupacionais
            e medidas preventivas.
          </p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitulo}>Higiene do Trabalho</h3>
          <p style={styles.cardTexto}>
            Avaliação de agentes ambientais, ergonomia,
            acústica ocupacional e biossegurança.
          </p>
        </div>
      </section>

      <h2 style={styles.subtitulo}>Documentos de Apoio</h2>
      <div style={styles.grid}>
        {documentos.map((documento) => (
          <article key={documento.titulo} style={styles.card}>
            <h3 style={styles.cardTitulo}>{documento.titulo}</h3>
            <p style={styles.cardTexto}>{documento.descricao}</p>
            <a href={documento.arquivo} target="_blank" rel="noreferrer" style={styles.link}>
              Visualizar PDF
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "30px",
    color: "#f8fafc",
  },
  titulo: {
    color: "#facc15",
    marginBottom: "10px",
  },
  descricao: {
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "20px",
  },
  subtitulo: {
    color: "#facc15",
    marginTop: "24px",
    marginBottom: "12px",
  },
  lista: {
    paddingLeft: "20px",
    lineHeight: "1.8",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
    marginTop: "12px",
  },
  card: {
    backgroundColor: "#1e293b",
    border: "1px solid #334155",
    borderRadius: "10px",
    padding: "16px",
  },
  cardTitulo: {
    marginTop: 0,
    marginBottom: "8px",
    color: "#facc15",
  },
  cardTexto: {
    marginBottom: "12px",
    lineHeight: "1.5",
    color: "#cbd5e1",
  },
  link: {
    color: "#facc15",
    fontWeight: "600",
    textDecoration: "none",
  },
};

export default GestaoAmbiental;