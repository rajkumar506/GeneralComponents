import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Rating } from './RatingComponent/Rating';
import { DatePicker } from './DatePicker/DatePicker';
import { TicTacToe } from './TicTacToe/TicTacToe';
import { MultiSelect } from './MultiSelectDropDown/MultiSelect';

function App() {
  return (
    <div className="App">
      <Rating/>
      <DatePicker/>
      <TicTacToe/>
      <MultiSelect/>
    </div>
  );
}

export default App;
