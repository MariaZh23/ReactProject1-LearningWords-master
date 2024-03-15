import './Slider.scss';
import Flashcard from '../../Components/Flashcard/Flashcard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWords, selectWords } from '../../wordsSlice';
import React, { useState, useEffect } from 'react';
export default function Slider() {
	const words = useSelector(selectWords);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchWords());
	}, [dispatch]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [wordsCount, setWordsCount] = useState(0);
	const [showThumbUp, setShowThumbUp] = useState(false);
	const totalCards = words.length;
	const todayWords = 10;
	const showNextCard = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
	};
	const showPrevCard = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
	};
	useEffect(() => {
		if (wordsCount > 0) {
			setShowThumbUp(true);
		}
	}, [wordsCount]);
	return (
		<div>
			<div className="slider-container">
				<button
					className="prev-card"
					onClick={showPrevCard}
				>
					◄
				</button>
				<Flashcard
					key={currentIndex}
					currentCard={words[currentIndex]}
					setWordsCount={setWordsCount}
				/>
				<button
					className="next-card"
					onClick={showNextCard}
				>
					►
				</button>
			</div>
			<div className="words-counter">
				{showThumbUp && (
					<img
						src="/src/assets/thumb-up.svg"
						alt="Well done"
						className="thumbUp"
					/>
				)}
				<p className="words-counter__info">
					{' '}
					Изучено слов: {wordsCount} из {todayWords}
				</p>
			</div>
		</div>
	);
}
