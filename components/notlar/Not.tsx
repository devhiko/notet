import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './Not.module.css'

type NotProps = {
  not: {
    id: number
    title: string
    content: string
    createdAt: string
  }
}

const Not = ({ not }: NotProps) => {
  return (
    <Card className={styles.card} onClick={() => alert('click')}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {not.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {not.content}
        </Typography>
        <Typography sx={{ marginTop: '.5rem' }} variant="subtitle2" color="text.secondary">
          {not.createdAt}
        </Typography>
      </CardContent>
    </Card >
  )
}

export default Not