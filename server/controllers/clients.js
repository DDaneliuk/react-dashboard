import Clients from "../models/Client.js"

export const getClients = async (req, res) => {
    try{
        const clients = await Clients.find();
        res.status(200).json(clients)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

