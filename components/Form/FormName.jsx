const FormName = (props) => {
  return (
    <section>
      <label htmlFor="name">{props.language.contact[0]}</label>
      <input
        type="text"
        name="name"
        id="name"
        autoComplete="name"
        autoFocus
        required
      />
    </section>
  );
};

export default FormName