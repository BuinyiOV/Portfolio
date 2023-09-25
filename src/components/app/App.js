import {useState, useEffect} from 'react';

import Menu from "../menu/Menu";
import Presentation from "../presentation/Presentation";
import Works from "../works/Works";


const App = () => {

	const [loaded, setLoaded] = useState();
	const [lang, setLang] = useState()

	useEffect(() => {
		setLoaded(true)
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		//console.log(loaded);
		// eslint-disable-next-line
	}, [loaded])

	const onSetLang = (e) => {
		setLang(e.target.dataset.lang)
	}

	return (
	<div className="wrapper dark">
		<Works lang={lang}/>
		{/* <Presentation/> */}
		<Menu onSetLang={onSetLang}/>
	</div>
	)
}

export default App;