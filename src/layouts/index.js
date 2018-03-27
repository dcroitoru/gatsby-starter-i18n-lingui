import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { I18nProvider, withI18n, Trans } from '@lingui/react'
import { navigateTo } from 'gatsby-link'
import Header from '../components/Header'
import { catalogs, prefix, deprefix, langFromPath } from '../i18n-config'
import './index.css'

const TemplateWrapper = ({ children, lang, onLangChange }) => (
  <div>
    <Helmet title='Gatsby Default Starter' meta={[ { name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' } ]} />
    <Header lang={lang} onLangClick={onLangChange} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default class extends React.Component {
  onLangChange = (lang) => {
    navigateTo(prefix(lang) + deprefix(this.props.location.pathname))
  }

  render = () => {
    const lang = langFromPath(this.props.location.pathname)
    return (
      <I18nProvider language={lang} catalogs={catalogs}>
        <TemplateWrapper {...this.props} lang={lang} onLangChange={this.onLangChange} />
      </I18nProvider>
    )
  }
}
