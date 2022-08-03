import Search from "../notlar/Search";
import Fab from '@mui/material/Fab'
import Backdrop from "@mui/material/Backdrop";
import styles from './GorevListe.module.css'
import Gorev from "./Gorev";
import { useState } from "react";

const GorevListe = () => {
  // modal state
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleToggle = () => setOpen(!open)

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
      <div>{gorev}</div>
      <Fab
        className={styles.fab}
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

export default GorevListe