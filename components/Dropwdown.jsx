import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'
import Button from './Button'

function Dropdown(props) {
  return(
    <div id ='lang-btn' className="lang-select btn">
      <i className="fi-xtluxl-globe-thin"></i>
      <div className="lang-container">
        <Button langSelect={props.langSelect} id="en-btn" value="English"/>
        <Button langSelect={props.langSelect} id="es-btn" value="Español"/>
        <Button langSelect={props.langSelect} id="pt-btn" value="Português"/>
      </div>
  </div>
  )
}

export default Dropdown