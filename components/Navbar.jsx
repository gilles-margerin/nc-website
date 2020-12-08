import Link from 'next/link'
import Dropdown from './Dropwdown'

function Navbar(props) {
  return(
    <nav className='nav-container'>
      <div className="menu-select">
        <img src="/menu64.png" alt="menu icon"/>
        <div className="menu-container">
          <Link href="/contact">
          <a>{props.language.pages[1]}</a>
          </Link>
          <Link href="/about">
          <a>{props.language.pages[2]}</a>
          </Link>
        </div>
      </div>
      <div className="banner">
        <h1 className='main-title'>
          <Link href="/">
            <a>Natalia Gracia</a>
          </Link>  
        </h1> 
      </div>
      <Dropdown
        handleLangSelect={props.handleLangSelect}
        language={props.language} 
        langSelect={props.langSelect}
      />
    </nav>
  )
}

export default Navbar