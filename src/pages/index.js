import React from 'react'
import Link from 'gatsby-link'
import { Trans, withI18n } from '@lingui/react'

const IndexPage = ({i18n}) => (
  <div>
    <h1>
      <Trans>Hi people</Trans>
    </h1>
    <p><Trans>Welcome to your new Gatsby site.</Trans></p>
    <Trans render="p">Now go build something great.</Trans>
    <Link to={i18n.t`/page-2`}><Trans>Go to page 2</Trans></Link>
  </div>
)

export default withI18n()(IndexPage)
