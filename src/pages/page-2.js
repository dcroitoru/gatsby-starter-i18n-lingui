import React from 'react'
import Link from 'gatsby-link'
import { Trans, withI18n } from '@lingui/react'

const SecondPage = ({i18n}) => (
  <div>
    <h1>
      <Trans>Hi from the second page</Trans>
    </h1>
    
    <Trans id="welcome-page-2" render="p" />
    
    <Link to={i18n.t`/`}>
      <Trans>Go back to the homepage</Trans>
    </Link>
  </div>
)

export default withI18n()(SecondPage)
