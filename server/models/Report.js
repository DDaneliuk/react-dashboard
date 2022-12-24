import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema(
    {
        userAgent: {
            type: String,
            required: true,
            min: 2,
            max: 150,
        },
        category: {
            type: String,
        },
        countryid: {
            type: String,
        },
        creationdate:{
            type: Number,
        },
        clientid:{
            type: String,
        },
        subcategory:{
            type: String,
        },
    }
)

const Report = mongoose.model("Report", ReportSchema);
export default Report
