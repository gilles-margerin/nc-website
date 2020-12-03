function Form(props) {
  const language = props.language
  const fileInput = () => document.querySelector('#file') 
  const fileList = () => document.querySelector('.file-list-container')
  const userFiles = []

  const handleFiles = () => {
    const fileChecks = {
      type: true,
      size: true,
      list: true
    }

    const authorizedFiles = [
      "text/plain",
      "application/rtf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/pdf",
      "application/vnd.oasis.opendocument.text",
      "application/vnd.oasis.opendocument.presentation"
    ]

    if (userFiles.length + fileInput().files.length > 5) {
      fileInput().value='';
      fileChecks.list = false
      return alert('Too many files, please upload a maximum of 5 files.')
    }

    for (file of fileInput().files) {
      if (file.size > 1048576) {
        fileInput().value='';
        fileChecks.size = false
        return alert(`File ${file.name} is too big, file size must be below 10Mb.`)
      }

      !authorizedFiles.find(typeCheck => typeCheck === file.type) && function() {
        fileInput().value='';
        fileChecks.type = false
        return alert('Wrong file type, please upload one of the following file type: .txt, .rtf, .doc, .docx, .pdf, .odt,.odp');
      }()
    }
    
    if (!fileChecks.type  || !fileChecks.size || !fileChecks.list) return

    for (let i = 0, j = fileInput().files.length; i < j; i++) {
      const file = fileInput().files[i]
      const div = document.createElement('div')
      const description = document.createElement('p')
      const singleFile = document.createElement("li");
      const elementButton = document.createElement("button");

      div.classList.add('ul-file-wrapper')
      description.textContent = file.name
      singleFile.id = `file-${i}`
      elementButton.classList.add('remove-btn')
      elementButton.id = `btn-${i}`
      elementButton.type = "button"
      elementButton.addEventListener('click', (e) => {
        const target = e.target.id
        const parentTarget = e.target.closest('div')
        userFiles.splice(target, 1)
        parentTarget.remove()
      })

      fileList().append(div)
      div.append(description, singleFile, elementButton)
    };
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    const initialForm = document.querySelector('#contact-data')

    for (let i = 1; i < 5; i++) {
      formData.append(`${initialForm.elements[i].name}`, `${initialForm.elements[i].value}`)
    }
    
    for (let i = 0; i < userFiles.length; i++) {
      formData.append(`file-${i}`, userFiles[i])
    }
    
    await fetch('http://localhost:3000/contact', {
      method: 'POST',
      body: formData
    })

    initialForm.reset()
    fileList().innerHTML = ''
    userFiles.length = 0
  }

  return(
    <form 
      action=""
      id="contact-data" 
      className="contact-form"
      method="post"
      encType="multipart/form-data"
      onSubmit={handleSubmit}>
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