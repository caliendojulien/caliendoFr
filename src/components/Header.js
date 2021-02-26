import PropTypes from 'prop-types'
import React from 'react'

let pourcentageCA = Math.round((1520 + 4900 + 2450 + 2250 + 2150 + (430 * 5) + 4500 + 1800 + 3870 + 3870 + 2450 + 4300) / 70000 * 100)


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
    <p>
      <progress id="progression" max="100" value={pourcentageCA}/>
      <br/>
      Avancement de mon CA 2021 : {pourcentageCA}%
    </p>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
