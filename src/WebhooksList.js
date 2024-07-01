import React from "react";
import { Container, Box, Typography} from "@mui/material";
import { WebhookCard } from "./WebhookCard";
export function WebhookList(){
    const webhooks=[
      {
        id:'1',
      },
      {
        id:'2',
      },
      {
        id:'3',
      },
      {
        id:'4',
      }
    ]
    return(
    <Container>
    <Box
    sx={
       {
       direction:'flex',
       flexDirection:'column',
       alignItems:'center',
       marginTop:5,
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
            <WebhookCard key={e.id} webhook={e}/>
        )
        )
    }
    </Container>
    );
}