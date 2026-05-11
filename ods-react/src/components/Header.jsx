import { useState } from "react"
import { NavLink, Link } from "react-router-dom"
import "../styles/header.css"

const links = [
  { page: "/inicio", label: "Início" },
  { page: "/galeria", label: "Galeria" },
  { page: "/status", label: "Status" },
  { page: "/tasks", label: "Tasks" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenus = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <div className="header-wrapper" style={{ position: "sticky", top: 0, zIndex: 1000, display: "flex", flexDirection: "column" }}>
        
        {/* Primeiro Header - Logo e Hamburger (Mobile) */}
        <header className="cabecalho principal" style={{ position: "relative", borderBottom: "none", paddingBottom: "1.2rem", paddingTop: "1.2rem", justifyContent: "center", background: "rgba(3, 4, 4, 0.99)", boxShadow: "none" }}>
          
          <div className="topnav" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Link className="logo" to="/inicio" onClick={closeMenus}>
              <img className="logo_imagem" src="/img/logo.png" alt="Logo The Cursed Dinosaur Isle" />
              <span className="cinematic-logo-text">The Cursed Dinosaur Isle</span>
            </Link>
          </div>

          <button
            className={`hamburger hamburger-mobile ${menuOpen ? "active" : ""}`}
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
        </header>

        {/* Segundo Header - Navegação */}
        <header className="cabecalho secundario cinematic-subheader">
          <nav className="navbar" style={{ width: "100%", justifyContent: "center", position: "relative" }} aria-label="Navegação principal">
            <ul className={`nav-menu cinematic-nav-menu ${menuOpen ? "active" : ""}`}>
              {links.map((link) => (
                <li className="nav-item" key={link.page}>
                  <NavLink
                    className={({ isActive }) => `nav-link cinematic-nav-link ${isActive ? "active" : ""}`}
                    to={link.page}
                    onClick={closeMenus}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </div>
    </>
  )
}
