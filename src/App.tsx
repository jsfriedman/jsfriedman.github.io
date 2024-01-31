import { useEffect, useState } from 'react';
import './App.css';
import Body from './components/body/Body';
import Header from './components/header/Header';


function App() {
  const [activeSection, setActiveSection] = useState<string>("Home");

  const handleHeaderButtonClick = (section: string) => {
    setActiveSection(section);
  }

  return (
    <>
      <Header buttonOnClickFn={handleHeaderButtonClick} activeSection={activeSection}/>
      <Body activeSection={activeSection}/>
    </>
  )
}

export default App
