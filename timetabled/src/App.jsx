import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">

      <h1>Timetabled</h1>
      <h2>Itinerary for 7 days in Austin</h2>
      <Calendar></Calendar>
    </div>
  )
}

export default App