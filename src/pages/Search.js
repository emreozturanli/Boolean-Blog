import React from 'react'
import { useLocation } from 'react-router-dom'
import SingleCard from '../components/SingleCard';
import { Grid } from '@mui/material';

const Search = () => {
    const {state} = useLocation();

  return (
    <div style={{ marginTop: '5rem' }}>
      <Grid container spacing={4} justifyContent="center"
  alignItems="center">
        {
          state.map((post,i)=>{
            
            return < SingleCard key={i}  post={post}/>
          })
        }
        
      </Grid>
      
    </div>
  )
}

export default Search