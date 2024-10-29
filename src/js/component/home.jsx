import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
	const cardData = [
		{ id: 1, content: '🐶', matched: false },
		{ id: 2, content: '🐶', matched: false },
		{ id: 3, content: '🐱', matched: false },
		{ id: 4, content: '🐱', matched: false },
		{ id: 5, content: '🐰', matched: false },
		{ id: 6, content: '🐰', matched: false },
		{ id: 7, content: '🐸', matched: false },
		{ id: 8, content: '🐸', matched: false },
		{ id: 9, content: '🐧', matched: false },
		{ id: 10, content: '🐧', matched: false },
		{ id: 11, content: '🐽', matched: false },
		{ id: 12, content: '🐽', matched: false },
	];

	const [selected, setSelected] = useState([])
	const [cards, setCards] = useState()
	const shuffle = () => cardData.sort(() => Math.random() - 0.5);

	useEffect(() => {
		setCards(prev => prev = shuffle())
	}, [])

	useEffect(() => {
		if (selected.length === 2) {
			if (selected[0].content === selected[1].content) {
				selected[0].matched = true;
				selected[1].matched = true;
			}
			setTimeout(() => {
				let aux = 0;
				cards.forEach(element => {
					element.matched ? aux++ : '';
					aux === cards.length && alert('GANASTE!!!!');
				});
			}, 0)
			setTimeout(() => {
				setSelected(prev => prev = []);
			}, 800)
		}
	}, [selected])

	const handleClick = (card) => {
		if (selected.length < 2 && !selected.includes(card)) {
			setSelected(prev => prev = [...prev, card]);
		}
	}

	const handlePlayAgain = () => {
		setCards(prev => prev = shuffle());
		setSelected(prev => prev = []);
	}

	return (
		<div className="memory-game row">
			{cards && cards.map(card =>
				<div
					key={card.id}
					className={`col-4 card ${selected.includes(card) || card.matched ? 'visible flip-in-hor-bottom' : 'wobble-hor-bottom'}`}
					onClick={() => handleClick(card)}
				>
					{selected.includes(card) || card.matched ? card.content : "❓"}
				</div>)}
			<button onClick={handlePlayAgain}>
				Play again
			</button>
		</div>
	);
};

export default Home;
