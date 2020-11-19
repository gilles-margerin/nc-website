import Button from './Button'

function Dropdown(props) {
  const handleClick = () => {
    const langMenu = document.querySelector('.lang-container')
    
    return langMenu.classList.contains('open') ?
      langMenu.classList.remove('open') : langMenu.classList.add('open')
  }

  return(
    <div id ='lang-btn' className="lang-select btn" onClick={() => handleClick()}>
      <img src="/translating-test.png" alt=""/>
      <div className="lang-container">
        <Button 
        handleLangSelect={props.handleLangSelect} 
        langSelect={props.langSelect} 
        id="en-btn" 
        value="English"
        />

        <Button 
        handleLangSelect={props.handleLangSelect} 
        langSelect={props.langSelect} 
        id="es-btn" 
        value="Español"
        />

        <Button 
        handleLangSelect={props.handleLangSelect} 
        langSelect={props.langSelect} 
        id="pt-btn" 
        value="Português"
        />
      </div>
    </div>
  )
}

export default Dropdown

/* Icons made by <a href="https://www.flaticon.com/free-icon/translating_2104994" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */