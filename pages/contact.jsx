import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

function Contact (props) {
  const language = props.language 

  const handleLangSelect = () => {
    const form = document.querySelector('.contact-form')
    form.classList.add('lang-change')
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const form = document.querySelector('.contact-form')

      const timer = setTimeout(() => {
        form.classList.remove('lang-change')
      }, 500)
      return () => clearTimeout(timer)
    }
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
        <main className="main-content form-content">
          <Form language={props.language}/>
        </main>
      </section>
    </>
    
  )
}

export default Contact