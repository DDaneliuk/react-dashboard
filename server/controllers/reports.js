import Report from "../models/Report.js"
import Client from "../models/Client.js"
import RequestsStats from "../models/RequestsStats.js"

export const getReports = async (req, res) => {
    try{
        function getLastWeeksDate() {
            const now = new Date();

            return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
        }
        const totalClientsTime = getLastWeeksDate()

        const reports = await Report.find();
        const clients = await Client.find({
            creationdate: { $gte: totalClientsTime}
        });
        const requestsStats = await RequestsStats.find();

        const data = {
            total: 0,
            countryCount: 0,
            totalClients: 0,
            totalClientsTime: totalClientsTime
        }
        data.total = reports.length
        data.totalClients = clients.length
        data.requests = requestsStats[0]
        data.countryReports = getCountryBreakDown()
        data.categoryReports = getReportsCountByCategoryID()

        function getCountryBreakDown() {
            const countryArr = []
            const getCountryCount = {}
            reports.forEach((item) => { getCountryCount[item["countryid"]] = (getCountryCount[item["countryid"]] || 0) + 1; });
            for (const [key, value] of Object.entries(getCountryCount)) {
                countryArr.push({country:`${key}`, requests: value})
            }
            return countryArr
        }

        function getReportsCountByCategoryID() {
            const categoryArr = []
            const getCategoryCount = {}
            reports.forEach((item) => { getCategoryCount[item["category"]] = (getCategoryCount[item["category"]] || 0) + 1; });
            for (const [key, value] of Object.entries(getCategoryCount)) {
                categoryArr.push({unit:`${key}`, requests: value})
            }
            return categoryArr
        }


        const countryCount = [...new Set(reports.map(item => item.countryid))]
        data.countryCount = countryCount.length

        res.status(200).json(data)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getReport = async (req, res) => {
    try{
        const reports = await Report.find();
        res.status(200).json(reports)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
