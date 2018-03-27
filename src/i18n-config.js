const languages = [ 'en', 'ro' ]
const catalogs = {
  en: { messages: require('./locale/en/messages.json') },
  ro: { messages: require('./locale/ro/messages.json') }
}

const defaultLanguage = 'en'

const prefix = (lang) => (lang == defaultLanguage ? '/' : '/' + lang)
const deprefix = (pathname) => (pathname.startsWith('/ro/') ? pathname.substr(4) : pathname)
const langFromPath = (pathname) => (pathname.startsWith('/ro/') ? 'ro' : 'en')

exports.defaultLanguage = defaultLanguage
exports.languages = languages
exports.catalogs = catalogs
exports.prefix = prefix
exports.deprefix = deprefix
exports.langFromPath = langFromPath
