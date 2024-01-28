import { useState } from 'react';
import './App.css';
import Body from './components/body/Body';
import Header from './components/header/Header';


function App() {
  const [sectionToDisplay, setSectionToDisplay] = useState<string>("Button1");
  return (
    <>
      <Header/>
      <Body/>
    </>
  )
}

export default App
