import React from 'react';
import Navbar from './components/NavBar/Navbar'; 
import Box from './components/Box/Box'; 

import { StateProvider } from './context/index'; 

function App() {
  const initialState = [];
  
  const reducer = (state, action) => { 
    switch (action.type) {
      case 'addQuestion':
        return [
          ...state,
          action.newQ
        ];
        
      default:
        return state;
    }
  };
  return (
  <StateProvider initialState={initialState} reducer={reducer}>
    <Navbar /> 
    <Box /> 
  </StateProvider>
 
  );
}

export default App;