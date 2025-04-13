# Overview
This project is a MERN stack (MongoDB, Express.js, React.js, Node.js) based Ecommerce Dashboard. It allows users to register, authenticate, and manage ecommerce categories through a secure and user-friendly interface. It also includes features like protected routes, profile management, and category search functionalities.

# Tech Stack
# Frontend

1. React JS: Used for building the user interface using components.
2. CSS & Flexbox: For styling and layout design.
3. React Icons: Provides a collection of customizable icons.
4. React Loader Spinner (BallTriangle): Displays loading indicators.
5. React Toastify: Used for displaying toast notifications.
6. Axios: Handles API requests from frontend to backend.


# Backend

1. Node JS & Express JS: Handle server-side logic and API endpoints.
2. MongoDB & Mongoose: For storing and managing data.
3. JSON Web Token (JWT): For secure authentication.

# Key Features 

# 1. User Registration:
1. New users can register through a form.
2. The data is validated and stored in MongoDB via the backend.

# 2. User Authentication:
1. Users log in with email and password.
2. JWT is used to generate tokens upon successful login.
3. Tokens are stored and used to verify users on protected routes.

# 3. User Profile Section:
1. Displays user's profile data after successful authentication.
2. The profile can only be viewed by logged-in users.

# 4. Logout Functionality:
1. Clears the stored JWT token (usually from localStorage or cookies).
2. Redirects the user back to the login or home screen.

# 5. Search Category Functionality:
1. Users can search through a list of ecommerce categories.
2. Useful for quickly finding specific items or groups.

# 6. Ecommerce Categories Dashboard:
1. A panel displaying all product categories.
2. Uses a responsive UI built with Flexbox.

# 7. ProtectedRoute:
1. A Higher Order Component (HOC) is used to guard certain routes.
2. Only authenticated users (with valid JWT tokens) can access dashboard features.

# 8. Add Category using POSTMAN:
1. Admin or developer can send a POST request to the backend API via POSTMAN to add new categories manually.
2. Useful during development or for testing backend endpoints.

# Github Repositories
1. Frontend: https://github.com/Tarun0204/Dashboard_Frontend
2. Backend: https://github.com/Tarun0204/Dashboard_Backend
   
# Live Website
1. Frontend: https://dashboard-frontend-black.vercel.app/
2. Backend: https://dashboard-backend-hmq1.onrender.com

# How to run the project locally:
Please follow the Video Instructions: https://drive.google.com/file/d/1nfpYjsiYUVBU7P7UesYuswWCI9L-P7nk/view?usp=drivesdk

# Screenshots of the Dashboard
Drive Link: https://drive.google.com/drive/folders/1YFw3-KZcRIS0owGLbFD4s7MK1052AjHY
