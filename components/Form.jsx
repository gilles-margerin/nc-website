function Form(props) {
  const language = props.language

  const handleFiles = () => {
    const fileInput = document.querySelector('#file');
    const fileList = document.querySelector('.file-list-container');
    const authorizedFiles = [
      "text/plain",
      "application/rtf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/pdf",
      "application/vnd.oasis.opendocument.text",
      "application/vnd.oasis.opendocument.presentation"
    ]
    
    if (fileInput.files.length > 5) {
      fileInput.value = '';
      return alert('Too many files')
    };

    for (file of fileInput.files) {
      !authorizedFiles.find(elem => elem === file.type) && function() {
        fileInput.value='';
        return alert('Wrong file type');
      }()
    }
    
    for (file of fileInput.files) {
      const div = document.createElement('div')
      const description = document.createElement('p')
      const element = document.createElement("li");
      const elementButton = document.createElement("button");

      div.classList.add('ul-file-wrapper')
      description.textContent = file.name
      element.id = `file-${Date.now()}`
      elementButton.classList.add('remove-btn')
      elementButton.id = `btn-${element.id}`

      fileList.append(div)
      div.append(description, element, elementButton)
    };
  }

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
             
            required></textarea>
        </section>
        <section className="file-section">
          <label id="test" htmlFor="file">{language.contact[4]}</label>
          <input 
            type="file"
            name="file"
            id="file"
            multiple
            onChange={handleFiles}
            accept=".txt,.rtf,.doc,.docx,.pdf,.odt,.odp"/> 
        </section>
        <div className="file-display">
            <ul className='file-list-container'></ul>
        </div> 
        <button 
          className="submit-btn"
          type="submit">{language.contact[5]}</button>
      </fieldset>
    </form>
  )
}

export default Form