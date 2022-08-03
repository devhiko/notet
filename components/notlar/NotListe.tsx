import { Fab, Button, Box, TextField, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import Search from '../layout/Search';
import styles from './NotListe.module.css'
import Not from './Not';


const NotListe = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const notlar = [
    {
      id: Math.random() * 1000,
      title: 'Not başlığı 1',
      content: 'lorem ipsum dolor sit amet',
      createdAt: '16:46',
    },
    {
      id: Math.random() * 1000,
      title: 'Not başlığı 2',
      content: 'lorem ipsum amet dolor sit',
      createdAt: '17:45',
    },
    {
      id: Math.random() * 1000,
      title: 'Not başlığı 3',
      content: 'lorem dolor amet sit',
      createdAt: '18:20',
    },
  ]

  const not = notlar.map((not) => <Not key={not.id} not={not} />)

  return (
    <>
      <Search />
      <div>{not.length ? not : 'Hiç not yok :)'}</div>
      <Fab
        className={styles.fab}
        color="secondary"
        aria-label="add"
        onClick={handleOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
          <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          />
        </svg>
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.addmodal} component='form' onSubmit={() => console.log('test')}>
          <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="h6">Not Ekleyin</Typography>
          <TextField size='small' fullWidth label='Not başlığı' placeholder="Buraya notunuzu yazın" required /> <br />
          <TextField rows={10} size='small' fullWidth label='Not içeriği' placeholder="Buraya notunuzu yazın" multiline required /> <br />
          <Button variant="contained" color='secondary' type='submit'>Ekle</Button>
        </Box>
      </Modal>
    </>
  )
}

export default NotListe