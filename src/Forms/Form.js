import React, { useState } from "react";

function Form() {
  const [values, setvalues] = useState({
    firstname: "",
    lastname: "",
  }); // [values] = variable for inputs   // [setvalues] = changes variable contents

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setvalues((values) => ({ ...values, [name]: value })); // (...) followed by variable is called spreading. (pretends as if you wrote each value)
    //[name] = for each input you put a name, and this lets it update specific inputs. value = whatever is input
  }

  function handleSubmit(e) {
    e.preventDefault(); //prevents page refreshing when submitting form
    console.log(values); // put whatever function needed to submit(usually api call) delete console log after it works!
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
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

        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}

export default Form;
