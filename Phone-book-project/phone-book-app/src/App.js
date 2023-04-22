
// import AllRouter from './AllRoutes/AllRoutes';
import './App.css';
import AllRouter from "./AllRoutes/AllRoutes"
import React from 'react';
import { Button } from '@chakra-ui/react'
import { useColorMode ,useColorModeValue} from '@chakra-ui/react';
  import {BsFillMoonFill,BsFillSunFill} from "react-icons/bs"
function App() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className="App">
     <AllRouter />
    </div>
  );
}

export default App;
