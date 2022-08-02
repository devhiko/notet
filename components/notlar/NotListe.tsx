import Fab from '@mui/material/Fab'
import Backdrop from '@mui/material/Backdrop';
import { useState } from 'react';
import Search from './Search';
import styles from './NotListe.module.css'
import Not from './Not';

const NotListe = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleToggle = () => setOpen(!open)

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
      <div>{not}</div>
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

export default NotListe