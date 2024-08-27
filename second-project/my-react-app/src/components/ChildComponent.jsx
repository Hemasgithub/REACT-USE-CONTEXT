// src/components/ChildComponent.jsx
import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const ChildComponent = () => {
  const { state, setState } = useContext(MyContext);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState('Context Updated!')}>Update Context</button>
    </div>
  );
};

export default ChildComponent;
