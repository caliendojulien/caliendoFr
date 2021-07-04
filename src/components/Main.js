import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import javascriptEtAngular from '../images/javascriptEtAngular.jpg'
import { Link } from 'gatsby'

class Main extends React.Component {
  render() {
    let close = (
      <div className='close' onClick={() => {
        this.props.onCloseArticle()
      }} />
    )

    const styleCalendrier = {
      border: 0,
      width: 550,
      height: 400,
      frameBorder: 0,
      scrolling: 'no',
      display: 'block',
      margin: 'auto',
    }

    return (
      <div
        ref={this.props.setWrapperRef}
        id='main'
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id='moi'
          className={`${this.props.article === 'moi' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className='major'>Qui suis je ?</h2>
          <span className='image main'>
            <img src={pic01} alt='' />
          </span>
          <p>
            (En construction)
          </p>
          {close}
        </article>

        <article
          id='travail'
          className={`${this.props.article === 'travail' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className='major'>Mon travail</h2>
          <span className='image main'>
            <Link
              to='https://www.editions-eni.fr/julien-caliendo?utm_source=site&utm_medium=affiliation&utm_campaign=2020-07-JCALIENDO&xtor=AL-3972-JCALIENDO'><img
              src={javascriptEtAngular} alt='javaScript et Angular aux editions ENI' /></Link>
          </span>
          <p>
            Cet ouvrage s'adresse aux développeurs qui souhaitent apprendre à développer une application web avec le
            Framework JavaScript de Google : Angular. Le lecteur est placé dans un cadre méthodologique Agile Scrum lui
            permettant d'assimiler les mécanismes de développement dans un contexte professionnel.
          </p>
          <p>
            Rédigé en deux parties, l'auteur détaille dans la première partie du livre les concepts du langage
            JavaScript, basiques comme plus avancés, en les illustrant par des exemples. Le lecteur peut ainsi se
            familiariser avec l'installation de l'IDE, les types de données, les boucles et conditions, les fonctions ou
            encore la programmation orientée objet avec JavaScript. Un chapitre consacré à TypeScript permet au lecteur
            de faire le lien entre le langage JavaScript et le framework Angular.
          </p>
          <p>
            Dans la seconde partie, l'auteur étudie ensuite pas à pas et par la pratique les mécanismes d'Angular avec
            le
            développement d'une application « fil rouge » étoffée de chapitre en chapitre grâce aux nouveaux concepts
            acquis. Le lecteur peut ainsi mettre en oeuvre les composants et leur hiérarchie, les gabarits, les API, les
            formulaires, le routage, la programmation réactive, les tests unitaires et de bout en bout,
            l'authentification, l'exploitation d'une base de données avec FireBase et l'intégration continue avec Travis
            pour aboutir très rapidement à une application pleinement fonctionnelle. Plusieurs outils sont également
            étudiés pour être en mesure de qualifier et auditer son propre code et ainsi gagner en productivité.
          </p>
          {close}
        </article>

        <article
          id='calendrier'
          className={`${this.props.article === 'calendrier' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className='major'>Calendrier</h2>
          <iframe title='calendrier'
                  src='https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FParis&amp;src=NTM0a3AwdTFsbjRsNGttYmVtN2JnZzdmMm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%237986CB&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;showTitle=0'
                  style={styleCalendrier} />
          {close}
        </article>

        <article
          id='contact'
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className='major'>Contact</h2>
          <form method='post' action='#'>
            <div className='field half first'>
              <label htmlFor='name'>Name</label>
              <input type='text' name='name' id='name' />
            </div>
            <div className='field half'>
              <label htmlFor='email'>Email</label>
              <input type='text' name='email' id='email' />
            </div>
            <div className='field'>
              <label htmlFor='message'>Message</label>
              <textarea name='message' id='message' rows='4' />
            </div>
            <ul className='actions'>
              <li>
                <input type='submit' value='Envoyer un message' className='special' />
              </li>
              <li>
                <input type='reset' value='Annuler' />
              </li>
            </ul>
          </form>
          <ul className='icons'>
            <li>
              <a
                href='https://twitter.com/caliendojulien'
                className='icon fa-twitter'
              >
                <span className='label'>Twitter</span>
              </a>
            </li>
            <li>
              <a
                href='https://github.com/caliendojulien'
                className='icon fa-github'
              >
                <span className='label'>GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
