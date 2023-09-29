import {useState, useEffect} from 'react';

import Preloader from '../preloader/Preloader';
import Menu from "../menu/Menu";
import ContentForming from '../contentForming/ContentForming';


const App = () => {

	const [loaded, setLoaded] = useState();
	const [lang, setLang] = useState()
	const [chapter, setChapter] = useState(null)

	useEffect(() => {
					setLoaded(true)
		// eslint-disable-next-line
	}, [])

	const onSetLang = (e) => {
		setLang(e.target.dataset.lang)
	}

	const onSetChapter = (data) => {
		setChapter(data)
	}

		const onMode = () => {
		const wrap = document.querySelector('.wrapper')
		const svgColor = document.querySelectorAll('svg')
		
		if(wrap.classList.contains("dark")){
			wrap.classList.remove("dark")
			wrap.classList.add("light")
			document.body.style.backgroundColor = 'white'

			svgColor.forEach((el) => {
				el.classList.remove("dark")
				el.classList.add("light")
			})

		} else if(wrap.classList.contains("light")){
			wrap.classList.remove("light")
			wrap.classList.add("dark")
			document.body.style.backgroundColor = 'black'

			svgColor.forEach((el) => {
				el.classList.remove("light")
				el.classList.add("dark")
			})
		}
	}

	return (
	<div className="wrapper dark">
		{loaded? <ContentForming
					loaded={loaded}
					chapter={chapter}
					lang={lang}/> : <Preloader/>}
		<Menu onSetLang={onSetLang}
				chapter={chapter}
				onSetChapter={onSetChapter}
				onMode={onMode}/>
	</div>
	)
}

export default App;