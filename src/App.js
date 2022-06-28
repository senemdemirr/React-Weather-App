import { useState } from "react";
import Result from "./components/Result/index"
import "./style.css";
import Background from "./components/Background/index"
import Search from "./components/Search";



function App() {

  const [hava , setWeather] = useState({});

  return (
    <section className="app">
      <Background backGround={hava.weather && hava.weather[0].main}/>
      <div id="title">
          Weather App
      </div>
      <Search setWeather = {setWeather}/>
      <Result weather={hava}/>
    </section>
   
  );
}

export default App;
