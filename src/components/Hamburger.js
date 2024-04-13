import hamburgerIcon from './../assets/img3-light.png'


export default function Hamburger({handleHamburger}) {
	return (
		<section id="hamburger-box">
			<div className="icon-container">
				<img src={hamburgerIcon}
			 	     id = "hamburger-img"
				     onClick = {() => {
					     handleHamburger()
				     }}
				/>
			</div>
		</section>
	)
}
