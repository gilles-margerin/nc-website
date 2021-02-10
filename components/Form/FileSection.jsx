const FileSection = (props) => {
  return (
    <>
      <section className="file-section">
        <label id="file-uploader" htmlFor="file">
          {props.language.contact[4]}
        </label>
        <input
          type="file"
          name="file"
          id="file"
          multiple
          onChange={props.handleFiles}
          accept=".txt,.rtf,.doc,.docx,.pdf,.odt,.odp"
        />
      </section>
      <div className="file-display">
        <ul className="file-list-container"></ul>
      </div>
    </>
  );
};

export default FileSection