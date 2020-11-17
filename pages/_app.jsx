import {useState}  from 'react'
import '../shared/styles/global.css'
import en from '../shared/translations/en.json'
import es from '../shared/translations/es.json'
import pt from '../shared/translations/pt.json'

function App({Component, pageProps}) {
  const [lang, setLang] = useState('en')
  const language = [en, es, pt].find(item => item.id === lang)
  console.log(language)


  const langSelect = (e) => {
    const target = e.target.id.slice(0,2)
    setLang(target)
  }  

  return (
    <Component 
      {...pageProps}
      language={language} 
      langSelect={langSelect}/>
  )
}

export default App