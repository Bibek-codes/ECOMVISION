import OverallStat from "../models/OverAllStat.js";

export const getSales = async (req,res) => {
    try{
        const OverAllStats = await OverallStat.find();

        res.status(200).json(OverAllStats[0]);
    }
    catch(error){
        res.status(404).json({ message: error.message });
    }
}