import { Bike } from "../bike.model";
import { TBike } from "./bike.interface";

const createBikeDB = async (bikeData: TBike) => {
    if (await Bike.isBikeExists(bikeData.id)) {
        throw new Error("Bike Already Exists on Database  ")
    }
    const result = await Bike.create(bikeData)
    return result
}

const getAllBikesFromDB = async () => {
  const result = await Bike.find();
  return result;
};

const getSingleBikeFromDB = async (id : string) => {
    const result = await Bike.aggregate([
        {$match: {id: id}}
    ])
    return result;
}

const deleteBikeFromDB = async (id: string) => {
    const result = await Bike.updateOne({ id }, { isDeleted: true });
    return result
}

export const BikeService = {
    createBikeDB,
    getAllBikesFromDB,
    getSingleBikeFromDB,
    deleteBikeFromDB,
}