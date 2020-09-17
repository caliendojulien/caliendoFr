import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-code"/>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Caliendo Julien</h1>
        <p>
          Développeur <span className="icon fa-certificate"/> Administrateur système <span
  className="icon fa-certificate"/> Auteur <span className="icon fa-certificate"/> Formateur
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
            <span className="icon fa-user-circle"/> Moi
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('travail')
            }}
          >
            <span className="icon fa-briefcase"/> Mon travail
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('calendrier')
            }}
          >
            <span className="icon fa-calendar"/> Calendrier
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            <span className="icon fa-envelope"/> Contact
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
