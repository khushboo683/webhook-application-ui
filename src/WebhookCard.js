import React from "react";
import { Card, CardActions, CardContent, Typography, Button } from "@mui/material";
import {useNavigate} from 'react-router-dom';
export function WebhookCard({webhook}){
    const navigate = useNavigate();
    const handleSeeMore=()=>{
      navigate('/events')
    }
    return(
     <Card sx={{marginTop:4}}>
     <CardContent>
     <Typography>Event streaming from {webhook.sourceUrl} to {webhook.callbackUrl}</Typography>
     </CardContent>
     <CardActions sx={{justifyContent:'end'}}>
     <Button onClick={handleSeeMore}>See More</Button>
     </CardActions>
     </Card>
    );
}