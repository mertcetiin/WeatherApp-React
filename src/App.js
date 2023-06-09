import './App.css';
import './css/style.css'
import { WeaterProvider } from './context/WeatherContext';
import Container from './components/Container';


function App() {
  return (
    <div className="App">
      <WeaterProvider>
        <Container />
      </WeaterProvider>
    </div>
  );
}

export default App;
