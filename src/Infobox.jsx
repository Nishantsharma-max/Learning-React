import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
export default function Infobox({result}){
     
     return(
     <div className="Infobox" style={{display:"flex",justifyContent:"center"}}>
          <Card sx={{ maxWidth: 345,width:"300px" }}>
                    <CardMedia
                         component="img"
                         height="140"
                         image="https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
                         alt="Weather Info"
                    />
                    <CardContent>
                         <Typography gutterBottom variant="h5"  component="div">
                              Weather Info
                         </Typography>
                         <Typography variant="body2" sx={{ color: 'teal'  }}>
                              <div>
                                   <h4>Temperature:{result.Temp}</h4>
                                   <h4>Humidity:{result.Humidity}</h4>
                                   <h4>Visibility:{result.Visibility}</h4>
                                   <h4>Windspeed:{result.Windspeed}</h4>
                                   <h4> UVIndex:{result.UVIndex}</h4>
                              </div>
                         </Typography>
                    </CardContent>
          </Card>
     </div>
     )
}