function Button(props) {
  return(
    <button
      className="lang-btn" 
      id={props.id} 
      onClick={(e) => {
        props.langSelect(e);
        props.handleLangSelect(e)
      }}>
        {props.value}
    </button>
  )
}

export default Button