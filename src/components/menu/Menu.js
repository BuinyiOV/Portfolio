
const Menu = () => {

	const onSelected = (e) => {
		const btns = document.querySelectorAll('.menu__item')
		const menu = document.querySelector('.menu')
		btns.forEach((btn) => {
			if(e.target.dataset.value !== btn.dataset.value){
				btn.classList.add("notselected")
			}
		})

		setTimeout(() => {
			hideEl(menu);
		}, 1000);
	}

	const hideEl = (el) => {
		el.style.display = "none"
	}

	return (
		<nav className="menu">
			<section className="menu__item about"
							tabIndex="1"
							data-value="about"
							onClick={onSelected}>about</section>
			<section className="menu__item projects"
							tabIndex="2"
							data-value="projects"
							onClick={onSelected}>projects</section>
			<section className="menu__item contact"
							tabIndex="3"
							data-value="contact"
							onClick={onSelected}>contact</section>
		</nav>
	)
}

export default Menu;