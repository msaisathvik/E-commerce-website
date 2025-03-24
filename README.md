# E-commerce-website# E-Commerce Website

## 📌 Project Overview
This is a full-stack e-commerce website for clothes  built using **Vite (React) for the frontend** and **Node.js with Express for the backend**. It supports user authentication, product management, and order processing.

---

## 📥 Cloning the Repository
To pull the project from GitHub, run:
```sh
git clone https://github.com/your-username/e-commerce-website.git
cd e-commerce-website
```

---

## 🚀 Backend Setup (Node.js + Express)
### 1️⃣ Navigate to the Backend Directory
```sh
cd backend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the `backend` directory and add:
```env
MONGODB_URI = "your_mongodb_URI"
CLOUDINARY_API_KEY = "your_cloudinary_api_key"
CLOUDINARY_SECRET_KEY="your_cloudinary_secret_key"
CLOUDINARY_NAME="coludinary_name"
JWT_SECRET="sathvik"    
ADMIN_EMAIL="admin@forever.com"
ADMIN_PASSWORD="9515219991"
STRIPE_SECRET_KEY="your_stripe_secret_key"
```

### 4️⃣ Start the Backend Server
```sh
nodemon server.js
```
Backend will run on: **http://localhost:5000**

---

## 💻 Frontend Setup (Vite + React)
### 1️⃣ Navigate to the Frontend Directory
```sh
cd ../frontend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the `frontend` directory and add:
```env
VITE_API_URL=http://localhost:4000
```

### 4️⃣ Start the Frontend Server
```sh
npm run dev
```
Frontend will run on: **http://localhost:5173**

---

## 🎯 Features
- User authentication (JWT)
- Product listings and categories
- Shopping cart and checkout
- Payment integration using Stripe

---

## 🛠 Tech Stack
**Frontend:** React, Vite, Tailwind CSS  
**Backend:** Node.js, Express.js, MongoDB, JWT  
**Database:** MongoDB  

---

## 🤝 Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m "Added new feature"`)
5. Push to your branch (`git push origin feature-branch`)
6. Create a Pull Request


