import React ,{ useState } from 'react';
import { Button , TextField , Container , Typography } from '@mui/material';
export const Usestate = () => {
  const [name,setName]=useState('');
  const handlechange=(event)=>{
    setName(event.target.value);
  }
  const handleSubmit=()=>{
    alert(`Hello , ${name}!`);
  }
  return (
    <div>
      <Container maxwidth="sm">
        <Typography variant="h4" gutterBottom>
            Welcome to VJ siddhu Vlogs
        </Typography>
        <TextField 
        label="Enter your Name:"
        variant="outlined"
        fullWidth
        value={name}
        onChange={handlechange}
        style={{marginBottom:'20px'}}/>
        <Button variant="contained" color="primary" onClick={handleSubmit}></Button>
      </Container>
    </div>
  );
}
