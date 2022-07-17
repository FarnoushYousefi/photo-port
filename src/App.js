import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  //In the preceding expression, we set the initial value of contactSelected to false. This is to prevent the contact form from showing when a user initially navigates to the homepage.
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: 'commercial',
      description:
        'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    {
      name: 'landscape',
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature',
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}
//A single-page application, or SPA, is a web application or website that interacts with the web browser by dynamically rewriting the current webpage, in place of the default method of the browser loading entirely new pages. This approach allows for a more fluid UI because the page doesn't have to be reloaded each time.React allows for conditional rendering and can replace a portion of the webpage based on the user's selection.
//Notice the <> and </> that wrap the Gallery and About components. Can you imagine what these are and what they might be for? They are called React fragments—a shorthand abbreviation for <React.Fragment></React.Fragment>.
//They're a useful tool in React to allow multiple elements to be grouped together. Although in JSX you can only return a single parent element, this rule can be satisfied by wrapping the children components in a React fragment.
export default App;
