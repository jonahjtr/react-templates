import React, { useState } from "react";

function Form() {
  const [values, setvalues] = useState({
    firstname: "",
    lastname: "",
    radioOption: "",
  }); // [values] = variable for inputs   // [setvalues] = changes variable contents

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setvalues((values) => ({ ...values, [name]: value })); // (...) followed by variable is called spreading. (pretends as if you wrote each value)
    //[name] = for each input you put a name, and this lets it update specific inputs. value = whatever is input
    console.log(values);
  }

  function handleSubmit(e) {
    e.preventDefault(); //prevents page refreshing when submitting form
    console.log({ values }); // put whatever function needed to submit(usually api call) delete console log after it works!
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/*----------------------- start of text inputs-------------------------------------*/}

        <div className="form-textinputs">
          <label> First Name: </label>
          <input
            type="text"
            name="firstname"
            value={values.firstname}
            onChange={handleChange}
          ></input>
          <label> Last Name: </label>
          <input
            type="text"
            name="lastname"
            onChange={handleChange}
            value={values.lastname}
          ></input>
        </div>
        {/*----------------------- end of text inputs------------------------------------*/}

        {/*----------------------- start of radio inputs---------------------------------*/}
        <div className="form-radioinput">
          <h1>Do you understand forms? {values.radioOption} </h1>
          <input
            type="radio"
            name="radioOption"
            value="yes"
            checked={values.radioOption === "yes"}
            onChange={handleChange}
          ></input>
          <label>yes</label>
          <input
            type="radio"
            name="radioOption"
            value="no"
            checked={values.radioOption === "no"}
            onChange={handleChange}
          ></input>
          <label>no</label>
        </div>
        {/*----------------------- end of radio inputs-------------------------------------*/}
        {/*----------------------- start of checkbox inputs--------------------------------*/}
        {/*----------------------- end of checkbox inputs----------------------------------*/}

        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}

export default Form;
