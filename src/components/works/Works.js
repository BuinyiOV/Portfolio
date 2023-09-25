import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

import DataBase from "../../db/db";

const Works = ({lang}) => {

	const [content, setContent] = useState()
	const [contentList, setContentList] = useState()

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
	}, [lang])

	useEffect(() => {
		oneArticle(content)
		//console.log(content);
	}, [content])

//console.log(content[0].images[0]);

// const list = (content) => {
// 	if(content){

// 		let dataArr = []

// 		content.forEach((data, i)=>{

// 			let images = data.images;

// 			let imgArr = [];

// 			images.forEach((img, i) => {

// 				if (i === 0){

// 					let imgEl = [
// 						// <div className="carousel-item active">
// 						// 	<img src={img}
// 						// 	className="d-block w-100"
// 						// 	alt={img}
// 						// 	key={uuidv4 + i}/>
// 						// </div>

// 							<div className="carousel-item active" key={uuidv4 + i}>
// 								<img src={img} className="d-block w-100" alt={img}/>
// 							</div>
// 					]
// 					imgArr = [...imgArr, ...imgEl]
// 				} else {

// 					let imgEl = [
// 						<div className="carousel-item" key={uuidv4 + i}>
// 							<img src={img} className="d-block w-100" alt={img}/>
// 						</div>
// 					]
// 					imgArr = [...imgArr, ...imgEl]
// 				}
// 			})

// 			let listArr = [
// 						<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
// 							<div className="carousel-inner">
// 								{imgArr}
// 							</div>
// 						</div>
// 			]

// 			dataArr = [...dataArr, ...listArr]
// 		})

// 	setContentList(dataArr)}
// }

const oneArticle = (content) => {
	if(content){

		let imgArr = []

		content[0].images.forEach((img,i) => {
			if( i === 0 ){
				let oneImg = [
					<div className="carousel-item active" key={uuidv4 + i}>
						<img src={content[0].images[i]} className="d-block w-100" alt="..."/>
					</div>
				]

				imgArr = [...imgArr, ...oneImg]
			} else {
				let oneImg = [
					<div className="carousel-item" key={uuidv4 + i}>
						<img src={content[0].images[i]} className="d-block w-100" alt="..."/>
					</div>
				]

				imgArr = [...imgArr, ...oneImg]
			}
		})

		let article = [
			<div className="row align-items-center" key={uuidv4}>
				<div className="col-md-8">
				<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="true">
						<div className="carousel-inner">
							{imgArr}
						</div>
						<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				</div>

				<div className="col-md-4">
					<a href={content[0].address}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="bi bi-arrow-right-square" viewBox="0 0 16 16">
							<path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
						</svg>
					</a>
				</div>
				<div className="col-md-12">
					<p>{content[0].subtitle}</p>
				</div>
			</div>
		]
	setContentList(article)}
}





	return (
		<div className="works">
			<div className="container text-center">
				{contentList}
				{contentList}
			</div>
		</div>




		// <section className="works">
		// 	{contentList}
		// </section>
	)
}

export default Works;