import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
export function EventCard({value}){
    return(
     <Card sx={{marginTop:5}}>
     <CardContent>
     <Typography variant="subtitle1">{JSON.parse(value).name}</Typography>
     <Typography variant="subtitle2">{JSON.parse(value).description}</Typography>
     </CardContent>
     </Card>
    );
}