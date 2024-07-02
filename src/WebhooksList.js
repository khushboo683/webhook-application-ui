import React, {useEffect, useState} from "react";
import { Container, Box, Typography} from "@mui/material";
import { WebhookCard } from "./WebhookCard";
import { AppHeader } from "./AppBar";
import axios from 'axios';
import { headers } from "./utils/headers";
export function WebhookList(){
  const[webhooks,setWebhooks]= useState([])
    const fetchWebhooks=async()=>{
      try{
        const response = await axios.get('http://localhost:3000/api/webhooks/subscriptions',{headers})
        console.log('response',response)
        if(response.status===200){
          setWebhooks(response.data);
        }
       }catch(err){
  
       }
    }
    useEffect(()=>{
      fetchWebhooks();
    },[])
    return(
    <Container>
      <AppHeader/>
    <Box
    sx={
       {
       direction:'flex',
       flexDirection:'column',
       alignItems:'center',
       marginTop:10,
       marginBottom:5
      } 
    }
    >
    <Typography variant='h2'>
    Subscribed Webhooks
    </Typography>
    </Box>
    {
        webhooks.map(e=>(
            <WebhookCard key={e._id} webhook={e}/>
        )
        )
    }
    </Container>
    );
}