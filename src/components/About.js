import React, { useState } from 'react';

export default function About() {
  const lightMode = {
    color: 'black',
    backgroundColor: 'white'
  };

  const darkMode = {
    color: 'white',
    backgroundColor: 'black'
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className='container' style={isDarkMode ? darkMode : lightMode}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        {[1, 2, 3].map((itemIndex) => (
          <div className="accordion-item" key={itemIndex}>
            <h2 className="accordion-header" id={`heading${itemIndex}`}>
              <button className={`accordion-button${itemIndex === 1 ? ' show' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${itemIndex}`} aria-expanded={itemIndex === 1} aria-controls={`collapse${itemIndex}`}>
                Accordion Item #{itemIndex}
              </button>
            </h2>
            <div id={`collapse${itemIndex}`} className={`accordion-collapse collapse${itemIndex === 1 ? ' show' : ''}`} aria-labelledby={`heading${itemIndex}`} data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the {itemIndex === 1 ? 'first' : itemIndex === 2 ? 'second' : 'third'} item's accordion body.</strong> It is {itemIndex === 1 ? 'shown' : 'hidden'} by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        ))}
      </div>
      <button type="button" onClick={toggleMode} className="btn btn-primary">
        {isDarkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
      </button>
    </div>
  );
}
