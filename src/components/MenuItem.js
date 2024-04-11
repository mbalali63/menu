import {useState} from 'react'
import {MIHgl_L_L_,MIHgl_R_L_} from './colors.js'
import {MIHgl_L_D_,MIHgl_R_D_} from './colors.js'

export default function MenuItem({label,mode}) {
	const [isSelected, setIsSelected] = useState(false);

	const handleSelect = () => {
		setIsSelected(true);
	}
	const handleDeSelect = () => {
		setIsSelected(false);
	}
	const LColor = (mode === 'light') ? MIHgl_L_L_ : MIHgl_L_D_
	const RColor = (mode === 'light') ? MIHgl_R_L_ : MIHgl_R_D_
	return (
		<section className = "menu-item"
			 style = {{
				 background: isSelected ? 'linear-gradient(to right,' + LColor+ ',' + RColor+ ')' : 'transparent'
			 }}
			 onClick = {() => handleSelect()}
			 onMouseEnter = {() => handleSelect()}
			 onMouseLeave = {() => handleDeSelect()}
		>
			<p>{label}</p>
		</section>
	)
}
