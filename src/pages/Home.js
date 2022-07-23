import React from 'react'
import { Grid } from '@mui/material';
import SingleCard from '../components/SingleCard';
import NewPost from '../components/NewPost';

import { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

const Home = () => {
  const {posts} = useContext(BlogContext)
  
  return (
    <div style={{ marginTop: '5rem'}}>
      <Grid container spacing={4} justifyContent="center"
  alignItems="center">
        {
          posts.map((post,i)=>{
            return < SingleCard key={i}  post={post}/>
          })
        }
        
      </Grid>
      <NewPost/>
    </div>
  )
}

export default Home