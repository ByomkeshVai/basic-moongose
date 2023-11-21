import { Schema, model } from 'mongoose';
import { BikeModel, TBike, TEngine, TInformation } from './modules/bike.interface';

const engineSchema = new Schema<TEngine>({
    power: {
        type: Number,
        required: [true, "Bike Power Should Be Required"],
        trim: true,
    },
    torque: {
        type: Number,
        required: [true, "Bike Torque Should Be Required"],
        trim: true,
    },
    cc: {
        type: Number,
        required: [true, "Bike Power Should Be Required"],
        trim: true,
    },
    milage: {
        type: Number,
        required: [true, "Bike milage Should Be Required"],
        trim: true,
    },
    break: {
        type: String,
        required: [true, "Bike break Should Be Required"],
    },
    tyre: {
        type: String,
        required: [true, "Bike tyre Should Be Required"],
        trim: true,
    },
    valves: {
        type: Number,
        required: [true, "Bike valves Should Be Required"],
        trim: true,
        maxlength: [1, 'Valves Should be in 1 value'],
    },
});

const informationSchema = new Schema<TInformation>({
    name: {
        type: String,
        required: [true, "Bike Name Should Be Required"],
    },
    brand: {
        type: String,
        required: [true, "Bike brand Should Be Required"],
    },
    seller: {
        type: String,
        required: [true, "Bike seller Should Be Required"],
    },
    year: {
        type: Number,
        required: false,
    },
    madeIn: {
        type: String,
        required: false,
    },
});

const bikeSchema = new Schema<TBike, BikeModel>({
    id: {
        type: String,
        required: [true, 'ID is required'],
        unique: true,
    },
    info: {
        type: informationSchema,
         required: [true, 'Bike Info is required'],
    },
    price: {
        type: Number,
        required: [true, "Bike Price Should Be Required"],
    },
    types: {
        type: String,
        enum: {
            values: ['bike', 'scooter', 'electric'],
            message: "{VALUE} is not a valid types",
        },
        required: [true, 'Bike types is required'],
    },
    engine: {
        type: engineSchema,
        required: [true, 'ID is required'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
})


bikeSchema.statics.isBikeExists =async (id:string) => {
    const existingBike = await Bike.findOne({ id });
    return existingBike;
}


export const Bike = model<TBike, BikeModel>('Bike', bikeSchema);