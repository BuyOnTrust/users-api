import connectToDatabase from '../db';
import User from '../models/User';
import { success, failure } from "../libs/response-lib";

export async function byId(event, context) {
    context.callbackWaitsForEmptyEventLoop = false;

    try {
        await connectToDatabase();
        let updateBody = JSON.parse(event.body);
        Object.assign(updateBody, { modified: new Date() });

        let user = await User.findByIdAndUpdate(
            event.pathParameters.id,
            updateBody,
            { new: true }
        );
        return success(user);
    } catch (err) {
        console.log('Error updating User by ID:', err);
        return failure({ status: false });
    }
}

export async function consentByPhone(event, context) {
    context.callbackWaitsForEmptyEventLoop = false;
    const data = JSON.parse(event.body);
    try {
        let updateBody = {
            consent: data.consent,
            modified: new Date()
        };
        await connectToDatabase();
        const user = await User.findOne({ 'phone': event.pathParameters.phone });

        if (user) {

            const updateUserConsent = await User.findByIdAndUpdate(
                user.id,
                updateBody,
                { new: true }
            );
            return success(updateUserConsent);
        } else {
            return success('No user found');
        };
    } catch (err) {
        console.log('Error getting User by ID:', err);
        return failure({ status: false });
    }
}
