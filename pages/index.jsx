import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Presentation from '../components/Presentation'
import Introduction from '../components/Introduction'

function Home(props) {
  const language = props.language 

  const handleLangSelect = () => {
    const presentation = document.querySelector('.presentation')
    const intro = document.querySelector('.intro')

    presentation.classList.add('lang-change')
    intro.classList.add('lang-change')
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const presentation = document.querySelector('.presentation')
      const intro = document.querySelector('.intro')

      const timer = setTimeout(() => {
        presentation.classList.remove('lang-change')
        intro.classList.remove('lang-change')
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
      <Navbar handleLangSelect={handleLangSelect} langSelect={props.langSelect} language={props.language}/>
      <main className="main-container">
        <Presentation language={props.language}/>
        <img src="/nat-cv-2-280.jpg" alt="Natalia Carreño portrait"/>
        <Introduction language={props.language}/>
      </main>
    </>
  )
}

export default Home