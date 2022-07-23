import React from 'react'
import { Grid } from '@mui/material';
import SingleCard from '../components/SingleCard';
import NewPost from '../components/NewPost';
import { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import { AuthContext } from '../context/AuthContext';

const MyPosts = () => {
  const {posts} = useContext(BlogContext)
  const {user} = useContext(AuthContext)
  
  return (
    <div style={{ marginTop: '5rem' }}>
      <Grid container spacing={4} justifyContent="center"
  alignItems="center">
        {
          posts.filter((post)=>post.userId === user.uid)
            .map((item,i)=>{
               return < SingleCard key={i}  post={item}/>
            })
        }
      </Grid>
      <NewPost/>
    </div>
  )
}

export default MyPosts