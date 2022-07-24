import { Container, List, ListItem, Paper, Typography } from '@mui/material';
import React from 'react'
import NewPost from '../components/NewPost';
import {FaReact} from 'react-icons/fa'
import {SiFirebase,SiReactrouter,SiMaterialui} from 'react-icons/si'
import { Box, } from '@mui/system';


const About = () => {
  return (
      <div>
      <Container sx={{ paddingTop: '6rem', textAlign: 'center', height:'100vh'}}>
        <Paper variant="outlined" sx={{ padding: '1rem', margin: 'auto', maxWidth: '600px',  }} >
          <Typography variant='h3' sx={{color:'#23a02b'}}>
            Tools Used In This Site
          </Typography>
          <hr />
          <List >
            <ListItem sx={{ maxWidth:'350', width:'100%', margin:'auto'}}>
              <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:'2rem'}}>
                <FaReact size={30}/>
                <Typography variant='h5'>
                  React
                </Typography>
              </Box>
            </ListItem>
            <ListItem sx={{ maxWidth:'350', width:'100%', margin:'auto'}}>
              <Box sx={{ display:'flex', alignItems:'center', gap:'2rem'}}>
                <SiFirebase size={30}/>
                <Typography variant='h5'>
                  Firebase
                </Typography>
              </Box>
            </ListItem>
            <ListItem sx={{maxWidth:'350', width:'100%', margin:'auto'}}>
              <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center', gap:'2rem'}}>
                <SiReactrouter size={30}/>
                <Typography variant='h5'>
                  React Router DOM
                </Typography>
              </Box>
            </ListItem>
            <ListItem sx={{maxWidth:'350', width:'100%', margin:'auto'}}>
              <Box sx={{ display:'flex', justifyContent:'center', alignItems:'center', gap:'2rem'}}>
                <SiMaterialui size={30}/>
                <Typography variant='h5'>
                  Material UI
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Paper>
      </Container>
      <NewPost />
      </div>
  
  )
}

export default About