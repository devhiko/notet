import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Home = () => {

  return (
    <div>
      Home
      <Card sx={{ margin: '1rem auto' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Not Başlığı
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Not İçeriği
          </Typography>
          <Typography sx={{ m: '.5rem auto' }} variant="subtitle2" color="text.secondary">
            16:12
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Home