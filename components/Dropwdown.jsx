import Button from './Button'

function Dropdown(props) {
  
  const handleClick = () => {
    const langMenu = document.querySelector('.lang-container')

    if (langMenu.classList.contains('close') || langMenu.classList.contains('init')) {
      langMenu.classList.remove('init')
      langMenu.style.display = 'flex'
      langMenu.classList.remove('close')
      langMenu.classList.add('open')
    } else if (langMenu.classList.contains('open')) {
      langMenu.classList.remove('open')
      langMenu.classList.add('close')

      const timer = setTimeout(() => {
        langMenu.style.display = 'none'
      }, 800)

      return () => clearTimeout(timer)
    }
  }

  return(
    <div id ='lang-btn' className="lang-select" onClick={(e) => handleClick(e)}>
      <img src="/translating64.png" alt="language menu icon"/>
      <div className="lang-container init">
        <Button 
        handleLangSelect={props.handleLangSelect} 
        langSelect={() => props.langSelect('en')} 
        value="English"
        id="en"
        />

        <Button 
        handleLangSelect={props.handleLangSelect} 
        langSelect={() => props.langSelect('es')} 
        value="Español"
        id="es"
        />

        <Button 
        handleLangSelect={props.handleLangSelect} 
        langSelect={() => props.langSelect('pt')}         
        value="Português"
        id="pt"
        />
      </div>
    </div>
  )
}

export default Dropdown

/* Icons made by <a href="https://www.flaticon.com/free-icon/translating_2104994" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */