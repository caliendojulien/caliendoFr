import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'
import Particles from 'react-particles-js'

const Layout = ({ children, location }) => {

  let content

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Caliendo Julien' },
              { name: 'keywords', content: 'auteur, formateur, développeur, caliendo, julien, nantes' },
            ]}
          >
            <html lang="fr"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@master/devicon.min.css"/>
          </Helmet>
          <Particles
            params={{
              'particles': {
                'number': {
                  'value': 50,
                },
                'size': {
                  'value': 3,
                },
              },
              'interactivity': {
                'events': {
                  'onhover': {
                    'enable': true,
                    'mode': 'repulse',
                  },
                },
              },
            }}
          />
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
