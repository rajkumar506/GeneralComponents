import logo from './logo.svg';
import './App.css';
import { Rating } from './RatingComponent/Rating.tsx';
import { DatePicker } from './DatePicker/DatePicker.tsx';

function App() {
  return (
    <div className="App">
      <Rating/>
      <DatePicker/>
    </div>
  );
}

export default App;
