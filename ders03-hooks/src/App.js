import logo from './logo.svg';
import './App.css';
import State from './components/State';
import Effect from './components/Effect';
import Ref from './components/Ref';
import Reducer from './components/Reducer';
import Context from './components/Context';

//useState
//useEffect
//useRef
//useReducer


function App() {
  return (
    <div className="container">
      <div className="row pt-5">
        <State />
        {/* <Effect /> */}
        {/* <Ref /> */}
        {/* <Reducer /> */}
        {/* <Context /> */}
      </div>
    </div>
  );
}

export default App;
