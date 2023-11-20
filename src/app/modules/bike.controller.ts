import { Request, Response } from "express";
import BikeSchema from "./bike.validation";
import { BikeService } from "./bike.service";

const createBike = async (req: Request, res: Response) => {
    try {
        const { bike: BikeData } = req.body;
        // zod validation
        const zodParseData = BikeSchema.parse(BikeData);
        const result = await BikeService.createBikeDB(zodParseData);

        res.status(200).json({
        success: true,
        message: 'Bike is created succesfully',
        data: result,
        });
    } catch (error: any) {
        res.status(500).json({
        success: false,
        message: error.message || 'something went wrong',
        error: error,
        });
    }
}


const getAllBikes = async (req: Request, res: Response) => {
  try {
    const result = await BikeService.getAllBikesFromDB();

    res.status(200).json({
      success: true,
      message: 'Bikes are retrieved succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const getSingleBike = async (req: Request, res: Response) => {
  try {
    const { bikeId } = req.params;

    const result = await BikeService.getSingleBikeFromDB(bikeId);

    res.status(200).json({
      success: true,
      message: 'Bike is retrieved succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const deleteBike = async (req: Request, res: Response) => {
  try {
    const { bikeId } = req.params;

    const result = await BikeService.deleteBikeFromDB(bikeId);

    res.status(200).json({
      success: true,
      message: 'Bike is deleted succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export const StudentControllers = {
  createBike,
  getAllBikes,
  getSingleBike,
  deleteBike,
};
