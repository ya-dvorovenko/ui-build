import React from 'react';
import img from '../assets/images/shiba.jpg';

const App = () => {
  return (
    <div>
      <h2 id="heading">Hello Shiba</h2>
      <img
        className="image"
        style={{ margin: '0.5em' }}
        src={img}
        alt="Shiba"
      />
    </div>
  );
};

export default App;
