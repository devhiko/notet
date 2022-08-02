import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'

const Search = () => {

  return (
    <Box className={styles.search} component='form' onSubmit={() => alert('hello')}>
      <TextField
        id="outlined-basic"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        size='small'
        fullWidth
      />
    </Box>
  )
}

const Navbar = () => {
  const router = useRouter()

  return (
    <nav >
      <div className={styles.container}>
        <Link href='/'>
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" fill={router.asPath == "/" ? '#ba68c8' : '#bbb'} className="bi bi-stickies" viewBox="0 0 16 16">
              <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z" />
              <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z" />
            </svg>
          </a>
        </Link>
        <Link href='/gorevler' >
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" fill={router.asPath == "/gorevler" ? '#ba68c8' : '#bbb'} className="bi bi-check2-square" viewBox="0 0 16 16">
              <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
              <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
            </svg>
          </a>
        </Link>
      </div>
      <Search />
    </nav>
  )
}

export default Navbar