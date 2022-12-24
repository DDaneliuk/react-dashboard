import React, {useState, useEffect} from 'react';
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import {ChevronLeft, ChevronRightOutlined, ManageAccounts, PivotTableChartOutlined} from "@mui/icons-material";

const navItems = [
    {
        text: "Dashboard",
        icon: <PivotTableChartOutlined/>
    },
    {
        text: "Profile",
        icon: <ManageAccounts/>
    },
    // {
    //     text: "Table",
    //     icon: <PivotTableChartOutlined/>
    // },
]

const Sidebar = ({isNonMobile, isSidebarOpen, setIsSidebarOpen, drawerWidth}) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname])

    return ( <Box component="nav">
        {isSidebarOpen && (
            <Drawer
                open={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                variant="persistent"
                anchor="left"
                sx={{
                    width: drawerWidth,
                    "& .MuiDrawer-paper": {
                        color: theme.palette.secondary[200],
                        backgroundColor: theme.palette.background.main,
                        boxSixing: "border-box",
                        borderWidth: isNonMobile ? 0 : "2px",
                        width: drawerWidth,
                    },
                }}
            >
                <Box width="100%">
                    <Box>
                        <FlexBetween>
                            <Box width="100%" display="flex" alignItems="center" justifyContent="center" gap="10px" margin="30px 0">
                                <Typography variant="h4">
                                    Dashboard
                                </Typography>
                            </Box>
                            {!isNonMobile && (
                                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                    <ChevronLeft />
                                </IconButton>
                            )}
                        </FlexBetween>
                    </Box>
                    <List>
                        {navItems.map(({ text, icon }) => {
                            const lcText = text.toLowerCase();
                            return (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton
                                        onClick={() => {
                                            navigate(`/${lcText}`);
                                            setActive(lcText);
                                        }}
                                        sx={{backgroundColor: active === lcText
                                                ? theme.palette.secondary.main : "transparent",
                                            color: active === lcText
                                                ? theme.palette.primary.main : theme.palette.secondary[100],}}
                                    >
                                        <ListItemIcon
                                            sx={{ml: "2rem", color: active === lcText
                                                    ? theme.palette.primary.main : theme.palette.secondary[100],}}
                                        >
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText primary={text}/>
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>
                </Box>
            </Drawer>
        )}
    </Box>
    )
}

export default Sidebar
