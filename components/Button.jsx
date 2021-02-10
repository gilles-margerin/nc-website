function Button(props) {
  return(
    <button
    className={props.className}
      onClick={(e) => {
        props.langSelect(e);
        props.handleLangSelect(e)
      }}>
        {props.value}
    </button>
  )
}

export default Button