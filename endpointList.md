# Endpoints

```bash
--> CREATE <--
createUser
  POST - https://0fnea8w1ve.execute-api.us-east-1.amazonaws.com/prod/api/user

--> READ <--
getOne
  GET - https://0fnea8w1ve.execute-api.us-east-1.amazonaws.com/prod/api/user/{id}
getOneByPhone
  GET - https://0fnea8w1ve.execute-api.us-east-1.amazonaws.com/prod/api/phone/{phone}
getAll
  GET - https://0fnea8w1ve.execute-api.us-east-1.amazonaws.com/prod/api/users

--> UPDATE <--
updateById
  PUT - https://0fnea8w1ve.execute-api.us-east-1.amazonaws.com/prod/api/user/{id}
updateConsent
  PUT - https://0fnea8w1ve.execute-api.us-east-1.amazonaws.com/prod/api/consent/{phone}
capturePreapproval
  PUT - https://0fnea8w1ve.execute-api.us-east-1.amazonaws.com/prod/api/capture/preapproval/{phone}
captureCheckout
  PUT - https://0fnea8w1ve.execute-api.us-east-1.amazonaws.com/prod/api/capture/checkout/{phone}
  
--> DELETE <--
deleteById
  DELETE - https://0fnea8w1ve.execute-api.us-east-1.amazonaws.com/prod/api/user/{id}

```
