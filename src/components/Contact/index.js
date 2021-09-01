import React, { useState } from 'react';
function ContactForm() {

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
  const [formState, setFormState] = useState({
    name: 'farnoush',
    email: 'farnoush@gmail.com',
    message: 'hello every one',
  });
  const { name, email, message } = formState;

  function handleChange(e) {
    console.log('value', e.target.value);
    console.log('name', e.target.name);
    console.log('e.target', e.target);
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  console.log(formState);
  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} name="name"  onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email}  onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message}  onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
