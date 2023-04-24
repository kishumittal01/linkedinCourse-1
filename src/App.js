
import { useEffect, useState, useReducer, useRef } from 'react';
import './App.css';
import Data from './components/Data';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';

function App() {
  

  const [checked, setChecked] = useReducer( (checked) => !checked, false);

  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);


  const txtTitle = useRef();
  const hexColor = useRef();

  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title}, ${color}`);
    txtTitle.current.value = "";
    hexColor.current.value = "";
  };

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>SAD</button>
      <button onClick={() => setEmotion("excited")}>EXCITED</button>
      <h1>Current emotion is {secondary}</h1>
      <button onClick={() => setSecondary("grateful")}>GRATEFUL</button>

      <div>
          <input type="checkbox" value={checked} onChange={setChecked}/>
          <label>{checked ? "checked" : "not checked"}</label>
      </div>

      <div>
          <form onSubmit={submit}>
            <input ref={txtTitle} type="text" placeholder='color title..'/>
            <input ref={hexColor} type="color" />
            <button>ADD</button>
          </form>
      </div>

      <div>
        <Data/>
      </div>


      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
