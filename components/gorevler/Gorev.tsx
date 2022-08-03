import Card from "@mui/material/Card"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import styles from './Gorev.module.css'

type GorevProps = {
  gorev: {
    id: number
    content: string
  }
}

const Gorev = ({ gorev }: GorevProps) => {
  // checkbox state
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <Card key={gorev.id}
      sx={{ background: checked ? '#d6d6d6' : '#fff' }}
      className={styles.card}
    >
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
        color='secondary'
      />
      <CardContent className={styles['card-content']}>
        <Typography sx={{ textDecoration: checked ? 'line-through' : 'none' }} variant="subtitle1" component="span">{gorev.content}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Gorev