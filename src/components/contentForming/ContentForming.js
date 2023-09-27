import {useState, useEffect} from 'react';

import Preloader from "../preloader/Preloader";
import Presentation from "../presentation/Presentation";
import Works from "../works/Works";
import About from '../about/About';
import Contact from '../contact/Contact';


const ContentForming = ({loaded, chapter, lang}) => {

	const [Component, setComponent] = useState()


	useEffect(() => {

		switch (chapter){
				case 'about':
					setComponent(<About lang={lang}/>);
					break;
				case 'projects':
					setComponent(<Works lang={lang}/>);
					break;
				case 'contact':
					setComponent(<Contact lang={lang}/>);
					break;
				default:
					setComponent(<Presentation lang={lang}/>);
			}
		
			// eslint-disable-next-line
	}, [lang])

	useEffect(() => {

		setTimeout(() => {
			switch (chapter){
				case 'about':
					setComponent(<About lang={lang}/>);
					break;
				case 'projects':
					setComponent(<Works lang={lang}/>);
					break;
				case 'contact':
					setComponent(<Contact lang={lang}/>);
					break;
				default:
					setComponent(<Presentation lang={lang}/>);
			}
		}, "1000");
		
			// eslint-disable-next-line
	}, [loaded, chapter])

	return (
		loaded? Component:<Preloader/>
	)
}

export default ContentForming;