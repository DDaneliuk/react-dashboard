import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema(
    {
        totalRequests: Number,
        weekData: Array
    }
)

const RequestsStats = mongoose.model("Requests", RequestSchema);

export default RequestsStats
