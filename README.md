# Trivia Game Backend

## Overview

This project is the backend service for the Trivia Game application. It provides API endpoints for managing trivia questions and categories.

The backend is built using **Node.js**, **Express**, and **MongoDB**, ensuring a scalable and efficient RESTful API.

## Technologies Used

- **Node.js** - for backend runtime
- **Express** - for creating RESTful API routes
- **MongoDB** (with Mongoose) - for storing trivia questions
- **CORS** - for handling cross-origin requests
- **dotenv** - for managing environment variables
- **Git & GitHub** - for version control

## Architectural Breakdown

### Backend

- Built using **Express.js**, with API endpoints for fetching trivia questions
- **MongoDB** is used as the database, with **Mongoose** as the ORM.
- **CORS** is configured to allow frontend communication.
- API endpoints ensure data validation and enforce game logic.
- Environment variables are managed using **dotenv**.

### Frontend

- The frontend is a React-based application that communicates with this backend to retrieve trivia questions and submit scores.

#### Frontend Repository

The frontend repository is available at: [Trivia-App-FE](https://github.com/tchowdhuryf/Trivia-App-FE)

## API Endpoints

| Method | Endpoint                               | Description                            |
|--------|----------------------------------------|----------------------------------------|
| POST   | `/api/trivia/categories/:category`     | Adds a new question to category         |
| GET    | `/api/trivia/categories/:category`     | Retrieves a list of trivia questions   |
| GET    | `/api/trivia/categories/:category/:id` | Retrieves one question from category   |
| GET    | `/api/trivia/categories`               | Retrieves a list of categories         |
| PATCH  | `/api/trivia/categories/:category/:id` | Update existing question from category |
| DELETE | `/api/trivia/categories/:category/:id` | Deletes one question from category   |

## Setup and Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/tchowdhuryf/Trivia-App-BE.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Trivia-App-BE
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Set up environment variables by creating a `.env` file in the root directory:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```
5. Seed the database:
   ```sh
   node seed.js
   ```
6. Start the server:
   ```sh
   npm start
   ```
7. The backend should now be running at `http://localhost:5000/`.

## Unsolved Problems

- User authentication is not implemented yet.

## Future Enhancements

- Implement user authentication and authorization.
- Add support for additional game modes.
- Improve database schema for better scalability.