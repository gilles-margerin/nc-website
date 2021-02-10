import FileSection from "./FileSection";
import FormContent from "./FormContent";
import FormMail from "./FormMail";
import FormName from "./FormName";
import FormSubject from "./FormSubject";

const FormContainer = (props) => {
  return (
    <form
      action=""
      id="contact-data"
      className="contact-form"
      method="post"
      encType="multipart/form-data"
      onSubmit={props.handleSubmit}
    >
      <fieldset className="form-container">
        <FormName language={props.language}/>
        <FormMail language={props.language}/>
        <FormSubject language={props.language}/>
        <FormContent language={props.language}/>
        <FileSection language={props.language} handleFiles={props.handleFiles}/>
        <button className="submit-btn" type="submit">
          {props.language.contact[5]}
        </button>
      </fieldset>
    </form>
  );
};

export default FormContainer