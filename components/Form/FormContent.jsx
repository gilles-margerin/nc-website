const FormContent = (props) => {
  return (
    <section>
      <label htmlFor="content">{props.language.contact[3]}</label>
      <textarea name="content" id="content" required></textarea>
    </section>
  );
};

export default FormContent