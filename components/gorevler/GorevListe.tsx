import Search from "../layout/Search";
import { useState } from "react";
import { Fab, Modal, TextField, Button, Box, Typography } from '@mui/material'
import styles from './GorevListe.module.css'
import Gorev from "./Gorev";

const GorevListe = () => {
  // modal state
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(!open)

  const gorevler = [
    {
      id: Math.random() * 1000,
      content: 'lorem ipsum dolor sit amet',
    },
    {
      id: Math.random() * 1000,
      content: 'lorem ipsum amet dolor sit',
    },
    {
      id: Math.random() * 1000,
      content: 'lorem dolor amet sit',
    },
  ]

  const gorev = gorevler.map((gorev) => <Gorev key={gorev.id} gorev={gorev} />)

  return (
    <>
      <Search />
      <div>{gorev.length ? gorev : <>Hiç görev yok :)</>}</div>
      {/* <div>Tamamlandı - 1</div> */}
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
          <Typography sx={{ textAlign: 'center' }} gutterBottom variant="h6" component="h6">Görev Ekleyin</Typography>
          <TextField size='small' fullWidth label='Görev başlığı' placeholder="Buraya yapılacak görevi yazın" required /> <br />
          <Button variant="contained" color='secondary' type='submit'>Ekle</Button>
        </Box>
      </Modal>
    </>
  )
}

export default GorevListe