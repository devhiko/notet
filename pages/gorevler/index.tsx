import Fab from '@mui/material/Fab'

const Gorevler = () => {
  return (
    <div>
      Gorevler
      <Fab color="secondary" aria-label="add" sx={{ position: 'absolute', right: '5%', bottom: '2%' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
          <path
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          />
        </svg>
      </Fab>
    </div>
  )
}

export default Gorevler