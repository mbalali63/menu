
import modeSelectorLightIcon from './../assets/img1-light.png'
import modeSelectorDarkIcon from './../assets/img2-light.png'



export default function ModeSelector({mode,handleSetMode}) {
	const modeSelectorIcon = (mode === 'dark') ? modeSelectorLightIcon : modeSelectorDarkIcon
	return (
		<section id = 'mode-selector-box'>
			<div className = 'icon-container'>
				<img src={modeSelectorIcon} 
				     onClick = {() => handleSetMode()}
				/>
			</div>
		</section>
	)
}
