import connectToDatabase from '../db';
import User from '../models/User';
import { success, failure, updateBody } from "../libs/response-lib";

export async function byId(event, context) {
    context.callbackWaitsForEmptyEventLoop = false;
    let updateBody = JSON.parse(event.body);
    Object.assign(updateBody, { modified: new Date() });

    try {
        await connectToDatabase();
        let user = await User.findByIdAndUpdate(
            event.pathParameters.id,
            updateBody,
            { new: true }
        );

        return user ? success(user) : success('No user found');

    } catch (err) {
        console.log('Error updating User by ID:', err);
        return failure({ status: false });
    }
}

export async function consentByPhone(event, context) {
    context.callbackWaitsForEmptyEventLoop = false;
    const queryPhone = { 'phone': event.pathParameters.phone };
    const data = JSON.parse(event.body);
    Object.assign(data, { optin_date: new Date() });
    console.log(typeof data.consent);
    const put = updateBody('CONSENT', data);

    try {
        await connectToDatabase();
        const user = await User.findOneAndUpdate(
            queryPhone,
            put,
            { new: true }
        );

        return user ? success(user) : success('No user found');

    } catch (err) {
        console.log('Error getting User by ID:', err);
        return failure({ status: false });
    }
}

export async function capturePreapproval(event, context) {
    context.callbackWaitsForEmptyEventLoop = false;
    const queryPhone = { 'phone': event.pathParameters.phone };
    const data = JSON.parse(event.body);
    Object.assign(data, { approval_date: new Date() });
    const put = updateBody('APPROVAL', data);

    try {
        await connectToDatabase();
        const user = await User.findOneAndUpdate(
            queryPhone,
            put,
            { new: true, omitUndefined: true }
        );

        return user ? success(user) : success('No user found');

    } catch (err) {
        console.log('Error updating user with preapproval:', err);
        return failure({ status: false });
    }
}

export async function captureCheckout(event, context) {
    context.callbackWaitsForEmptyEventLoop = false;
    const queryPhone = { 'phone': event.pathParameters.phone };
    const data = JSON.parse(event.body);
    Object.assign(data, { checkout_date: new Date() });
    const put = updateBody('CHECKOUT', data);

    try {
        await connectToDatabase();
        const user = await User.findOneAndUpdate(
            queryPhone,
            put,
            { new: true, omitUndefined: true }
        );

        return user ? success(user) : success('No user found');

    } catch (err) {
        console.log('Error updating user checkout:', err);
        return failure({ status: false });
    }
}

