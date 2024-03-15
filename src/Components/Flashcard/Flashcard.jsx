import '../Flashcard/FlashCard.scss';
import { useState, useEffect, useRef } from 'react';
export default function Flashcard({ currentCard, setWordsCount }) {
	const showTranslationBtnRef = useRef(null);
	useEffect(() => {
		showTranslationBtnRef.current && showTranslationBtnRef.current.focus();
	}, [currentCard]);
	const [showTranslation, setShowTranslation] = useState(false);
	const [studied, setStudied] = useState(false);
	const showTranslationBtn = () => {
		if (!showTranslation && !studied) {
			setWordsCount((prevCount) => prevCount + 1);
			setStudied(true);
			setShowTranslation(true);
		} else {
			setShowTranslation(true);
		}
	};
	return (
		<div className="flash-card-container">
			<div className="flash-card-wrapper">
				{currentCard && (
					<>
						<h2 className="flash-card-word">{currentCard.english}</h2>
						<p className="flash-card-transcription">
							{currentCard.transcription}
						</p>
						{showTranslation && (
							<div>
								<p className="flash-card-russian">{currentCard.russian}</p>
							</div>
						)}
						{!showTranslation && (
							<div>
								<button
									ref={showTranslationBtnRef}
									className="flash-card-btn"
									onClick={showTranslationBtn}
								>
									Показать перевод
								</button>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
}
