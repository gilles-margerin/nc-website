function Button(props) {
  return(
    <button id={props.id} onClick={(e) => {props.langSelect(e);
    props.handleLangSelect()}}>{props.value}</button>
  )
}

export default Button