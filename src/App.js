import {useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection.js'
import MenuBar from './components/MenuBar.js'

function App() {
	const [isVisible,setIsVisible] = useState(window.matchMedia("(min-width: 600px)").matches);
	const [isDesktop,setIsDesktop] = useState(window.matchMedia("(min-width: 600px)").matches);
	const [mode,setMode] = useState('light');

	const handleHamburgerOpen = () => {
		setIsVisible(! isVisible);
	}
	const handleSetMode = () => {
		setMode((mode === 'light' ? 'dark' : 'light'))
	
	}
	useEffect(() => {
		const mediaWatcher = window.matchMedia("(min-width:600px)");
		const mediaListener = () => {
			setIsDesktop(mediaWatcher.matches)
			setIsVisible(mediaWatcher.matches)
		}
		mediaWatcher.addEventListener('change',mediaListener)
		return function cleanup() {
			mediaWatcher.removeEventListener('change',mediaListener)
		}
	})
  return (
    <div className="App">
	  <HeroSection  hamburgerOpen = {handleHamburgerOpen} mode={mode} handleSetMode = {handleSetMode}/>
	  <MenuBar mode = {mode} isVisible = {isVisible} desktopMedia= {isDesktop} hamburgerOpen = {handleHamburgerOpen}/>
   </div>
  );
}

export default App;
