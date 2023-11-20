import express from 'express';
import { BikeControllers } from './bike.controller';

const router = express.Router();

router.post('/create-bike', BikeControllers.createBike)
router.get('/:bikeId', BikeControllers.getSingleBike)
router.delete('/:bikeId', BikeControllers.deleteBike)
router.get('/all-bike', BikeControllers.getAllBikes)

export const BikeRouters = router;