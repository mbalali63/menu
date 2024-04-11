import MenuItem from './MenuItem.js'
import {MB_L_L_,MB_R_L_} from './colors.js'
import {MB_L_D_,MB_R_D_} from './colors.js'

export default function MenuBar({mode,isVisible}) {
	const LColor = (mode === 'light') ? MB_L_L_ : MB_L_D_
	const RColor = (mode === 'light') ? MB_R_L_ : MB_R_D_
	return (
		<section id="menu-bar"
			 style = {{
				 	background: 'linear-gradient(to bottom,' + LColor+ ',' + RColor + ')',
					height: isVisible ? '100vh' : '0',
					paddingTop: isVisible ? '128px' : '0'
			 }}
		>
			<MenuItem label = {'Home'} mode={mode} />
			<MenuItem label = {'About Us'}  mode={mode} />
			<MenuItem label = {'Projects'} mode={mode} /> 
			<MenuItem label = {'Services'}  mode={mode} />		
			<MenuItem label = {'Blog'}  mode={mode} /> 
			<MenuItem label = {'Contact Us'}  mode={mode} /> 		
		</section>
	)
}
