
import './App.css';
import React ,{useState} from "react";
import MyModal from "./Modal";



function App() {
    const [flag , setFlag] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
          <button
            onClick={()=>{setFlag(prev => !prev)}}>
              {flag ? "close Modal" : "open Modal"}
          </button>
          {
              flag&& <MyModal  setFlag={setFlag}/>
          }
      </header>
    </div>
  );
}

export default App;
