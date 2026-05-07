# Tech Stark Admin Portal

A simple and beginner-friendly **Student Management System** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. This project helps administrators manage student records efficiently with CRUD operations.

---

# Features

* Add Student
* Edit Student Details
* Delete Student
* Search Student
* View All Students
* Responsive Admin Dashboard
* MongoDB Database Integration

---

# Tech Stack

## Frontend

* React.js
* Vite
* CSS / TailwindCSS

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

---

# Project Structure

```bash
Tech-Stark-Admin-Portal/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/kalviumcommunity/Tech-Stark-Admin-Portal.git
```

---

# Backend Setup

```bash
cd server
npm install
npm start
```

---

# Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

# Environment Variables

Create a `.env` file inside the server folder.

```env
MONGO_URI=mongodb://127.0.0.1:27017/techstark
PORT=5000
```

---

# API Endpoints

| Method | Endpoint      | Description      |
| ------ | ------------- | ---------------- |
| GET    | /students     | Get all students |
| POST   | /students     | Add student      |
| PUT    | /students/:id | Update student   |
| DELETE | /students/:id | Delete student   |

---

# Student Schema

```javascript
{
  name: String,
  email: String,
  course: String,
  phone: String
}
```

---

# Sample Student Data

```json
{
  "name": "Sharon",
  "email": "sharon@gmail.com",
  "course": "BCA",
  "phone": "9876543210"
}
```

---

# Future Improvements

* Authentication System
* Dark Mode
* Export PDF
* Pagination
* Student Profile Image Upload

---

# Deployment

## Frontend

* Vercel
* Netlify

## Backend

* Render
* Railway

---

# Project Objective

The objective of this project is to simplify student record management using a web-based admin portal. Administrators can efficiently perform CRUD operations and manage student information through a user-friendly interface.

---

# Conclusion

Tech Stark Admin Portal is a beginner-friendly MERN stack project that demonstrates full-stack development concepts including frontend development, backend API creation, database integration, and CRUD operations.

---

# Author

Sharon
dharshni
varsha
