import connectToDatabase from '../db';
import User from '../models/User';
import { success, failure } from "../libs/response-lib";

export async function newUser(event, context) {
    context.callbackWaitsForEmptyEventLoop = false;
    const data = JSON.parse(event.body);

    try {
        await connectToDatabase();
        const response = await User.create(data);
        return success(response);
    } catch (err) {
        console.log('Error creating new User:', err);
        return failure({ status: false });
    }
}