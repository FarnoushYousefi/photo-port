import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  //First, modify the following expression to deconstruct the contactSelected and setContactSelected functions from props, as shown at the top of the Nav function body:
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {' '}
            📸
          </span>{' '}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a
              data-testid="about"
              href="#about"
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li>
          
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name &&
                !contactSelected &&
                `navActive`
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
//In the class attribute, we'll add a JavaScript conditional statement. If the value of contactSelected is true, which means that the user selected Contact, we want to add the CSS class navActive, which will illuminate the background. We'll use the && operator as a short circuit, as shown in the following statement:

//<li className={`mx-2 ${contactSelected && 'navActive'}`}></li>

// line 48 Note also that the navActive class value is assigned only if Contact hasn't been selected and the current category HAS been selected.