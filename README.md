# Basic React Modal Component

The `BasicModal` component is a very simple, reusable, modal component built with React.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)

## Installation

To install this package, you can use [npm](https://npmjs.org/):

    $ npm install basic-react-modal-component

## Usage

To use the `BasicModal` component in your React application, follow these steps:

1. Import the `BasicModal` component into your file:

```jsx
import { BasicModal } from "basic-react-modal-component";
```

2. Use the BasicModal component in your code, passing the necessary props:

```jsx
function App() {
  // State for controlling the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      {/* Other content */}
      <BasicModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        textContent="The text you want to display here"
      />
    </div>
  );
}
```

In the example above, the `isOpen` prop controls the visibility of the modal, the `closeModal` prop is a function to close the modal, and the `textContent` prop represents the content to be displayed within the modal.

3. You can customize the modal behavior and content via the `BasicModal.jsx` file, and customize the styles via the `BasicModal.css` file.

## Examples

Here is a very basic implementation of the modal, where we open it with a button:

```jsx
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <button className="open-btn" onClick={openModal}>
        Open the modal
      </button>
      <BasicModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        textContent="Employee Created!"
      />
    </div>
  );
}

export default App;
```

Here is another example where the modal is being opened by a form's submit button:"

```jsx
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    openModal();
  };

  return (
    <div className="App">
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value="Gwen"></input>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value="Herissant"
        ></input>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
      <BasicModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        textContent="Employee Created!"
      />
    </div>
  );
}

export default App;
```
