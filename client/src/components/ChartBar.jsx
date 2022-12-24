import React from "react"
import { ResponsiveBar } from "@nivo/bar";
import {Typography, useTheme, Box} from "@mui/material";

const ChartBar = ({data, isLoading}) => {
    const theme = useTheme()

    if (!data || isLoading) {
        return (
            <Box
                height="100%"
                justifyContent="center"
                display="flex"
                alignItems="center"
            >
                <Typography variant="h5" sx={{ color: theme.palette.primary.main }}>
                    Loading...
                </Typography>
            </Box>)
    }
    return (
        <ResponsiveBar
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: theme.palette.text.add,
                        },
                    },
                    legend: {
                        text: {
                            fill: theme.palette.text.add,
                        },
                    },
                    ticks: {
                        line: {
                            stroke: theme.palette.text.add,
                            strokeWidth: 1,
                        },
                        text: {
                            fill: theme.palette.text.add,
                        },
                    },
                },
                legends: {
                    text: {
                        fill: theme.palette.text.add,
                    },
                },
                tooltip: {
                    container: {
                        color: theme.palette.text.main,
                    },
                },
            }}
            keys={['requests']}
            indexBy="country"
            margin={{ top: 20, right: 20, bottom: 50, left: 30 }}
            colors={{ scheme: 'nivo' }}
        />
    )
}

export default ChartBar
