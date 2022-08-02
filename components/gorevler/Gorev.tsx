import Card from "@mui/material/Card"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";

const Gorev = ({ gorev }: any) => {
  // checkbox state
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  return (
    <Card key={gorev.id}
      sx={{
        display: 'flex',
        alignItems: 'center',
        margin: '1rem .5rem',
        background: checked ? '#d6d6d6' : '#fff'
      }}
      onClick={() => alert('edit mode')}
    >
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
        color='secondary'
      />
      <CardContent style={{ padding: '1rem 0' }}>
        <Typography style={{ textDecoration: checked ? 'line-through' : 'none' }} variant="subtitle1" component="span">Görev içeriği</Typography>
      </CardContent>
    </Card>
  )
}

export default Gorev