# Contact Organizer Backend API

This repository contains the backend API for the Contact Organizer, a project designed to manage contact information securely and efficiently. The API is built using Node.js, Express.js, and MongoDB, offering features such as authentication, validation, and CRUD operations for user and contact data.

## Features

- **User Authentication:** Secure user registration and login with password hashing and JWT-based authentication.
- **Contact Management:** Create, read, update, and delete (CRUD) operations for contact information, securely linked to the authenticated user.
- **Token Validation:** Middleware to validate JWT tokens ensuring secure access to API endpoints.
- **Error Handling:** Comprehensive error handling middleware that provides clear and descriptive error messages.
- **Database Connection:** Seamless MongoDB integration with reliable connection management.

## Prerequisites

- Node.js
- MongoDB
- npm (Node Package Manager)

## Installation

1. Clone the repository:

  ```bash
  git clone https://github.com/zhangandrew2/ContactOrganizer.git
  ```
2. Navigate to the project directory:

  ```bash
  cd ContactOrganizer
  ```
3. Install the necessary dependencies:

  ```bash
  npm install
```
4.	Modify the .env file in the root directory adjust the following environment variables:

  ```bash
  ACCESS_TOKEN_SECRET=your_jwt_secret
  MONGO_URI=your_mongodb_uri
  PORT=your_preferred_port
```

## Running the Application

To run the application in development mode, use:
```bash
npm run dev
```

## API Endpoints

### User Routes

- **POST /api/users/register**: Register a new user.
- **POST /api/users/login**: Log in an existing user.
- **GET /api/users/current**: Retrieve the current user's information.

### Contact Routes

- **GET /api/contacts**: Get all contacts for the authenticated user.
- **POST /api/contacts**: Create a new contact.
- **GET /api/contacts/:id**: Get a specific contact by ID.
- **PUT /api/contacts/:id**: Update a contact by ID.
- **DELETE /api/contacts/:id**: Delete a contact by ID.
## Middleware

- **validateTokenHandler.js**: Validates JWT tokens to secure routes.
- **errorHandler.js**: Handles various types of errors and provides meaningful responses.

## Database

- **dbConnection.js**: Manages the connection to MongoDB using Mongoose.

## Constants

- **constants.js**: Defines various HTTP status codes used throughout the application for error handling.
