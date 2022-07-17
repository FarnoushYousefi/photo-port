import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = (props) => {
  const [currentPhoto, setCurrentPhoto] = useState();
  //In this expression, we set the initial state of isModalOpen to false, because we don't want the modal to open until a user has clicked on an image.
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { category } = props;
  const [photos] = useState([
    {
      name: 'Grocery aisle',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Grocery booth',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Restaurant table',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cafe interior',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cat green eyes',
      category: 'portraits',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Green parrot',
      category: 'portraits',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Yellow macaw',
      category: 'portraits',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pug smile',
      category: 'portraits',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pancakes',
      category: 'food',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Burrito',
      category: 'food',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Scallop pasta',
      category: 'food',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Burger',
      category: 'food',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fruit bowl',
      category: 'food',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Green river',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Docks',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Panoramic village by sea',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Domestic landscape',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Park bench',
      category: 'landscape',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);
 //We need to make it so that only photos with the selected category appear.
 //All we needed to add was a filterMethod and our photos are now displayed properly! 
  const currentPhotos = photos.filter((photo) => photo.category === category);
  //The image object represents the element in the photos array, and the i will render the image as we did previously in the src attribute with the require function. 
  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    //Here we updated the current photo state using the setCurrentPhoto function with the data retrieved through the click event. Notice how we used the spread operator here to add the index: i key value pair to the current photo state. Because currentPhoto now contains the two critical data points needed for the modal, we can pass in currentPhoto as a prop to the Modal, as shown in the following code:
    //The preceding statement will only render the Modal if the value isModalOpen is true, which is precisely what we want. In the next step, we want to open the modal when a user has clicked on an image. We'll do that by modifying the click handler, toggleModal, so that it updates the isModalOpen value to true. This will evaluate the short circuit in the preceding code statement to render the modal.
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
     {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal}/>}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
//In React, we'll use the onClick attribute and assign a click handler function to capture the individual photo data. Let's call the click handler toggleModal, as shown in the following statement:
//The image object represents the element in the photos array, and the i will render the image as we did previously in the src attribute with the require function. 
