import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Rating } from "./RatingComponent/Rating";
import { DatePicker } from "./DatePicker/DatePicker";
import { TicTacToe } from "./TicTacToe/TicTacToe";
import { MultiSelect } from "./MultiSelectDropDown/MultiSelect";
import { Carousal } from "./ImageCarousal/ImageCarousal";
import { TicGame } from "./TicTocToe/TicGame";
import { DragAndDrop } from "./DragDrop/Drag";
import { Whatsapp } from "./Whatsapp/Whatsapp";
import { Routers } from "./Routes/Routes";
import { MainLayout } from "./Routes/MainLayout";
import { CustomHook } from "./customHook/form";
import { PollWidget } from "./PollWidget/PollWidget";
import MouseHover from "./HigherOrder/MouseCounter";
import ButtonClickedCounter from "./HigherOrder/ButtonClickedCounter";
function App() {
  return (
    <div className="App">
      {/* <PollWidget /> */}
      <MouseHover />
      <ButtonClickedCounter />
      {/* <CustomHook /> */}
      {/* <Routers /> */}
      {/* <Whatsapp /> */}
      {/* <TicGame /> */}
      {/* <Carousal /> */}
      {/* <Rating/>
      <DatePicker/>
      <TicTacToe/>
      <MultiSelect/> */}
      {/* <DragAndDrop /> */}
    </div>
  );
}

export default App;
