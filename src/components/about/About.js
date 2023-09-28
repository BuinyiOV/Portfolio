import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';


import DataBase from "../../db/db";

const About = ({lang}) => {

	const [text, setText] = useState()
	const [content, setContent] = useState()

	const { aboutEN, aboutPL, aboutUA } = DataBase()

	useEffect(() => {

		switch (lang){
				case 'en':
					setContent(aboutEN);
					break;
				case 'pl':
					setContent(aboutPL);
					break;
				case 'ua':
					setContent(aboutUA);
					break;
				default:
					setContent(aboutEN);
			}
			// eslint-disable-next-line
	}, [lang])

	useEffect(() => {
		if(content){
			formText()
		}
					// eslint-disable-next-line
	}, [content])

	const formText = () => {

			let textArr = []
			
			let data = content;
				data.forEach((p, i) => {
					
						let oneP = [
							<article className="about__name" key={uuidv4 + i}>
								{p}
							</article>
						]
						textArr = [...textArr, ...oneP]

				})
			setText(textArr)
	}


	return (
		<section className="about show">
			{text}
		</section>
	)
}

export default About;