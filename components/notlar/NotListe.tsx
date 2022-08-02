import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab'
import Backdrop from '@mui/material/Backdrop';
import { useState } from 'react';

const NotListe = () => {
  const notlar = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

  const not = notlar.map((not: string) => (
    <Card key={not} sx={{ margin: '1rem .5rem', textAlign: 'justify' }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Not Başlığı - {not}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus fugit adipisci laudantium error! Quasi voluptatem vitae amet maxime eius tempora dolores libero a quisquam, fugit quaerat molestias veniam odit autem.
        </Typography>
        <Typography sx={{ marginTop: '.5rem' }} variant="subtitle2" color="text.secondary">
          16:12
        </Typography>
      </CardContent>
    </Card>
  ))

  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleToggle = () => setOpen(!open)

  return (
    <>
      {not && <>{not}</>}
      <Fab
        color="secondary"
        aria-label="add"
        sx={{ margin: '0' }}
        onClick={handleToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
          <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          />
        </svg>
      </Fab>
      <Backdrop
        sx={{ color: '#fff', zIndex: 1200 }}
        open={open}
        onClick={handleClose}
      >
        ta daa
      </Backdrop>
    </>
  )
}

export default NotListe