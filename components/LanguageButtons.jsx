import Button from './Button'

const LanguageButtons = (props) => {
  const buttonConfig = {
    en: 'English',
    es: 'Español',
    pt: 'Português'
  }
  
  const btnArr = []

  for (let key in buttonConfig) {
    btnArr.push(
      <Button handleLangSelect={props.handleLangSelect}
      langSelect={() => props.langSelect(`${key}`)}
      value={`${buttonConfig[key]}`}
      className="lang-btn"
      id={`${key}`}/>
    )
  }

  return btnArr
}

export default LanguageButtons