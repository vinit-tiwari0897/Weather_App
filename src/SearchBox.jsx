import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
 let [city,setCity] = useState("");

 let API_URL = "http://api.openweathermap.org/geo/1.0/direct";
 let API_KEY = "1ed14cbf6d7e79aa6422cc24300ba034";
  let MAIN_URL = "https://api.openweathermap.org/data/2.5/weather";

 let getWeatherInfo = async () => {
      let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
      let jsonRes = await responce.json();
    //   let lat = result[0].lat;
    //   let lon = result[0].lon;

      let responce2 = await fetch(`${MAIN_URL}?lat=${jsonRes[0].lat}&lon=${jsonRes[0].lon}&appid=${API_KEY}&units=metric`);
      let jsonRes2 = await responce2.json();
      
      console.log(jsonRes2);
      let result = {
          City : city,
          feels_like : jsonRes2.main.feels_like,

          humidity : jsonRes2.main.humidity,
          pressure : jsonRes2.main.pressure,
          sea_level : jsonRes2.main.sea_level,
          temp : jsonRes2.main.temp,
          temp_max : jsonRes2.main.temp_max,
          
          temp_min : jsonRes2.main.temp_min,

          weather : jsonRes2.weather[0].description,
        }
        console.log(result);
        updateInfo(result);
 }

 let handleChange = (event) => {
     setCity(event.target.value);
 }

 let handleSubmit = (evt) => {
    evt.preventDefault();
     console.log(city);
     setCity("");
     getWeatherInfo();
 }
    return (
        <div className="SearchBox">
 
             <form onSubmit={handleSubmit}>
                <TextField id="City" 
                label="City Name" 
                variant="outlined" 
                required 
                value={city}
                onChange={handleChange}/>
                <br></br>
                <br></br>
                <Button variant="contained" type="submit" >Search</Button>
             </form>
        </div>
    )
}