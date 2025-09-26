import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
          City : "delhi",
          feels_like : 24,

          humidity : 93,
          pressure : 132,
          sea_level : 1241,
          temp : 24.66,
          temp_max : 25.30,
          
          temp_min : 23.34,

          weather : "overcast clouds",
        });

        let updateInfo = (result) => {
           setWeatherInfo(result);
        }
    return(
        <div className="WeatherApp">
            <h2>Wheather App</h2>
          <SearchBox updateInfo={updateInfo}/>
          <InfoBox info={weatherInfo}/>
        </div>
    )
}