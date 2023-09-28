import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const Menu = ({onSetLang, chapter, onSetChapter, onMode}) => {

	const [menu, setMenu] = useState()
	const [personalization, setPersonalization] = useState()
	const [chapterFirstTime, setChapterFirstTime] = useState(null)

	useEffect(() => {
		setMenu(menuSide)
		setPersonalization(personalizationConfigSide)
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		chapterSelected()
			// eslint-disable-next-line
	}, [chapter])

	useEffect(() => {
		if(chapter) {
			setTimeout(() => {
				setMenu(menuTop);
				setPersonalization(personalizationConfigTop)
			}, 1000);
		}
			// eslint-disable-next-line
	}, [chapterFirstTime])

	const menuSide = () => {
		let menu = [
		<nav className="menu-side" key={uuidv4}>
			<section className="menu-side__item"
							tabIndex="1"
							data-value="about"
							onClick={onSelectedSide}>about</section>
			<section className="menu-side__item"
							tabIndex="2"
							data-value="projects"
							onClick={onSelectedSide}>projects</section>
			<section className="menu-side__item"
							tabIndex="3"
							data-value="contact"
							onClick={onSelectedSide}>contact</section>
		</nav>
		];
		return menu
	}

	const onSelectedSide = (e) => {
		const btnsMenu = document.querySelectorAll('.menu-side__item')
		btnsMenu.forEach((btn) => {
			if(e.target.dataset.value !== btn.dataset.value){
				btn.classList.add("notselected")
			}
		})

		const btnsPerso = document.querySelectorAll('.personalization-side__item')
		btnsPerso.forEach((btn) => {
			if(e.target.dataset.value !== btn.dataset.value){
				btn.classList.add("notselected-perso")
			}
		})

		const btnLang = document.querySelector('.language-side')
		btnLang.classList.add("notselected-lang")

		setChapterFirstTime(false)
		onSetChapter(e.target.dataset.value)
		
	}

	const menuTop = () => {

		const section = (chap) =>{
			let classMode = "menu-top__item"
			if (chap===chapter) {
				classMode += ` selected`
			}
			
			let elem = [
				<section key={uuidv4} className={classMode}
				tabIndex="1"
				data-value={chap}
				onClick={onSelectedTop}>{chap}</section>
				]
			return elem
		}

		let menu = [
			<nav className="menu-top" key={uuidv4}>
				{section('about')}
				{section('projects')}
				{section('contact')}
			</nav>
		]

		return menu
	}

	const onSelectedTop = (e) => {
			onSetChapter(e.target.dataset.value)
	}

	const chapterSelected = () => {
		const btns = document.querySelectorAll('.menu-top__item')
		btns.forEach((btn) => {
			if(chapter === btn.dataset.value){
				btn.classList.add("selected")
			} else if(chapter !== btn.dataset.value){
				btn.classList.remove("selected")
			}
		})

		const wrap = document.querySelector('.wrapper')
		const svgColor = document.querySelectorAll('.link-container__svg')

		if(wrap){
			wrap.firstChild.classList.remove("show")
			wrap.firstChild.classList.add("hide")
		}

		if(wrap.classList.contains("light")){
			svgColor.forEach((el) => {
				el.classList.remove("dark")
				el.classList.add("light")
			})

		}
	}

	const personalizationConfigSide = () => {
		let perso = [
		<nav className="personalization-side" key={uuidv4}>
			<section className="personalization-side__item mode-item-side"
							tabIndex="4"
							data-value="mode"
							onClick={onMode}
							>mode</section>
			<section className="personalization-side__item language-item-side"
							tabIndex="5"
							data-value="lang"
							>
									<div className="language-side">
										<div className="language-side__en"
												data-lang="en"
												onClick={onLang}>en
										</div>
										<div className="language-side__pl"
												data-lang="pl"
												onClick={onLang}>pl
										</div>
										<div className="language-side__ua"
												data-lang="ua"
												onClick={onLang}>ua
										</div>
									</div>
			</section>
		</nav>
		];
		return perso
	}

	const personalizationConfigTop = () => {
		let perso = [
		<nav className="personalization-top" key={uuidv4}>
			<section className="personalization-top__item mode-item-top"
							tabIndex="4"
							data-value="mode"
							onClick={onMode}
							>mode</section>
			<section className="personalization-top__item language-item-top"
							tabIndex="5"
							data-value="lang"
							>
									<div className="language-top">
										<div className="language-top__en"
												data-lang="en"
												onClick={onLang}>en
										</div>
										<div className="language-top__pl"
												data-lang="pl"
												onClick={onLang}>pl
										</div>
										<div className="language-top__ua"
												data-lang="ua"
												onClick={onLang}>ua
										</div>
									</div>
			</section>
		</nav>
		];
		return perso
	}

	const onLang = (e) => {
		onSetLang(e)
	}

	return (
		<>
			{menu}
			{personalization}
		</>
	)
}

export default Menu;