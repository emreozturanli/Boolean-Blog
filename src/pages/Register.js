import React from 'react'
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const { fname, lname, setFname, setLname, email, password, setEmail, setPassword, register } = useContext(AuthContext)
  const navigate = useNavigate();

  return (
    <Container sx={{height: '100vh', paddingTop:'6rem'}}>

      <form
        onSubmit={(e) => register(e, navigate)}
        style={{ maxWidth: '350px', width: '100%', margin: 'auto', textAlign: 'center', padding:'4rem 0', background:'rgba(255,255,255,0.7)', borderRadius:'30px'}}>
        <TextField
          id="fname"
          label="First Name"
          variant="outlined"
          type="text"
          name='fname'
          margin='normal'
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        <br />
        <TextField
          id="lname"
          label="Last Name"
          variant="outlined"
          type="text"
          name='lname'
          margin='normal'
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <br />

        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          name='email'
          margin='normal'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          name='password'
          margin='normal'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> <br /> <br />
        <Button variant="contained" type='submit'>Register</Button>
      </form>
    </Container>
  )
}

export default Register