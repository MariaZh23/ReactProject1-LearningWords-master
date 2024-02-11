import '../Slider/Slider.scss'
import Flashcard from '../Flashcard/Flashcard';
import wordsData from "../words-data.json";
import React, { useState, useEffect } from "react";

export default function Slider () {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordsCount, setWordsCount] = useState(0);
  const [showThumbUp, setShowThumbUp] = useState(false);
  const [learnedWordsIndex, setLearnedWordsIndex] = useState([]);

  const totalCards = wordsData.length;
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
      <div className='slider-container'>
        <button className='prev-card' onClick={showPrevCard}>◄</button>
        <Flashcard key={currentIndex} currentCard={wordsData[currentIndex]} setWordsCount={setWordsCount}/>
        <button className='next-card'  onClick={showNextCard}>►</button>
      </div>
      <div className='wordsCounter'>
      {showThumbUp && <img src="/src/assets/thumb-up.svg" alt="Well done" className='thumbUp'/>}
        <p className='wordsCounterInfo'> Изучено слов: {wordsCount} из {todayWords}</p>
      </div>
    </div>
  )
}
