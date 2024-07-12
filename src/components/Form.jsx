import "../scss/Form.scss";
/*import { useForm } from "react-hook-form"*/



function Form({contactsHandler}) {

  return (
    <>
      <section className="hookform">
        <form onSubmit={contactsHandler}>
          <input
            className="input-field"
            type="text"
            placeholder=" First name "
          />
          <input
            className="input-field"
            type="text"
            placeholder=" Last name "
          />
          <input className="input-field" type="mail" placeholder=" Email " />
          <label className="checkbox-label" htmlFor="checkbox">
            Enable like favorite
          </label>
          <input name="CheckBox" className="checkbox-input" type="checkbox" />
          <button className="save-button">SAVE</button>
        </form>
      </section>
    </>
  );
}

export default Form;
