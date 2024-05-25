# Blogify

## Tech Stack

- Frontend: React
- Backend: Node.js (Express)
- Database: MongoDB

## Features

- User authentication (registration and login)
- Create, read, update, and delete blog posts
- Track and display posts read by users
- Responsive design
- Markdown editor for post creation
- Header image upload for posts

## Installation

### Backend

1. Create a `.env` file in the backend directory with the following content:

   ```
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

2. Install dependencies and start the server:
   ```bash
   cd backend
   npm install
   npm run dev
   ```

### Frontend

1. Install dependencies and start the development server:
   ```bash
   cd frontend
   npm install
   npm start
   ```

## Deployment

### Backend

1. Set up a cloud MongoDB database (e.g., MongoDB Atlas).
2. Deploy the backend to a service like Heroku or AWS, ensuring environment variables are correctly set.

### Frontend

1. Build the React application:
   ```bash
   npm run build
   ```
2. Deploy the static files to a hosting service like Netlify, Vercel, or GitHub Pages.
