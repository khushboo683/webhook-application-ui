import React from "react";
import {Container, Typography} from '@mui/material'
export function NotFound(){
    return(
     <Container>
        <Typography variant='h3'>404: Not Found</Typography>
        The page you are looking for doesn't exist.
     </Container>
    );
}