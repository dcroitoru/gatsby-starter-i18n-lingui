const { languages, defaultLanguage } = require('./src/i18n-config')

console.log(languages, defaultLanguage)

exports.onCreatePage = async ({ page, boundActionCreators }) => {
  const { createPage, deletePage } = boundActionCreators

  return new Promise((resolve, reject) => {
    deletePage(page)
    languages.map((language) => {
      let newPage = Object.assign({}, page, {
        originalPath: page.path,
        path: language === defaultLanguage ? page.path : '/' + language + page.path,
        context: {
          lang: language
        }
      })

      // console.log('creating', newPage)
      createPage(newPage)
    })

    resolve()
  })
}
