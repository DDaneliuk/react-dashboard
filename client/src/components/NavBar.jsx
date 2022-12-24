import React, {useState} from 'react'
import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ManageAccounts,
    PivotTableChartOutlined,
    ArrowDropDownOutlined,
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import {AppBar, IconButton, InputBase, Toolbar, useTheme} from "@mui/material";

const NavBar = ({isSidebarOpen, setIsSidebarOpen}) => {
    const dispatch = useDispatch();
    const theme = useTheme();

    return (
        <AppBar
        sx={{
            position: "static",
            background: "none",
            boxShadow: "none",
        }}>
            <Toolbar sx={{
                justifyContent: "space-between",
                backgroundColor: theme.palette.background.add
            }}>
                {/* LEFT */}
                <FlexBetween>
                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <MenuIcon />
                    </IconButton>
                    <FlexBetween
                        borderRadius="9px"
                        gap="3rem"
                    >
                    </FlexBetween>
                </FlexBetween>
                {/* RIGHT */}
                <FlexBetween>
                    <FlexBetween
                        borderRadius="9px"
                        gap="1rem"
                    >
                        <InputBase
                            placeholder="Search"
                            sx={{padding:"0px 15px", borderBottom: "1px solid #000" }}/>
                        <IconButton>
                            <Search/>
                        </IconButton>
                        <IconButton>
                            <PivotTableChartOutlined/>
                        </IconButton>
                        <IconButton>
                            <ManageAccounts/>
                        </IconButton>
                    </FlexBetween>
                </FlexBetween>
            </Toolbar>

        </AppBar>
    )
}

export default NavBar
