# To-Do Application

A simple To-Do application with user authentication and CRUD (Create, Read, Update, Delete) functionalities for managing tasks.

---

## Features

- **User Authentication**
  - Register, Login, and Logout functionality using JWT.
- **To-Do Management**
  - Add, edit, delete, and view tasks.

---

## Tech Stack

### Frontend:

- ReactJS
- React Router

### Backend:

- NodeJS
- ExpressJS
- JWT for authentication
- Bcrypt for password hashing

### Database:

- MongoDB (Mongoose for ORM)

---

### Setup

#### 1. Clone the repository:

```bash
git clone https://github.com/duyetnt-pascalia/todo-app.git
```

#### 2. Using Docker

- Install Docker
- Run this command in project directory
  ```
  docker-compose up --build
  ```

#### 3. Not using Docker

##### Set up Frontend:

- Navigate to `frontend` folder and run
  ```
  npm install
  npm run dev
  ```

##### Set up Backend

- Navigate to `backend` folder and run
  ```
  npm install
  npm run dev
  ```

### API endpoints

#### Authentication

- `POST /api/auth/signup` - Register new account
- `POST /api/auth/login` - Login account

#### To-do

- `GET /api/todo` - Get all tasks for the authenticated user.
- `POST /api/todo` - Add a new task.
- `PUT /api/todo/:id` - Update an existing task.
- `DELETE /api/todo/:id` - Delete a task.
