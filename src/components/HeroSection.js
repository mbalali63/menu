import Hamburger from './Hamburger.js';
import ModeSelector from './ModeSelector.js';
import MenuBar from './MenuBar.js';
import {HS_L_L_,HS_R_L_} from './colors.js';
import {HS_L_D_,HS_R_D_} from './colors.js';

export default function HeroSection({hamburgerOpen, mode, handleSetMode}) {	

	const L_Color = (mode === 'light') ? HS_L_L_ : HS_L_D_
	const R_Color = (mode === 'light') ? HS_R_L_ : HS_R_D_
	return (
		<section id = "hero-section"
			 style = {{background:  'linear-gradient(to right,' +  L_Color+ ',' + R_Color + ')'}}
		>
			<Hamburger handleHamburger = {hamburgerOpen} />
			<ModeSelector mode={mode} handleSetMode = {handleSetMode}/>
			<h1>Rayan Web Hub</h1>
		</section>
	)
}
