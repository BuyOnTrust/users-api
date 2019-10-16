'use strict';

require('dotenv').config({ path: './variables.env' });
const connectToDatabase = require('./db');
const User = require('./models/User');

module.exports.create = async (event, context) => {
  try {
    context.callbackWaitsForEmptyEventLoop = false;
    await connectToDatabase()
    const user = await User.create(JSON.parse(event.body))
    return {
      statusCode: 200,
      body: JSON.stringify(user)
    }
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
    return {
      statusCode: 200,
      body: JSON.stringify(user)
    }
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

module.exports.getUserByPhone = async (event, context) => {
  try {
    context.callbackWaitsForEmptyEventLoop = false;
    await connectToDatabase();
    const user = await User.findOne({ 'phone': event.pathParameters.phone });
    return {
      statusCode: 200,
      body: JSON.stringify(user)
    }
  } catch (err) {
    console.log(
      'Error fetching the user with phone number:',
      err
    );
    return {
      statusCode: err.statusCode ? err.statusCode : 500,
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify(err.message ?
        'Could not fetch the user with phone number:' + err.message :
        'Uknown error: Could not fetch the user with phone number.'
      )
    };
  }
};

module.exports.getAll = async (context) => {
  try {
    context.callbackWaitsForEmptyEventLoop = false;
    await connectToDatabase();
    const users = await User.find();
    return {
      statusCode: 200,
      body: JSON.stringify(users)
    }
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
    user.updatedAt = new Date();
    return {
      statusCode: 200,
      body: JSON.stringify(user)
    }
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
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Removed user with id: ' + user._id, user: user })
    }
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