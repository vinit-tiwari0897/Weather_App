import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import FlareIcon from '@mui/icons-material/Flare';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
  let INIT_URL = "https://images.unsplash.com/photo-1754901350791-04eff8b6289c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let HOT_URL = "https://images.unsplash.com/photo-1564436644974-d6e275defaa1?q=80&w=446&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let COLD_URL = "https://plus.unsplash.com/premium_photo-1663099753562-4afbb1b613e6?q=80&w=877&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAIN_URL = "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return(
        <div className='InfoBox'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>90 ? RAIN_URL : (info.temp>30 ? HOT_URL : (info.temp<10 ? COLD_URL : INIT_URL)) }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.City}{info.humidity>90 ? <ThunderstormIcon/> : (info.temp>30 ? <FlareIcon/> : (info.temp<10 ? <AcUnitIcon/> : <FlareIcon/>)) }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p> Humidity = {info.humidity}</p>
          <p> Temprature = {info.temp}</p>
          <p> Min_Temprature= {info.temp_min}</p>
          <p> Max_Temprature= {info.temp_max}</p>
          <p> Sea_level= {info.sea_level}</p>
          <p> The Weather can be Described as <b><i>{info.weather}</i></b> and feels Like {info.feels_like}</p>
        </Typography>
      </CardContent>
    </Card>

        </div>
    )
}