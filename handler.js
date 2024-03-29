'use strict';

require('dotenv').config({ path: './variables.env' });
const connectToDatabase = require('./db');
const User = require('./models/User');

const utils = require('./utils.js');

module.exports.create = async (event, context) => {
  try {
    context.callbackWaitsForEmptyEventLoop = false;
    await connectToDatabase()
    const user = await User.create(JSON.parse(event.body))
    
    let response = utils.getResponseObject();
    Object.assign(response, { body: JSON.stringify(user) });

    return response;
    
  } catch (err) {
    console.log(
      'Error creating new User:',
      err
    );
    return {
      statusCode: err.statusCode ? err.statusCode : 500,
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(err.message ? 
        'Could not create the user:' + err.message : 
        'Uknown error: Could not create the user.'
        )
    };
  }
}

module.exports.getOne = async (event, context) => {
  try {
    context.callbackWaitsForEmptyEventLoop = false;
    await connectToDatabase();
    const user = await User.findById(event.pathParameters.id);

    let response = utils.getResponseObject();
    Object.assign(response, { body: JSON.stringify(user) });

    return response;
    
  } catch (err) {
    console.log(
      'Error fetching the user:',
      err
    );
    return {
      statusCode: err.statusCode ? err.statusCode : 500,
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(err.message ?
        'Could not fetch the user:' + err.message :
        'Uknown error: Could not fetch the user.'
      )
    };
  }
};

module.exports.getUserIdByPhone = async (event, context) => {
  try {
    let body;
    context.callbackWaitsForEmptyEventLoop = false;
    await connectToDatabase();
    const user = await User.findOne({ 'phone': event.pathParameters.phone });

    if(user) {
      body = JSON.stringify({
        id: user.id,
        consent: user.consent
      })
    } else {
        body = 'No user found';
    };

    let response = utils.getResponseObject();
    Object.assign(response, { body });

    return response;

  } catch (err) {
    console.log(
      'Error fetching user by phone number:',
      err
    );
    return {
      statusCode: err.statusCode ? err.statusCode : 500,
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(err.message ?
        'Could not fetch user by phone number:' + err.message :
        'Uknown error: Could not fetch the user.'
      )
    };
  }
};

module.exports.getAll = async (context) => {
  try {
    context.callbackWaitsForEmptyEventLoop = false;
    await connectToDatabase();
    const users = await User.find();

    let response = utils.getResponseObject();
    Object.assign(response, { body: JSON.stringify(users) });

    return response;

  } catch (err) {
    console.log(
      'Error fetching the users:',
      err
    );
    return {
      statusCode: err.statusCode ? err.statusCode : 500,
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(err.message ?
        'Could not fetch the users:' + err.message :
        'Uknown error: Could not fetch the users.'
      )
    };
  }
};

module.exports.update = async (event, context) => {
  try {
    context.callbackWaitsForEmptyEventLoop = false;
    await connectToDatabase();

    let updateBody = JSON.parse(event.body);
    Object.assign(updateBody, { modified: new Date() });
    
    let user = await User.findByIdAndUpdate(
      event.pathParameters.id, 
      updateBody, 
      { new: true }
    );
    
    let response = utils.getResponseObject();
    Object.assign(response, {
      body: JSON.stringify({
        message: 'Updated user:' + event.pathParameters.id,
        data: user
      })
    });

    return response;

  } catch (err) {
    console.log(
      'Error updating the user:',
      err
    );
    return {
      statusCode: err.statusCode ? err.statusCode : 500,
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(err.message ?
        'Could not update the user:' + err.message :
        'Uknown error: Could not update the user.'
      )
    };
  };
};

module.exports.delete = async (event, context) => {
  try {
    context.callbackWaitsForEmptyEventLoop = false;
    await connectToDatabase();
    const user = await User.findByIdAndRemove(event.pathParameters.id);

    let response = utils.getResponseObject();
    Object.assign(response, { 
      body: JSON.stringify({ 
        message: 'Removed user with id: ' + user._id, 
        user: user 
      }) 
    });

    return response;

  } catch (err) {
    console.log(
      'Error deleting the user:',
      err
    );
    return {
      statusCode: err.statusCode ? err.statusCode : 500,
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(err.message ?
        'Could not delete user:' + err.message :
        'Uknown error: Could not delete user.'
      )
    };
  };
};