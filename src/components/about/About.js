import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';


import DataBase from "../../db/db";

const About = ({lang}) => {

	const [text, setText] = useState()
	const [links, setLinks] = useState()
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
			formText();
			formLink()
		}
		// eslint-disable-next-line
	}, [content])

	const formText = () => {

			let textArr = []
			
			let data = content.text;
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
	const formLink = () => {

			let linksArr = []
			
			let data = content.download;
				data.forEach((a, i) => {
					
						let oneA = [
									<a href={a.path} download key={uuidv4 + i}>
										<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className="bi bi-arrow-down-square dark" viewBox="0 0 16 16">
											<path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
										</svg>
										{a.title}
									</a>
						]
						linksArr = [...linksArr, ...oneA]

				})
			setLinks(linksArr)
	}


	return (
		<section className="about show">
			{text}
			<section className='download'>
			{links}
			</section>
			
		</section>
	)
}

export default About;