import homeData from '../data/home.json';

export default function HomePage() {
  return (
    <>
      <h1>{homeData.title}</h1>

      <section className="info-jogo">
        <h2>{homeData.about.title}</h2>
        <div className="texto-info">
          <p>{homeData.about.description}</p>
        </div>
      </section>

      <section className="content-section">
        <div className="texto-info">
          <p>{homeData.releaseOrderSection.description}</p>
        </div>

        <div className="table-container">
          <table className="tabela-simples">
            <thead>
              <tr>
                {homeData.releaseOrderSection.tableHeaders.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {homeData.releaseOrderSection.data.map(([name, age]) => (
                <tr key={`${name}-${age}`}>
                  <td>{name}</td>
                  <td>{age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}
