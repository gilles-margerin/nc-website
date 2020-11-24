import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

function Contact (props) {
  const language = props.language 

  const handleLangSelect = () => {
    /* const presentation = document.querySelector('.presentation')
    const intro = document.querySelector('.intro')
    const img = document.querySelector('.main-img')

    presentation.classList.add('lang-change')
    intro.classList.add('lang-change')
    img.classList.add('lang-change') */
  }

  useEffect(() => {
    /* if (typeof window !== 'undefined') {
      const presentation = document.querySelector('.presentation')
      const intro = document.querySelector('.intro')
      const img = document.querySelector('.main-img')

      const timer = setTimeout(() => {
        presentation.classList.remove('lang-change')
        intro.classList.remove('lang-change')
        img.classList.remove('lang-change')
    }, 500)
    return () => clearTimeout(timer)
    } */
  },[language])

  return(
    <>
      <Head>
      <title className='page-title'>{props.language.title}</title>
      </Head>
      <Navbar 
        handleLangSelect={handleLangSelect} 
        langSelect={props.langSelect} 
        language={props.language}/>
      <section className="main-container">
        <main className="main-content">
          <Form language={props.language}/>
        </main>
      </section>
    </>
    
  )
}

export default Contact