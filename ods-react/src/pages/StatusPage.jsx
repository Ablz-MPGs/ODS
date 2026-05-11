import { useEffect, useMemo, useState } from "react"
import statusData from "../data/status.json"

function formatStat(min, max, suffix = "") {
  if (min === null || max === null) return "N/A"
  if (min === max) return `${min}${suffix}`
  return `${min} - ${max}${suffix}`
}

function StatusTable({ tier, targetId }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr className="head">
            {statusData.colunas.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tier.criaturas.map((creature) => (
            <tr className={targetId === creature.id ? "target-row" : ""} id={creature.id} key={creature.id}>
              <td>{creature.nome}</td>
              <td>{formatStat(creature.hpMin, creature.hpMax)}</td>
              <td>{formatStat(creature.danoBaseMin, creature.danoBaseMax)}</td>
              <td>{formatStat(creature.fraturaMin, creature.fraturaMax, "%")}</td>
              <td>{formatStat(creature.sangramentoMin, creature.sangramentoMax, "%")}</td>
              <td>{formatStat(creature.velocidade.terraMin, creature.velocidade.terraMax)}</td>
              <td>{formatStat(creature.velocidade.aguaMin, creature.velocidade.aguaMax)}</td>
              <td>{formatStat(creature.velocidade.arMin, creature.velocidade.arMax)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function StatusPage({ targetId }) {
  const targetTier = useMemo(
    () => statusData.tiers.find((tier) => tier.criaturas.some((creature) => creature.id === targetId)),
    [targetId],
  )
  const [openTiers, setOpenTiers] = useState(() => new Set(targetTier ? [targetTier.tier] : []))

  useEffect(() => {
    if (!targetTier || !targetId) return

    requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "center" })
    })
  }, [targetId, targetTier])

  const toggleTier = (tierNumber) => {
    setOpenTiers((current) => {
      const next = new Set(current)
      if (next.has(tierNumber)) next.delete(tierNumber)
      else next.add(tierNumber)
      return next
    })
  }

  return (
    <>
      <h1>Tabela de estatísticas</h1>

      <div className="texto-info">
        <p>
          A complexidade do jogo permite que cada criatura possua características próprias, com
          diferentes valores em atributos que tornam sua gameplay única.
        </p>
      </div>

      {statusData.tiers.map((tier) => {
        const open = openTiers.has(tier.tier)

        return (
          <section className="status-tier" key={tier.tier}>
            <button
              className={`tier-toggle ${open ? "" : "collapsed"}`}
              type="button"
              aria-expanded={open}
              onClick={() => toggleTier(tier.tier)}
            >
              <span>{tier.titulo}</span>
              <span className="arrow" />
            </button>
            {open ? <StatusTable tier={tier} targetId={targetId} /> : null}
          </section>
        )
      })}
    </>
  )
}
