import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material'
import React , { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import useStateContext from '../hooks/useStateContext'

export default function Layout() {
    const { resetContext } = useStateContext()
    const navigate = useNavigate()
    const [active, setActive] = useState(false);

    const logout = () => {
        resetContext()
        navigate("/")
    }

    return (
        <>
            <AppBar position="sticky">
                <Toolbar sx={{ width: 640, m: 'auto' }}>
                    <Typography
                        variant="h4"
                        align="center"
                        color="common.white"
                        sx={{ flexGrow: 1 }}>
                        Quiz App
                    </Typography>
                    <Button onClick={logout}
                    style= {{backgroundColor: active ? "black" : "white" }}>Logout</Button>
                </Toolbar>
            </AppBar>
            <Container>
                <Outlet />
            </Container>
        </>
    )
}