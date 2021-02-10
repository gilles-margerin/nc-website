import AUTHORIZED_FILES from './AUTHORIZED_FILES'
import FormContainer from './FormContainer'

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
    
    if (userFiles.length + fileInput().files.length > 5) {
      fileInput().value='';
      fileChecks.list = false
      return alert(`${language.alerts[0]}`)
    }

    for (file of fileInput().files) {
      if (file.size > 1048576) {
        fileInput().value='';
        fileChecks.size = false
        return alert(`${file.name}${language.alerts[1]}`)
      }

      !AUTHORIZED_FILES.find(typeCheck => typeCheck === file.type) && function() {
        fileInput().value='';
        fileChecks.type = false
        return alert(`${language.alerts[0]}`);
      }()
    }
    
    if (!fileChecks.type  || !fileChecks.size || !fileChecks.list) return

    userFiles.push(...Array.from(fileInput().files))

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

  return (
    <FormContainer 
      language={language} 
      handleSubmit={handleSubmit}
      handleFiles={handleFiles}
    />
  )
}

export default Form