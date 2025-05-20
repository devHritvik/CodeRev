# Code Learning Platform

A web-based learning platform for programming languages and web technologies.

## Features

- Interactive learning content
- Code examples
- Practice exercises
- MongoDB Atlas integration
- RESTful API

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- RESTful API

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd code-learning-platform
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
NODE_ENV=development
```

4. Start the development server:
```bash
npm run dev
```

## API Endpoints

- GET `/api/categories` - Get all categories
- GET `/api/categories/:id` - Get single category
- POST `/api/categories` - Create category
- PATCH `/api/categories/:id` - Update category
- DELETE `/api/categories/:id` - Delete category

## Project Structure

```
src/
├── config/         # Configuration files
├── controllers/    # Route controllers
├── middleware/     # Custom middleware
├── models/         # MongoDB models
├── routes/         # Route definitions
├── services/       # Business logic
├── utils/          # Utility functions
└── server.js       # Main application file
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 
