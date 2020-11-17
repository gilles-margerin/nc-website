import Head from 'next/head'
import Dropdown from '../components/Dropwdown'
import Presentation from '../components/Presentation'
import Introduction from '../components/Introduction'

function Home(props) {
  return(
    <>
      <Head>
        <title className='page-title'>{props.language.title}</title>
        <script defer src="https://friconix.com/cdn/friconix.js"></script>
      </Head>
      <Dropdown langSelect={props.langSelect}/>
      <Presentation language={props.language}/>
      <img src="/nat-cv-2-280.jpg" alt="Natalia Carreño portrait"/>
      <Introduction language={props.language}/>
    </>
  )
}

export default Home