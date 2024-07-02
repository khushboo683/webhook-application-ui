import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box} from "@mui/material";
import { AuthContext } from "./AuthContext";
export function AppHeader(){
    const {isAuthenticated, logout} = useContext(AuthContext)
    const navigate = useNavigate();
    const navItems = isAuthenticated?[
        { name: 'Subscriptions', path: '/webhookList'},
        { name: 'Subscribe', path: '/subscribe'},
        {name: 'Logout', path:'/'}
     
    ]:[
        { name: 'Login', path: '/login' },
        { name: 'Register', path: '/register' },
    ];
    const handleNavItemClick=(item)=>{
        console.log(item)
        navigate(item.path);
        if(item.name==='Logout'){
         logout();
        }
    }
    return(
<AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Webhook
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
        
                            <Button key={item.name} sx={{ color: '#fff' }} onClick={()=>handleNavItemClick(item)}>
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
    );
}