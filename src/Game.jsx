//Where we develop our parent component

import './Game.css';
import { useState, useEffect } from 'react';
import GameInfo from './components/GameInfo';
import Board from './components/Board';
import {
  filterBoard,
  traverseBoard,
  createEmptyArray,
  plantMines,
  getNeighborMines
} from './components/utilities';

const Game = () => {
  //set fixed state values, these could be made into options later
  const [height] = useState(8);
  const [width] = useState(8);
  const [mines] = useState(10);
  //set updateable state values
  const [gameData, setGameData] = useState([]);
  const [gameStatus, setGameStatus] = useState("Game in Progress");
  const [mineCount, setMineCount] = useState(mines);
  //key value is used to force the game board to reset
  const [key, setKey] = useState(false); 