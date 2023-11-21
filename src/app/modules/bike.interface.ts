import { Model } from "mongoose";

export type TEngine = {
    power: number;
    torque: number;
    cc: number;
    milage: number;
    break: string;
    tyre: string;
    valves: number;
}

export type TInformation = {
    name: string;
    brand: string;
    seller: string;
    year?: number;
    madeIn?: string;
}

export type TBike = {
    id: string;
    info: TInformation;
    price: number;
    types: 'bike' | 'scooter' | 'electric';
    engine: TEngine;
    isDeleted: boolean;
}

export interface BikeModel extends Model<TBike>{
    // eslint-disable-next-line no-unused-vars
    isBikeExists(id: string): Promise<TBike | null>;
}