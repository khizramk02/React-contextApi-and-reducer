import React, { useState }  from 'react';
import './App.css';
import Parent from './parent';
import counterContext from './counterContext';


function App() {

  let countState = useState(1)
  return (
    <div>
      <counterContext.Provider value={countState}>
      <h2>using contextApi to access all components</h2>
      <Parent />

      </counterContext.Provider>
    </div>
  );
}

export default App;