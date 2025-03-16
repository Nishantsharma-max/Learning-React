import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Infobox from "./Infobox.jsx";
import { useState } from 'react';


export default function Searchbox(){
     let [city,setcity]=useState("")
     let [weather,setweather]=useState({Temp:0,Humidity:0,Visibility:0,Windspeed:0,UVIndex:0})
     const API_URL="https://api.tomorrow.io/v4/weather/forecast"
     const API_KEY="ydeCrAT4Yasxf85vvYgLf7gcepFMxWNh"
     let getweatherinfo= async ()=>{
          let response=await fetch(`${API_URL}?location=${city}&apikey=${API_KEY}`)
          let jsonresponse= await response.json()
          let result = {
               Temp:jsonresponse.timelines.daily[0].values.
               temperatureAvg,
               Humidity:jsonresponse.timelines.daily[0].values.
               humidityAvg,
               Visibility:jsonresponse.timelines.daily[0].values.
               visibilityAvg,
               Windspeed:jsonresponse.timelines.daily[0].values.
               windSpeedAvg,
               UVIndex:jsonresponse.timelines.daily[0].values.
               uvIndexAvg
          }
          setweather({...result})
     }


     let handletextfield=(event)=>{
          setcity(event.target.value)
     }
     let handlesubmit=(event)=>{
          event.preventDefault()
          console.log(city)
          
          setcity("")
          getweatherinfo()

     }
     return <div>
          <h3>Search for the weather</h3>
          <form onSubmit={handlesubmit}>
               <TextField onChange={handletextfield} value={city} id="standard-basic" label="City Name" variant="standard" size="small" required/>
               <br />
               <Button style={{marginTop:"5px",color:"teal",borderBlockColor:"teal"}} variant="outlined" type='submit' size='small' >Search</Button>
          </form>
          <Infobox result={weather}/>
     </div>
}