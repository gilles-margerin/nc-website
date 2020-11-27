import {useEffect, useState}  from 'react'
import '../shared/styles/global.css'
import enTranslations from '../shared/translations/en.json'
import esTranslations from '../shared/translations/es.json'
import ptTranslations from '../shared/translations/pt.json'

function App({Component, pageProps}) {
  const [lang, setLang] = useState('en')
  const currentTranslation = [enTranslations, esTranslations, ptTranslations].find(item => item.id === lang)

  return (
    <Component 
      {...pageProps}
      language={currentTranslation} 
      langSelect={setLang}
      />
  )
}

export default App