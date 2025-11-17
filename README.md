🍰 Bakery Fullstack App

A full-featured e-commerce bakery web application built using MERN Stack (MongoDB, Express, React, Node.js, Redux) with complete user authentication, admin management, product handling, and order workflows.

🚀 Features
🌐 Frontend (React + Redux Toolkit)

Modern, responsive UI with beautiful hero, about, services, and featured sections

Product listing with categories, filtering, and dynamic cart management

Authentication pages (Login & Register)

Protected routes using a custom CheckAuth component

Separate layouts:

Hero Layout – homepage & static sections

Shopping Layout – shop, product details, cart, checkout

Admin Layout – dashboard, products, orders

🔐 Backend (Node.js + Express)

Secure JWT Authentication & Authorization

Role-based access: Admin and User

REST APIs for:

User registration & login

Products (CRUD for admins)

Cart operations

Order creation & management

Middleware for route protection & error handling

🗄️ Database (MongoDB + Mongoose)

Product schema

User schema with roles

Order schema

Cart & quantity updates

🛠️ Tech Stack
Frontend

React

Redux Toolkit

React Router

Tailwind CSS

ShadCN UI

Lucide Icons

Backend

Node.js

Express.js

MongoDB

Mongoose

bcrypt

jsonwebtoken

👨‍🍳 Admin Features

Add new products

Edit & update products

Delete products

Manage customer orders (approve, reject, etc.)


📦 Future Improvements

Payment integration (Stripe)

Inventory tracking

Sales analytics dashboard

Customer reviews & ratings

Admin charts using Recharts

🧑‍💻 Author

Samison Gidey
Full-Stack Developer
(MERN, React, Tailwind, Node.js)

📁 Project Structure

///bash
Bakery-Fullstack-App/
│
├── client/                # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── store/
│   │   └── App.jsx
│   └── ...
│
├── server/                # Node + Express backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
└── README.md
