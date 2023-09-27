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

	return (
	<div className="wrapper dark">
		{loaded? <ContentForming
					loaded={loaded}
					chapter={chapter}
					lang={lang}/> : <Preloader/>}
		{/* <Works lang={lang}/> */}
		{/* <Presentation/> */}
		<Menu onSetLang={onSetLang}
				chapter={chapter}
				onSetChapter={onSetChapter}/>
	</div>
	)
}

export default App;