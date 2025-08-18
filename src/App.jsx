import './App.css'
import ColorSelector from './components/ColorSelector';
import ToDO from './components/ToDo';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <ColorSelector/>
        <ToDO/>
       </div>
      </div>
  );
}

export default App
