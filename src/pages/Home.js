import React from 'react'
import { Grid } from '@mui/material';
import SingleCard from '../components/SingleCard';
import NewPost from '../components/NewPost';

import { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

const Home = () => {
  const {posts} = useContext(BlogContext)
  
  return (
    <div style={{ marginTop: '3rem', padding:'3rem 0', display:'grid', placeItems:'center'}}>
      <Grid container spacing={4} justifyContent="center"
  alignItems="center" maxWidth={1500} >
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