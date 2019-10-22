import connectToDatabase from '../db';
import User from '../models/User';
import { success, failure } from "../libs/response-lib";

export async function removeById(event, context) {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await connectToDatabase();
        const user = await User.findByIdAndRemove(event.pathParameters.id);
        return success(user);
    } catch (err) {
        console.log('Error creating new User:', err);
        return failure({ status: false });
    }
}