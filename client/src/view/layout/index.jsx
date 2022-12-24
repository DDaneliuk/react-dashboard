import React, {useState, useEffect} from 'react'
import {Box, useMediaQuery, useTheme} from "@mui/material";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import NavBar from "components/NavBar";
import Sidebar from "components/Sidebar";

const Layout = () => {
    const theme = useTheme()
    const isNonMobile = useMediaQuery("(min-width: 600px)");
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    return (
        <Box
            display={isNonMobile ? "flex" : "block"}
            width="100%"
            height="100%"
            sx={{
                backgroundColor: theme.palette.background.main
            }}>
            <Sidebar
                isNonMobile={isNonMobile}
                drawerWidth="250px"
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}/>
            <Box flexGrow={1}>
            <NavBar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}/>
            <Outlet />
            </Box>
    </Box>
    )
}

export default Layout
