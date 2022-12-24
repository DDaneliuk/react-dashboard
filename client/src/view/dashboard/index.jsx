import React, {useMemo} from 'react'
import {Box, Typography, useMediaQuery, useTheme} from '@mui/material';
import {
    Info, ContentCopy, LocalPrintshop, Twitter
} from "@mui/icons-material";
import { useGetReportsQuery } from "state/api";
import CardBox from "components/CardBox";
import CardChartBox from "components/CardChartBox";
import CardChartBarBox from "components/CardChartBarBox";


const Dashboard = () => {
    const theme = useTheme();
    const {data, isLoading} = useGetReportsQuery();
    const isNonMediumScreens = useMediaQuery("(max-width: 1200px)");

    const [totalRequestsLine, totalCategoryLine] = useMemo(() =>{
        if (!data) return []
        const {weekData} = data.requests;
        const {categoryReports} = data;

        const totalRequestsLine = {
            id: "totalRequest",
            color: theme.palette.primary.main,
            data: []
        }
        const totalCategoryLine = {
            id: "totalCategoryRequest",
            color: theme.palette.primary.main,
            data: []
        }
        Object.values(weekData).reduce(
            (acc, {day, dayRequests}) => {
                totalRequestsLine.data = [...totalRequestsLine.data, {"x": day, "y": dayRequests}]
            }
        )
        Object.values(categoryReports).reduce(
            (acc, {category, requests}) => {
                totalRequestsLine.data = [...totalRequestsLine.data, {"x": category, "y": requests}]
            }
        )
        return [[totalRequestsLine], [totalCategoryLine]]
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
            </Box>
        )
    }

    return (
        <Box sx={{
            width: "100%",
            height: "100vh",
            p: "60px 30px",
            display: "grid",
            gridTemplateColumns:"repeat(12, 1fr)",
            gridTemplateRows: "min-content min-content",
            gap:"60px 20px",
            backgroundColor: theme.palette.background.add
        }}>
            <CardBox
                title="Reports amount"
                value={ data.total }
                bgColorIcon={theme.palette.statisticBg.reports}
                icon={<ContentCopy sx={{ color: theme.palette.primary.main, fontSize: "26px" }}/>}/>
            <CardBox
                title="Partners count"
                value={ data.totalClients }
                timeDesc={ data.totalClientsTime }
                bgColorIcon={theme.palette.statisticBg.partners}
                icon={<LocalPrintshop sx={{ color: theme.palette.primary.main, fontSize: "26px" }}/>}/>
            <CardBox
                title="Countries count"
                value={ data.countryCount }
                bgColorIcon={theme.palette.statisticBg.countries}
                icon={<Info sx={{ color: theme.palette.primary.main, fontSize: "26px" }}/>}/>
            <CardBox
                title="Reporting rate"
                value="25"
                timeDesc="Per Day"
                timeType="per day"
                bgColorIcon={theme.palette.statisticBg.rate}
                icon={<Twitter sx={{ color: theme.palette.primary.main, fontSize: "26px" }}/>}/>
            <CardChartBox
                data={data.requests.weekData}
                isLoading={isLoading}
                title="Weekday breakdown"
                desc="25 avg per day"
                timeDesc="starting Monday 19.14.2022"
                bgColor={theme.palette.statisticBg.partners}/>
            <CardChartBarBox
                data={data.countryReports}
                isLoading={isLoading}
                title="Breakdown by countries"
                desc="For the whole period"
                timeDesc="starting Monday 19.14.2022"
                bgColor={theme.palette.statisticBg.reports}/>
            <CardChartBox
                data={data.categoryReports}
                isLoading={isLoading}
                title="Breakdown by category ID"
                desc="25 avg per day"
                timeDesc="starting Monday 19.14.2022"
                bgColor={theme.palette.statisticBg.countries}/>
        </Box>
    )
}

export default Dashboard
