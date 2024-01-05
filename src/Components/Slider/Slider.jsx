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
  return (
    <div className='slider-container'>
      <button className='prev-card' onClick={showPrevCard}>◄</button>
      <Flashcard currentCard={wordsData[currentIndex]}/>
      <button className='next-card'  onClick={showNextCard}>►</button>
    </div>
  )
}
