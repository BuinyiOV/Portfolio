import {useState} from 'react';

import Animation from '../animation/Animation';

const Presentation = () => {

	const [speed, setSpeed] = useState(5000)

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
					Oleksii Buinyi</article>
			<article className="presentation__position"
				onMouseOver={onOverNameOrPos}
				onMouseLeave={onOverWrap}>
					frontend developer</article>
			<Animation speed={speed}/>
		</section>
	)
}

export default Presentation;