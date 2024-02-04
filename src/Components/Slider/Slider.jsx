import '../Slider/Slider.scss'
import Flashcard from '../Flashcard/Flashcard';
import wordsData from "../words-data.json";
import React, { useState } from "react";

export default function Slider () {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = wordsData.length;
  const showNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };
    const showPrevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };
  const [wordsCount, setWordsCount] = useState(0);
  return (
    <div>
      <div className='slider-container'>
        <button className='prev-card' onClick={showPrevCard}>◄</button>
        <Flashcard key={currentIndex} currentCard={wordsData[currentIndex]} setWordsCount={setWordsCount}/>
        <button className='next-card'  onClick={showNextCard}>►</button>
      </div>
      <div className='wordsCounter'>
        <img src="/src/assets/thumb-up.svg" alt="Well done" className='thumbUp'/>
        <p className='wordsCounterInfo'>Изучено слов: {wordsCount}</p>
      </div>
    </div>
  )
}
