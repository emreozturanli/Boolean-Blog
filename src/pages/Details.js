import React from 'react'
import { useLocation } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';


const randomImage = 'https://picsum.photos/600/400'

export default function Details() {
  const { state } = useLocation()

  return (
    <Card sx={{ maxWidth: 600, paddingTop: '5rem', margin: 'auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            B
          </Avatar>
        }
        title={
          <Typography variant="h4">{state.title.toUpperCase()}</Typography>
        }
      // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="max-content"
        image={state.image ? state.image : randomImage}
        alt={state.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {state.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton  sx={{cursor:'default'}}>
          <FavoriteIcon sx={{marginLeft:'auto', color: state.favourite !== '0' && 'red'}}/>
        </IconButton>
        <Typography variant='h6'>
          {state.favourite !== '0' ? state.favourite : null}
        </Typography>

      </CardActions>
    </Card>
  );
}
