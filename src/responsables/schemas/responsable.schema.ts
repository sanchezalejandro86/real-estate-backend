import * as mongoose from 'mongoose';

export const ResponsableSchema = new mongoose.Schema({
    name: String,
    type: Number,
    url: String,
});