import { Schema, model } from 'mongoose';

export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
    address: string;
    isAdmin: boolean;
    token: string;
}

const userSchema = new Schema<User>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        address: { type: String, required: true },
        isAdmin: { type: Boolean, required: true },
        token: { type: String }
    },
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
        timestamps: true,
    }
);

export const UserModel = model<User>('User', userSchema);
