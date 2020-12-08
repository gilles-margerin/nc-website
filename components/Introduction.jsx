function Introduction(props) {
  return(
    <div className='intro'>
        <p className="intro-paragraph">{props.language.intro[0]}</p>
        <p className="intro-paragraph">{props.language.intro[1]}</p>
    </div>
  )
}

export default Introduction