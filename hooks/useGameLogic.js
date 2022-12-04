import { useState, useEffect } from 'react';

const POINTS_FOR_TASK = 10;

export const useGameLogic = () => {
  const [currentGame, setCurrentGame] = useState(0);
  const [gameScore, setGameScore] = useState(0);


  return {currentGame, };
}