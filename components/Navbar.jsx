import Link from 'next/link'
import Dropdown from './Dropwdown'

function Navbar(props) {
  return(
    <nav className='nav-container'>
      <div className="menu-container btn">
        <button className="menu-btn">X</button>
        <Link classname="link-container" href="/contact">
        <a>{props.language.pages[1]}</a>
        </Link>
        <Link classname="link-container" href="/about">
        <a>{props.language.pages[2]}</a>
        </Link>
      </div>
      <div className="banner">
        <h1 className='main-title'>
          <Link classname="homelink-container" href="/">
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