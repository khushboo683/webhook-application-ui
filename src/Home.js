import React from "react";
import Lottie from "lottie-react";
import animation from './utils/animation.json';
import { Container,  Typography,  Grid } from "@mui/material";
import { AppHeader } from "./AppBar";

export function Home() {
    return (
        <Container>
           <AppHeader/>

            <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '100px' }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Lottie animationData={animation} loop={true} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h3">Welcome to Webhook!</Typography>
                </Grid>
            </Grid>
        </Container>
    );
}
