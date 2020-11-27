import Button from './Button'

function Dropdown(props) {
  const handleClick = () => {
    const langMenu = document.querySelector('.lang-container')
    
    return langMenu.classList.contains('open') ?
      langMenu.classList.remove('open') : langMenu.classList.add('open')
  }

  return(
    <div id ='lang-btn' className="lang-select" onClick={() => handleClick()}>
      <img src="/translating64.png" alt=""/>
      <div className="lang-container">
        <Button 
        handleLangSelect={props.handleLangSelect} 
        langSelect={() => props.langSelect('en')} 
        value="English"
        />

        <Button 
        handleLangSelect={props.handleLangSelect} 
        langSelect={() => props.langSelect('es')} 
        value="Español"
        />

        <Button 
        handleLangSelect={props.handleLangSelect} 
        langSelect={() => props.langSelect('pt')}         
        value="Português"
        />
      </div>
    </div>
  )
}

export default Dropdown

/* Icons made by <a href="https://www.flaticon.com/free-icon/translating_2104994" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */