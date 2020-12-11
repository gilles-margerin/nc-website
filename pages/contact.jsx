import Head from 'next/head'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Form from '../components/Form'

function Contact (props) {
  const language = props.language 
  const getForm = () => document.querySelector('.contact-form')

  const handleLangSelect = () => {
    getForm().classList.add('lang-change')
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timer = setTimeout(() => {
       getForm().classList.remove('lang-change')
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
        <div className="wrapper">
          <main className="main-content form-content">
            <Form language={props.language}/>
          </main>
        </div>
      </section>
    </>
    
  )
}

export default Contact