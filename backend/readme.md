# SmartSky Backend API Documentation

## Base URL
```
http://localhost:4000/api
```

## Authentication Routes

### 1. User Signup
Register a new user account.

- **URL**: `/signup`
- **Method**: `POST`
- **Content-Type**: `application/json`

**Request Body**:
```json
{
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "password": "securepassword123",
    "contact": 1234567890
}
```

**Success Response**:
```json
{
    "success": true,
    "message": "User Successfully Registered",
    "data": {
        "firstname": "John",
        "lastname": "Doe",
        "email": "john.doe@example.com",
        "contact": 1234567890,
        "_id": "user_id",
        "password": "hashed_password"
    }
}
```

### 2. User Login
Authenticate a user and receive a JWT token.

- **URL**: `/login`
- **Method**: `POST`
- **Content-Type**: `application/json`

**Request Body**:
```json
{
    "email": "john.doe@example.com",
    "password": "securepassword123"
}
```

**Success Response**:
```json
{
    "success": true,
    "token": "jwt_token_string",
    "user": {
        "email": "john.doe@example.com",
        "firstname": "John",
        "lastname": "Doe",
        "contact": 1234567890,
        "_id": "user_id"
    },
    "message": "Logged In Successfully!"
}
```

### 3. User Logout
Logout the currently authenticated user.

- **URL**: `/logout`
- **Method**: `GET`
- **Authentication**: Required (JWT Token in cookie)

**Success Response**:
```json
{
    "success": true,
    "message": "Logged Out Successfully"
}
```

## Models

### User Model
```javascript
{
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        trim: true
    }
}
```

## Error Responses

### 400 Bad Request
```json
{
    "success": false,
    "message": "User already exists."
}
```

### 401 Unauthorized
```json
{
    "success": false,
    "message": "Password is Incorrect"
}
```

### 403 Forbidden
```json
{
    "success": false,
    "message": "All fields are required"
}
```

### 500 Internal Server Error
```json
{
    "success": false,
    "error": "error message",
    "message": "Login Failure, Please Try Again"
}
```