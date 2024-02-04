import "../Flashcard/FlashCard.scss";
import { useState, useEffect } from "react";
export default function Flashcard({ currentCard, setWordsCount }) {
  const [showTranslation, setShowTranslation] = useState(false);
  useEffect(() => {
    setShowTranslation(false);
    }, [currentCard]
  );
  const showTranslationBtn = () => {
    setShowTranslation(true);
    setWordsCount((prevCount)=> prevCount + 1);
  };
  return (
    <div className="flash-card-container">
      <div className="flash-card-wrapper">
        <h2 className="flash-card-word">{currentCard.english}</h2>
        <p className="flash-card-transcription">{currentCard.transcription}</p>
        {showTranslation && (
          <div>
            <p className="flash-card-russian">{currentCard.russian}</p>
          </div>
        )}
        {!showTranslation && (
          <div>
            <button className="flash-card-btn" onClick={showTranslationBtn}>
              Показать перевод
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
