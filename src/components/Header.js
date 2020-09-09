import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-code"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Caliendo Julien</h1>
        <p>
          Développeur <span className="icon fa-certificate"></span> Administrateur système <span
          className="icon fa-certificate"></span> Auteur <span className="icon fa-certificate"></span> Formateur
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('moi')
            }}
          >
            <span className="icon fa-user-circle"></span> Moi
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('travail')
            }}
          >
            <span className="icon fa-briefcase"></span> Mon travail
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('calendrier')
            }}
          >
            <span className="icon fa-calendar"></span> Calendrier
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            <span className="icon fa-envelope"></span> Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
