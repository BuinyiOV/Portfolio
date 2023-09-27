import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

import DataBase from "../../db/db";

const Works = ({lang}) => {

	const [content, setContent] = useState()
	const [contentList, setContentList] = useState([])

	const { ua, en, pl } = DataBase()

	useEffect(() => {
		switch (lang){
			case 'en':
				setContent(en);
				break;
			case 'ua':
				setContent(ua);
				break;
			case 'pl':
				setContent(pl);
				break;
			default:
				setContent(en);
		}
			// eslint-disable-next-line
	}, [lang])

	useEffect(() => {
		if(content){
			content.forEach((data) => {oneArticle(data)})
			setContentList(articlesArr)
		}
		
		//console.log(content);
			// eslint-disable-next-line
	}, [content])

	let articlesArr = []


const oneArticle = (content) => {
	if(content){

		let imgArr = []
		
		const onSetImg = (data) => {

			data.images.forEach((img,i) => {
				if( i === 0 ){
					let oneImg = [
						<div className="carousel-item active" key={uuidv4 + i}>
							<img src={img} className="d-block w-100" alt="..."/>
						</div>
					]

					imgArr = [...imgArr, ...oneImg]
				} else {
					let oneImg = [
						<div className="carousel-item" key={uuidv4 + i}>
							<img src={img} className="d-block w-100" alt="..."/>
						</div>
					]

					imgArr = [...imgArr, ...oneImg]
				}
			})
		}

		onSetImg(content)

		let techArr = []

		const onSetTech = (data) => {

			data.tech.forEach((tech, i) => {
				let oneTech = [
					<div className="tech-item" key={uuidv4 + i}>
						<p>{tech}</p>
					</div>
				]
				techArr = [...techArr, ...oneTech]
		})

		}

		onSetTech(content)

		let article = [
			<div className="container text-center article-item" key={uuidv4 + content.id}>
				<div className="row mb-4">
					<div className="col-md-8 px-0">
						<div id={`carousel${content.id}`} className="carousel slide" data-bs-ride="true">
							<div className="carousel-inner">
								{imgArr}
							</div>
							<button className="carousel-control-prev" type="button" data-bs-target={`#carousel${content.id}`} data-bs-slide="prev">
								<span className="carousel-control-prev-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Previous</span>
							</button>
							<button className="carousel-control-next" type="button" data-bs-target={`#carousel${content.id}`} data-bs-slide="next">
								<span className="carousel-control-next-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
					</div>

					<div className="col-md-4 px-0">
						<div className="link-container">
							<a href={content.address} className='link-container__address'>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-arrow-right-square link-container__svg dark" viewBox="0 0 16 16">
									<path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8 text-uppercase">
						<p>{content.title}</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8 mb-5">{content.subtitle}</div>
					<div className="col-md-4 mb-5">{content.date}</div>
				</div>
				<div className="row lh-base">
					<div className="col-md-8 mb-5">{content.descr}</div>
					<div className="col-md-4 mb-5">
						<div className="tech-content d-flex justify-content-center">
							{techArr}
						</div>
					</div>
				</div>

			</div>
		]

		articlesArr = [...articlesArr, ...article]
	}
}





	return (
		<section className="works show">
			{contentList}
		</section>
	)
}

export default Works;