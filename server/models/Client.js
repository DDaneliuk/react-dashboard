import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        login: {
            type: String,
            required: true,
            min: 2,
            max: 50,
            unique: true,
        },
        logo: {
            type: String,
        },
        creationdate:{
            type: Number,
        },
        password:{
            type: String,
            required: true,
            min: 8,
        }
    }
);

const Client = mongoose.model("Clients", ClientSchema);
export default Client
