const FormSubject = (props) => {
  return (
    <section>
      <label htmlFor="subject">{props.language.contact[2]}</label>
      <input type="text" name="subject" id="subject" />
    </section>
  );
};

export default FormSubject