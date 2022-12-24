import RequestsStats from "../models/RequestsStats.js"

export const getRequests = async (req, res) => {
    try{
        const requestsStats = await RequestsStats.find();
        res.status(200).json(requestsStats[0])
    } catch(err) {
        res.status(404).json({message: err.message })
    }
}
