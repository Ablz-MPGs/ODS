import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { creaturesById, galleryTiers } from "../data/gallery"
import dinoDatabase from "../data/dinoDatabase.json"
import { repairText } from "../utils/text"

function SafeImage({ src, alt, className, fallback = "/img/logo.png" }) {
  const [imgSrc, setImgSrc] = useState(src || fallback);

  return (
    <img
      src={imgSrc}
      alt={alt || "Imagem"}
      className={className}
      loading="lazy"
      onError={() => {
        if (imgSrc !== fallback) {
          setImgSrc(fallback);
        }
      }}
    />
  );
}

function SkillList({ title, items }) {
  return (
    <>
      <h3 className="sub-title">{title}</h3>
      <div className="skills-container">
        {items.map((skill) => (
          <article className="skill-item" key={`${title}-${skill.title}`}>
            <SafeImage className="skill-icon" src={skill.icon} alt="" />
            <div className="skill-text">
              <h5>{repairText(skill.title)}</h5>
              <p>{repairText(skill.desc)}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}

function DinoModal({ dino, onClose }) {
  if (!dino) return null

  const stats = dino.stats || {}

  return (
    <div className="modal active-modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-content dino-card-style" onClick={(event) => event.stopPropagation()}>
        <button className="close" type="button" aria-label="Fechar modal" onClick={onClose}>
          &times;
        </button>

        <div className="header">
          <div className="header-left">
            <div className="dino-avatar">
              <SafeImage src={dino.image} alt={repairText(dino.fullName || "Dinossauro").replace(/<br>/g, " ")} />
            </div>
            <div className="dino-name">{repairText(dino.fullName || "Desconhecido").replace(/<br>/g, " ")}</div>
          </div>
          <div className="diet-icon">{repairText(dino.diet || "")}</div>
        </div>

        <div className="stats-box">
          <div className="stat-header">
            <div className="stat-item">
              <h4>Espaços ocupados</h4>
              <p>{stats.group ? `${stats.group} slot(s)` : "-"}</p>
            </div>
            <div className="stat-item">
              <h4>Crescimento</h4>
              <p>{stats.growth ? `${stats.growth} min` : "-"}</p>
            </div>

          </div>

          <div className="stat-body">
            <div className="stat-item">
              <h4>Preço</h4>
              <p>{stats.price ? `${stats.price}` : "-"}</p>
            </div>
            <div className="stat-item">
              <h4>Skin 1</h4>
              <p>{stats.skin1 ? `${stats.skin1}` : "-"}</p>
            </div>
            <div className="stat-item">
              <h4>Skin 2</h4>
              <p>{stats.skin2 ? `${stats.skin2}` : "-"}</p>
            </div>
            <div className="stat-item">
              <h4>Avatar</h4>
              <p>{stats.fotinha ? `${stats.fotinha}` : "-"}</p>
            </div>
            <div className="stat-item">
              <h4>Coloração gema</h4>
              <p>{stats.corgema ? `${stats.corgema}` : "-"}</p>
            </div>
            <div className="stat-item">
              <h4>Coloração moeda</h4>
              <p>{stats.cormoeda ? `${stats.cormoeda}` : "-"}</p>
            </div>
          </div>
        </div>

        <h2 className="section-title">Habilidades</h2>
        <SkillList title="Passivas" items={dino.passives || []} />
        <SkillList title="Ativas" items={dino.actives || []} />

        <div className="skills-container">
          <p>
            O dano atribuído às habilidades ativas é calculado em testes, não possui respaldo oficial.
          </p>
        </div>

        <div className="modal-actions">
          {dino.idStatus && (
            <Link className="btn-status" to={`/status/${dino.idStatus}`}>
              Status
            </Link>
          )}
          <Link className="btn-paleo" to="/galeria">
            Paleontologia
          </Link>
        </div>
      </div>
    </div>
  )
}

function validateCreature(creatureArray) {
  if (!Array.isArray(creatureArray) || creatureArray.length < 5) return null;
  const [id, key, name, description, image] = creatureArray;
  
  if (!id || !key) return null; // Identificadores obrigatórios
  
  return {
    id,
    key,
    name: name || "Desconhecido",
    description: description || "Descrição não disponível.",
    image: image || "/img/logo.png"
  };
}

export default function GalleryPage({ targetId }) {
  const targetCreature = creaturesById[targetId]
  const [activeTier, setActiveTier] = useState(targetCreature?.tierId || "tier1")
  const [selected, setSelected] = useState(targetCreature?.key || null)
  const selectedDino = useMemo(() => (selected ? dinoDatabase[selected] : null), [selected])

  useEffect(() => {
    if (!targetCreature) return

    requestAnimationFrame(() => {
      document.getElementById(targetCreature.id)?.scrollIntoView({ behavior: "smooth", block: "center" })
    })
  }, [targetCreature])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelected(null)
    }
    window.addEventListener("keydown", closeOnEscape)
    return () => window.removeEventListener("keydown", closeOnEscape)
  }, [])

  return (
    <>
      <h1>Galeria de Espécies</h1>
      <h2>Explore os habitantes da ilha amaldiçoada</h2>

      <section id="animais" className="racas">
        <div className="tier-tabs" role="tablist" aria-label="Tiers da galeria">
          {galleryTiers.map((tier) => (
            <button
              className={`tier-btn ${activeTier === tier.id ? "active" : ""}`}
              type="button"
              role="tab"
              aria-selected={activeTier === tier.id}
              key={tier.id}
              onClick={() => setActiveTier(tier.id)}
            >
              {tier.title}
            </button>
          ))}
        </div>

        <div className="texto-info gallery-shell">
          {galleryTiers.map((tier) => (
            <div className={`tier-indicator ${activeTier === tier.id ? "active-content" : ""}`} key={tier.id}>
              <div className="linha-racas">
                {tier.creatures
                  .map(validateCreature)
                  .filter(Boolean)
                  .map(({ id, key, name, description, image }) => (
                  <article className="col-md-4" id={id} key={id}>
                    <div className="card-raca">
                      <SafeImage className="img-dino" src={image} alt={name} />
                      <div className="card-body-custom">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <button className="btn-verificar" type="button" onClick={() => setSelected(key)}>
                          Verificar
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <DinoModal dino={selectedDino} onClose={() => setSelected(null)} />
    </>
  )
}
