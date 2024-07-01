import React from "react";
import {Box, Container, FormControl, InputLabel, Input} from '@mui/material';

export function Register(){
    return(
    <Container>
        <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
      </Container>
    );
}