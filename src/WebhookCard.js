import React from "react";
import { Card, CardActions, CardContent, Typography, Button } from "@mui/material";

export function WebhookCard({webhook}){
    return(
     <Card sx={{marginTop:4}}>
     <CardContent>
     <Typography>{webhook.id}</Typography>
     </CardContent>
     <CardActions sx={{justifyContent:'end'}}>
     <Button>See More</Button>
     </CardActions>
     </Card>
    );
}