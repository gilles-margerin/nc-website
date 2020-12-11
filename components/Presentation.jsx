function Presentation(props) {
  
  return (
    <div className="presentation">
      
      {props.language.presentation.map((text, i) => {
        return i <= 0 ?
        <h2 key={i} className="presentation-title">{text}</h2>  
        : <p key={i} className="presentation-paragraph">{text}</p>
      })}
    </div> 
  )
}

export default Presentation