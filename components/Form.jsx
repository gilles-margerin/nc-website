function Form(props) {
  const language = props.language
  return(
    <form action="post" className="contact-form">
      <fieldset className="form-container">
        <section>
          <label htmlFor="name">{language.contact[0]}</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            autoComplete="name" 
            autoFocus 
            required/>
        </section>
        <section>
          <label htmlFor="email">{language.contact[1]}</label>
          <input type="email"
            name="email"
            id="email"
            autoComplete="email"
            required/>
        </section>
        <section>
          <label htmlFor="subject">{language.contact[2]}</label>
          <input 
            type="text"
            name="subject"
            id="subject"/>
        </section>
        <section>
          <label htmlFor="content">{language.contact[3]}</label>
          <textarea 
            name="content"
            id="content" 
            cols="25" 
            rows="8" 
            required></textarea>
        </section>
        <section>
          <label htmlFor="file">{language.contact[4]}</label>
          <input 
            type="file"
            name="file"
            id="file"/>
        </section>
        <div className="file-display">
          <ul className="file-container"></ul>
        </div>
        <button 
          className="submit-btn"
          type="submit">{language.contact[5]}</button>
      </fieldset>
    </form>
  )
}

export default Form