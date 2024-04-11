import {useState,useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection.js'
import MenuBar from './components/MenuBar.js'

function App() {
	const [isVisible,setIsVisible] = useState(false);
	const [mode,setMode] = useState('light');

	const handleHamburgerOpen = () => {
		setIsVisible(! isVisible);
	}
	const handleSetMode = () => {
		setMode((mode === 'light' ? 'dark' : 'light'))
	}

  return (
    <div className="App">
	  <HeroSection  hamburgerOpen = {handleHamburgerOpen} mode={mode} handleSetMode = {handleSetMode}/>
	  <MenuBar mode = {mode} isVisible = {isVisible} />
   </div>
  );
}

export default App;
