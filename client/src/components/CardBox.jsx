import React from "react"
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import FlexBetween from "./FlexBetween";

const CardBox = ({title, value, icon, timeType, timeDesc, bgColorIcon}) => {
    const theme = useTheme();
    const isDesktopScene = useMediaQuery("(max-width: 1200px)");

    return (
        <Box
            height="fit-content"
            gridColumn="span 3"
            gridRow="span 1"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p="0.25rem 1rem"
            flex="1 1 100%"
            borderRadius="0.6rem"
            sx={{backgroundColor: theme.palette.primary.main,
                gridColumn:  isDesktopScene ? "span 12" : "span 3"}}
        >
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
            }}>
                <Box sx={{
                    backgroundColor: bgColorIcon,
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: "translate(0px, -15px)",
                    borderRadius: "0.3rem"
                }}>{icon}</Box>
                <Box>
                    {/*title*/}
                    <FlexBetween>
                        <Typography variant="h6" sx={{ color: theme.palette.primary[100] }}>
                            {title}
                        </Typography>
                    </FlexBetween>
                    {/*value*/}
                    <FlexBetween sx={{justifyContent: "flex-end"}}>
                        <Typography
                            variant="h3"
                            fontWeight="600"
                            sx={{ color: theme.palette.secondary[200] }}
                        >
                            {value}
                        </Typography>
                    </FlexBetween>
                </Box>
            </Box>
            {timeDesc ?
                <FlexBetween sx={{
                    borderTop: "1px solid #c7c7c7",
                    margin: "20px 0 0px",
                    padding: "7px 0"
                }} gap="1rem">
                    <Typography>{timeDesc && !timeType
                        ? ` since ${new Date(timeDesc).toString()}`
                        : timeType}</Typography>
                </FlexBetween>
                : null}
        </Box>
    )
}

export default CardBox
