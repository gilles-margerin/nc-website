const FormMail = (props) => {
  return (
    <section>
      <label htmlFor="email">{props.language.contact[1]}</label>
      <input
        type="email"
        name="email"
        id="email"
        autoComplete="email"
        required
      />
    </section>
  );
};
 export default FormMail