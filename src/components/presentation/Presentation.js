import {useState, useEffect} from 'react';

import Animation from '../animation/Animation';

const Presentation = ({lang}) => {

	const [speed, setSpeed] = useState(5000)
	const [text, setText] = useState('Oleksii Buinyi')


	useEffect(() => {

		switch (lang){
				case 'en':
					setText('Oleksii Buinyi');
					break;
				case 'pl':
					setText('Oleksii Buinyi');
					break;
				case 'ua':
					setText('Олексій Буйний');
					break;
				default:
					setText('Oleksii Buinyi');
			}
		
			// eslint-disable-next-line
	}, [lang])

	const onOverNameOrPos = () => {
		setSpeed(800)
	}

	const onOverWrap = () => {
		setSpeed(5000)
	}

	return (
		<section className="presentation show" 
			>
			<article className="presentation__name"
				onMouseOver={onOverNameOrPos}
				onMouseLeave={onOverWrap}>
					{text}</article>
			<article className="presentation__position"
				onMouseOver={onOverNameOrPos}
				onMouseLeave={onOverWrap}>
					frontend developer</article>
			<Animation speed={speed}/>
		</section>
	)
}

export default Presentation;