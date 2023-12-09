# Sneaker Store API

## Description
This project implements a RESTful API for a sneaker store using Express.js and MongoDB. The API allows users to query products in stock, retrieve user information, and determine special pricing for specific clients based on certain products and brands.

## Features
- **List Products**: Retrieve an array of products that are currently in stock.
- **User Information**: Access information of users, including special pricing data.
- **Special Pricing**: Determine special prices for a given client and product, if applicable. Otherwise, provide the base price of the product.

## Technologies Used
- **Node.js**: JavaScript runtime for building the server-side of the application.
- **Express.js**: Web application framework for Node.js to handle HTTP requests.
- **MongoDB**: NoSQL database to store user and product data.
- **Mongoose**: MongoDB object modeling tool designed to work in an asynchronous environment.

## Setup and Installation
1. Clone the repository to your local machine.
2. Install Node.js and MongoDB if not already installed.
3. Navigate to the project directory and run `npm install` to install dependencies.
4. Start the MongoDB service on your machine.
5. Use the following command to start the application:
6. The server will start running on `http://localhost:3000`.

## API Endpoints
- `GET /api/products`: Fetches all products that are currently in stock.
- `GET /api/users`: Retrieves all user information, including special pricing.
- `GET /api/price/:userId/:productName`: Provides the special price for a given client and product, or the base price if no special pricing is available.

## Database Configuration
The database connection requires the following credentials (provided in the project):
- **User**: `drenvio`
- **Password**: `moM5f3AodwLE5d0A`

Ensure that these credentials are correctly set up in your MongoDB connection string.

## Challenges and Learnings
- Implementing the `/price/:userId/:productName` endpoint was particularly challenging, requiring careful handling of special pricing logic.
- This project was an excellent opportunity to improve backend development skills, especially in handling complex logic and database operations.

## Future Improvements
- Additional endpoints for CRUD operations for users and products.
- Enhanced error handling and data validation.

## Contact
For any further queries or feedback, please reach out to [javierandres.008@hotmail.com].

---
