import '../Slider/Slider.scss'
import Flashcard from '../Flashcard/Flashcard';

import { Context } from '../../Context/Context';
import React, { useState, useEffect, useContext } from "react";

export default function Slider () {
  const {setDataServer, dataServer} = useContext(Context);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordsCount, setWordsCount] = useState(0);
  const [showThumbUp, setShowThumbUp] = useState(false);
  const [learnedWordsIndex, setLearnedWordsIndex] = useState([]);
  const totalCards = dataServer.length;
  const todayWords = 10;
  const [showCongratulations, setShowCongratulations] = useState(false);

  const showNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const showPrevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  const handleAnswer = (startOver) => {
    if (startOver) {
      setWordsCount(0);
      setShowCongratulations(false);
      setShowThumbUp(false);
    } else {
      setShowCongratulations(false);
    }
  };

  useEffect(() => {
    if (wordsCount > 0) {
        setShowThumbUp(true);
    }
    if (wordsCount == todayWords) {
      setShowCongratulations(true);
    }
  }, [wordsCount]);

  return (
    <div>
      <div className='slider-container'>
        <button className='prev-card' onClick={showPrevCard}>◄</button>
        <Flashcard key={currentIndex} currentCard={dataServer[currentIndex]} setWordsCount={setWordsCount}/>
        <button className='next-card'  onClick={showNextCard}>►</button>
      </div>
      {showCongratulations && (
        <div className='congratulations-popup'>
          <p>Поздравляем! Вы изучили 10 слов! Хотите продолжить?</p>
          <button onClick={() => handleAnswer(false)}>Да</button>
          <button onClick={() => handleAnswer(true)}>Начать заново</button>
        </div>
      )}
      <div className='words-counter'>
        {showThumbUp && <img src="/src/assets/thumb-up.svg" alt="Well done" className='thumbUp'/>}
        <p className='words-counter__info'> Изучено слов: {wordsCount} из {todayWords}</p>
      </div>
    </div>
  );
}
