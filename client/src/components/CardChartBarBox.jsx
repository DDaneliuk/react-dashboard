import React from "react"
import {Box, Typography, useMediaQuery, useTheme} from "@mui/material";
import FlexBetween from "./FlexBetween";
import ChartBar from "./ChartBar";

const CardChartBox = ({title, value, desc, timeDesc, bgColor, data, isLoading}) => {
    const theme = useTheme();
    const isDesktopScene = useMediaQuery("(max-width: 1200px)");
    return (
        <Box
            gridRow="span 1"
            display="flex"
            flexDirection="column"
            p="0.25rem 1rem"
            flex="1 1 100%"
            borderRadius="0.6rem"
            sx={{backgroundColor: theme.palette.primary.main,
                gridColumn:  isDesktopScene ? "span 12" : "span 4"}}
        >
            <Box height="250px"
                 borderRadius="1rem"
                 sx={{
                     backgroundColor: bgColor,
                     transform: "translate(0px, -30px)"
                 }}  >
                <ChartBar
                    data={data} isLoading={isLoading}
                />
            </Box>
            <Box>
                {/*title*/}
                <FlexBetween>
                    <Box>
                        <Typography variant="h5" sx={{ color: theme.palette.primary[100] }}>
                            {title}
                        </Typography>
                    </Box>
                </FlexBetween>
                <FlexBetween>
                    <Typography variant="h6" sx={{ color: theme.palette.primary[100] }}>
                        {desc}
                    </Typography>
                </FlexBetween>
                {timeDesc ?
                    <FlexBetween sx={{
                        borderTop: "1px solid #c7c7c7",
                        margin: "20px 0 0px",
                        padding: "7px 0"
                    }} gap="1rem">
                        <Typography>{timeDesc}</Typography>
                    </FlexBetween>
                    : null}
            </Box>
        </Box>
    )
}

export default CardChartBox
