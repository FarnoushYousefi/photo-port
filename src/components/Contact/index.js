import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
function ContactForm() {
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  const [formState, setFormState] = useState({
    name: 'farnoush',
    email: 'farnoush@gmail.com',
    message: 'hello every one',
  });
  //This is a good case where we can destructure the formState object into its named properties, 
  const { name, email, message } = formState;

  function handleChange(e) {
    console.log('value', e.target.value);
    console.log('name', e.target.name);
    console.log('e.target', e.target);
    setFormState({ ...formState, [e.target.name]: e.target.value });
    //This conditional statement says if the <input> is email, then validate the value of that input field with the validateEmail function and assign its return to isValid. Let's log this value to verify that the logic is performing properly.
    if (e.target.name === 'email') {
      console.log(e.target.name)
      // isValid conditional statement
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required`);
        } else {
          setErrorMessage('');
        }
      }

      console.log(isValid);
      // isValid conditional statement
    }
    if (!errorMessage) {
      //In the preceding function, we're using the setFormState function to update the formState value for the name property. We assign the value taken from the input field in the UI with e.target.value and assign this value to the property formState.name. We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. Without the spread operator, the formState object would be overwritten to only contain the name: value key pair.
      //We could, but this wouldn't adhere to the DRY principle. It'd be better if we could make the property name a dynamic variable that's determined by the form element. 
      //Thankfully, we can with the following syntax:
      //The name property of target in the preceding expression actually refers to the name attribute of the form element. This attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property names.
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    console.log('errorMessage', errorMessage);
  }

  console.log(formState);
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            defaultValue={message}
            onChange={handleChange}
          />
         
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}// If errorMessage has a truthy value, the <div> block will render. If errorMessage doesn't have an error message, the following <div> block doesn't render. The && operator—known as the AND operator—is being used here as a short circuit. If the first value resolves to true, the second expression is evaluated. 

export default ContactForm;
