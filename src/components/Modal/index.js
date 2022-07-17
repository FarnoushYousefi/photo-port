import React from 'react';
function Modal({onClose,currentPhoto}) {
    const {name,category,description,index} =currentPhoto
  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">{name}</h3>
        <img src ={ require(`../../assets/large/${category}/${index}.jpg`)}alt="current category" />
        <p>{description}</p>
        <button type="button" onClick={onClose}>Close this modal</button>
      </div>
    </div>
  );
}

export default Modal;
//In the preceding statements, we've created a basic modal with a backdrop and container. The modal also contains a title, a description, the selected image, and a button to close the modal. The photo name and description are currently hardcoded but will eventually need to contain the property values of the photo selected. So how do we obtain this data?

//We'll answer that question in the next few steps. First, consider the context in which the modal will function: when a user navigates to the photo gallery and selects a photo, the modal should appear with that photo.

//The list of photos is rendered in the PhotoList component, so this is the logical place for the modal to open—and for us to access the individual photo data. We'll establish the Photolist as the parent component and the Modal as the child component, because the Modal is located in PhotoList. PhotoList also plays a major role in activating the modal, but we we'll discuss that more later.

//Let's invoke the Modal by adding it to the return statement in the PhotoList component. Doing so will render the current modal and allow us to view this component in the browser as we develop it.

//Open the PhotoList component and import the Modal component into this file with the following statement:
