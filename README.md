# gatsby-starter-i18n-linguijs
Gatsby starter with i18n/l10n support using [js-lingui](https://github.com/lingui/js-lingui).  
This will generate pages for each locale avoiding duplicate code.  

[Demo](https://gatsby-starter-i18n-lingui.netlify.com/)

## Install

Make sure that you have Gatsby and js-lingui installed globally:
```sh
npm install --global gatsby-cli js-lingui
```

Extract translations:
```sh
npm run extract
```

Run gatsby:
```sh
npm run develop
```

## Config

Add new locale (ex: russian):
```sh
lingui add-locale ru
```

Wire up catalogs in `src/i18n-config` 

Refer to [js-lingui docs](https://lingui.github.io/js-lingui/ref/lingui-react.html) for further information on using the library

You could have ___translated paths___; for that you will need a mapping of default paths to localized paths. Update `gatsby-node` and locale files to use those mappings.  


## Thanks

These threads/repositories served as inspiration:  
https://github.com/gatsbyjs/gatsby/issues/3853#issuecomment-365216769  
https://github.com/lingui/js-lingui/issues/158#issuecomment-371096693  
https://github.com/morloy/ledgy.com  