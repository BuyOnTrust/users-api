import connectToDatabase from '../db';
import User from '../models/User';
import { success, failure } from "../libs/response-lib";

export async function getOne(event, context) {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await connectToDatabase();
        const user = await User.findById(event.pathParameters.id);
        return success(user);
    } catch (err) {
        console.log('Error getting User by ID:', err);
        return failure({ status: false });
    }
}

export async function getUserByPhone(event, context) {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await connectToDatabase();
        const user = await User.findOne({ 'contact.phone': event.pathParameters.phone });
        return user ? success(user) : success('No user found');
    } catch (err) {
        console.log('Error getting User by Phone:', err);
        return failure({ status: false });
    }
}

export async function getAllUsers(context) {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await connectToDatabase();
        const users = await User.find();
        return success(users);
    } catch (err) {
        console.log('Error getting all users:', err);
        return failure({ status: false });
    }
}