import cloud from "../../assets/cloud.jpg"
import snowy from "../../assets/snowy.jpg"
import rainbowWeather from "../../assets/rainbow-weather.jpg"
import rainy from "../../assets/rainy.jpg"
import storm from "../../assets/storm.jpg"
import sunny from "../../assets/sunny.jpg"
import foggy from "../../assets/foggy.jpg"

function ImageFetch ({state}){
    switch (state){
        case "Rain":
            return <img className="backimage" src={rainy} alt="rainy" />
        case "Drizzle":
            return <img className="backimage" src={rainy} alt="rainy" />

        case "Clear":
            return <img className="backimage" src={sunny} alt="sunny" />
            
        case "Mist":
            return <img className="backimage" src={foggy} alt="foggy" />
            
        case "Snow":
            return <img className="backimage" src={snowy} alt="snowy" />
            
        case "Storm":
            return <img className="backimage" src={storm} alt="storm" />

        case "Clouds":
            return <img className="backimage" src={cloud} alt="cloud" />

        default:
            return <img className="backimage" src={rainbowWeather} alt="rainbowWeather" />
    }   
}

export default ImageFetch;
