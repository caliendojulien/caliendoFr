import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import javascriptEtAngular from '../images/javascriptEtAngular.jpg'
import { Link } from 'gatsby'

class Main extends React.Component {
  render() {
    let close = (
      <div className="close" onClick={() => {
        this.props.onCloseArticle()
      }}/>
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
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="moi"
          className={`${this.props.article === 'moi' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Qui suis je ?</h2>
          <span className="image main">
            <img src={pic01} alt=""/>
          </span>
          <p>
            (En construction)
          </p>
          {close}
        </article>

        <article
          id="travail"
          className={`${this.props.article === 'travail' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Mon travail</h2>
          <span className="image main">
            <Link
              to="https://www.editions-eni.fr/julien-caliendo?utm_source=site&utm_medium=affiliation&utm_campaign=2020-07-JCALIENDO&xtor=AL-3972-JCALIENDO"><img
              src={javascriptEtAngular} alt="javaScript et Angular aux editions ENI"/></Link>
          </span>
          <p>
            (En construction)
          </p>
          {close}
        </article>

        <article
          id="calendrier"
          className={`${this.props.article === 'calendrier' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Calendrier</h2>
          <iframe title="calendrier"
                  src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FParis&amp;src=NTM0a3AwdTFsbjRsNGttYmVtN2JnZzdmMm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%237986CB&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;showTitle=0"
                  style={styleCalendrier}/>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name"/>
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email"/>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"/>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special"/>
              </li>
              <li>
                <input type="reset" value="Reset"/>
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/caliendojulien"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/caliendojulien"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
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
