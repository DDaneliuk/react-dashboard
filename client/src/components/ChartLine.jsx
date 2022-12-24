import React, {useMemo} from "react"
import { ResponsiveLine } from "@nivo/line";
import {Typography, useTheme, Box} from "@mui/material";

const ChartLine = ({data, isLoading}) => {
    const theme = useTheme()

    const [line] = useMemo(() =>{
        if (!data) return []

        const line = {
            id: "line",
            color: theme.palette.primary.main,
            data: []
        }
        Object.values(data).reduce(
            (acc, {unit, requests}) => {
                line.data = [...line.data, {"x": unit, "y": requests}]
            }
        )
        return [[line]]
    }, [data])

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
        <ResponsiveLine
            data={line}
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
            margin={{ top: 20, right: 20, bottom: 50, left: 30 }}
            xScale={{ type: "point" }}
            yScale={{
                type: "linear",
                min: "auto",
                max: "auto",
                stacked: false,
                reverse: false,
            }}
            yFormat=" >-.2f"
            curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: "bottom",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendOffset: 36,
                legendPosition: "middle",
            }}
            axisLeft={{
                orient: "left",
                tickValues: 5,
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "",
                legendOffset: -60,
                legendPosition: "middle",
            }}
            enableGridX={false}
            enableGridY={false}
            pointSize={10}
            pointColor={{"from":"color"}}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
        />
    )
}

export default ChartLine
