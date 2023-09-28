import { useSpring, animated} from '@react-spring/web'

const Animation = ({speed}) => {

	const LoopTrue = () => {

		let width = (+window.getComputedStyle(document.body).width.slice(0, -2))/2;
		let height = (+window.getComputedStyle(document.body).height.slice(0, -2))/2;
		let posX = getRandomIntInclusive(-width, width)
		let posY = getRandomIntInclusive(-height, height)
		let del = getRandomIntInclusive(100, 5000)

		const styles = useSpring({
			loop: true,
			from: { x: 0, y: 0 , opacity: 0},
			to: { x: posX, y: posY,  opacity: 1 },
			delay: del,
			config: {
				duration: speed,
			},
		})


		return (
			<animated.div className="star"
				style={{
					transform: 'translate(-50%, -50%)',
					width: '3px',
					height: '3px',
					...styles,
				}}
			/>
		)
	}
	
	const getRandomIntInclusive = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

return (
	<section className="presentation-animation">
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
		<LoopTrue></LoopTrue>
	</section>
)
}

export default Animation;