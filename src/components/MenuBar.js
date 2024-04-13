import { useEffect, useRef} from 'react'
import MenuItem from './MenuItem.js'
import ModeSelector from './ModeSelector.js'
import {MB_L_L_,MB_R_L_} from './colors.js'
import {MB_L_D_,MB_R_D_} from './colors.js'
import {HS_L_L_,HS_R_L_} from './colors.js'
import {HS_L_D_,HS_R_D_} from './colors.js'

export default function MenuBar({mode,isVisible,desktopMedia,hamburgerOpen}) {

	const LColor = (mode === 'light') ? MB_L_L_ : MB_L_D_
	const RColor = (mode === 'light') ? MB_R_L_ : MB_R_D_
	const LLColor = (mode === 'light') ? HS_L_L_ : HS_L_D_
	const RRColor = (mode === 'light') ? HS_R_L_ : HS_R_D_
	const menuBarRef = useRef()
	useEffect(() => {
		let handler = (e) => {
			if (e.target.id !== 'hamburger-img'){
				if ((!menuBarRef.current.contains(e.target)) && (isVisible)) {
					hamburgerOpen()
				}
			}
		}
		if (!desktopMedia) {
			document.addEventListener("mousedown",handler)
		}
	})
	let styleVal = ''
	let heightVal = 0;
	let paddingTopVal = 0;
	if (!desktopMedia) {
		styleVal = {
			background: 'linear-gradient(to bottom,' + LColor+ ',' + RColor + ')',
			height :  isVisible ? '100vh' : '0',
			paddingTop : isVisible ? '128px' : '0'
		}
	} else{
		styleVal = {
			background: 'linear-gradient(to right,' + LLColor+ ',' + RRColor + ')',
		}
	}

	return (
		<section id="menu-bar"
			 ref = {menuBarRef}
			 style = {styleVal}
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
