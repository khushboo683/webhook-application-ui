import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Container, Box, Typography } from '@mui/material';
import { EventCard } from './WebhookCard';

const socket = io('http://localhost:5000');

export function Events(){
  const [events, setEvents] = useState([]);

  useEffect(() => {
    socket.on('newEvent', (event) => {
      setEvents((prevEvents) => [event, ...prevEvents]);
    });

    return () => {
      socket.off('newEvent');
    };
  }, []);

  return (
    <Container>
    <Box>
    <Typography variant='h4'>Real Time Log</Typography>
    {events.map((event,index)=>
      <EventCard key={index} value={JSON.stringify(event.payload)}/>
    )}
    </Box>
    </Container>
  );
};


