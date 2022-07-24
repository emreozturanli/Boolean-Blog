import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { AuthContext } from '../context/AuthContext';
import EditPost from '../components/EditPost';
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import FavoriteIcon from '@mui/icons-material/Favorite';

const randomImage = 'https://picsum.photos/350/200'

const SingleCard = (props) => {
    const { deletePost, setEditPostOpen, setUpdateInfo,increaseFav } = useContext(BlogContext)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const {author, content, title, image, id, userId,favourite,likes} = props.post
    
    const handleEdit = () => {
        setUpdateInfo({ author: author, title: title, image: image, id: id, content: content, favourite:favourite, likes:likes })
        setEditPostOpen(true)
    }

    const handleDetails = () => {
        if (user) {
            navigate(`/details/${title.split(' ').join('-')}`, { state: { author, content, title, image,favourite,likes } })
        } else {
            toast.error('You Should Login to See Details')
        }

    }

    return (
        <Grid item >
            <Card sx={{ width: 345, height:360, }}>
                <CardActionArea sx={{cursor:'default' }}>
                    <CardMedia
                        component="img"
                        // height="140"
                        // width='345'
                        sx={{height:'140px', width:'100%', objectFit:'contain'}}
                        image={image !== '' ? image : randomImage}
                        alt={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h6">
                            <i> @{author}</i>
                        </Typography>
                        <Typography gutterBottom variant="body1" component="p" sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: '2',
                            WebkitBoxOrient: 'vertical',
                            height: '50px'
                        }}>
                            {content}
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" variant='contained' color="secondary" onClick={handleDetails} >
                        Details
                    </Button>
                    {
                        user.uid === userId &&
                        <>
                            <Button size="small" variant='contained' color="primary" onClick={handleEdit}>
                                Edit
                            </Button>
                            <Button size="small" variant='contained' color="warning" onClick={() => deletePost(id)}>
                                Delete
                            </Button>
                        </>
                    }
                    <FavoriteIcon sx={{marginLeft:'auto', color: favourite !== '0' && 'red', cursor:'pointer'}} onClick={()=>increaseFav(props.post)}/>
                    <Typography>
                        {favourite !== '0' ? favourite : null}
                    </Typography>
                </CardActions>
            </Card>
            <EditPost />
        </Grid>
    )
}
export default SingleCard