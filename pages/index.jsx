import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Presentation from '../components/Presentation'
import Introduction from '../components/Introduction'

function Home(props) {
  const language = props.language 
 
  const getElements = {
    getPresentation: () => document.querySelector('.presentation'),
    getIntro: () => document.querySelector('.intro'),
    getImg: () => document.querySelector('.main-img') 
  }
 
  const handleLangSelect = () => {
    for (let getFunc in getElements) {
      getElements[getFunc]().classList.add('lang-change')
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {      
      const timer = setTimeout(() => {
        for (let getFunc in getElements) {
          getElements[getFunc]().classList.remove('lang-change')
        }
    }, 500)
    return () => clearTimeout(timer)
    }
  },[language])
  
  return(
    <>
      <Head>
        <title className='page-title'>{props.language.title}</title>
        <script defer src="https://friconix.com/cdn/friconix.js"></script>
      </Head>
      <Navbar 
        handleLangSelect={handleLangSelect} 
        langSelect={props.langSelect} 
        language={props.language}/>
      <section className="main-container">
        <main className="main-content">
          <Presentation language={props.language}/>
          <img className='main-img' src="/nat-cv-2-280.jpg" alt="Natalia Carreño portrait"/>
          <Introduction language={props.language}/>
        </main>
      </section>
    </>
  )
}

export default Home