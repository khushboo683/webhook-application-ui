import React, { useEffect, useState } from 'react';
import {io} from 'socket.io-client';
import axios from 'axios';
import { headers } from './utils/headers';
import { Container, Box, Typography } from '@mui/material';
import { EventCard } from './EventCard';
import { AppHeader } from './AppBar';
// const socket = io('http://localhost:5000');

export function Events(){
  const [events, setEvents] = useState([]);

  const socket = io('http://localhost:3000'); 
  const fetchEvents=async()=>{
   try{
    const response = await axios.get('http://localhost:3000/api/webhooks/events',{headers})
    console.log("res",response)
    if(response.status===200){
      setEvents(response.data)
    }
   }catch(err){

   }
  }
  useEffect(() => {
    fetchEvents();
    socket.on('newEvent', (event) => {
      console.log("event",event);
      setEvents((prevEvents) => [event, ...prevEvents]);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <Container>
      <AppHeader/>
    <Box sx={{marginTop:10, marginBottom:5}}>
    <Typography variant='h4'>Real Time Events</Typography>
    {events.map((event,index)=>
      <EventCard key={index} value={JSON.stringify(event.payload)}/>
    )}
    </Box>
    </Container>
  );
};


