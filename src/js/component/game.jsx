import React, { useState, useEffect } from "react";
const cardsData = [
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

export const Game = () => {
    const [selected, setSelected] = useState([]);
    const shuffle = () => cardsData.sort(() => Math.random() - 0.5);
    const [cards, setCards] = useState([])





    useEffect(() => {
        setCards(prev => prev = shuffle())
    }, [])

    useEffect(() => {
        if (selected.length == 2) {
            if (selected[0].content === selected[1].content) {
                selected[0].matched = true;
                selected[1].matched = true;
            }
            setTimeout(() => {
                let aux = 0
                cards.forEach(el => {
                    el.matched ? aux++ : ''
                    aux == cards.length && alert('completed!')
                });
            }, 0)
            setTimeout(() => {
                setSelected(prev => prev = [])
            }, 800)
        }

    }, [selected])


    const handleCardClick = card => {
        if (selected.length < 2 && !selected.includes(card) && !card.matched) {
            setSelected(prev => prev = [...selected, card]);
        }

    }
    return (
        <div className="memory-game row">
            {cards.map(card => <div
                key={card.id}
                className={`col-4  card ${selected.includes(card) || card.matched ? 'visible flip-in-hor-bottom' : 'wobble-hor-bottom'}`}
                onClick={() => handleCardClick(card)}
            >
                {selected.includes(card) || card.matched ? card.content : '❓'}
            </div>)}
        </div>
    )

}