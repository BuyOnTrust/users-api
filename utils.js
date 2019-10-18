const getResponseObject = () => {
    return {
        'Access-Control-Allow-Origin': '*'
    };
};

const getErrorObject = () => {
    return {
        'Access-Control-Allow-Origin': '*'
    };
};

module.exports = {
    getResponseObject,
    getErrorObject
};