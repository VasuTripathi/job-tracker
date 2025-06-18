# 📋 Job Application Tracker

A full-stack job tracking application (Mini CRM) built as part of the Shelfex Full-Stack Internship – Task 4. This tool allows users to manage and monitor job applications with features like status tracking, notes, and secure authentication.

## 🚀 Live Demo

- Frontend (Vercel): https://job-tracker.vercel.app  
- Backend (Render): https://job-tracker-backend.onrender.com  
- Demo Video (YouTube): https://youtu.be/your-demo-video-link  

## 🛠️ Tech Stack

- Frontend: React, Tailwind CSS, Axios, React Router
- Backend: Node.js, Express, Mongoose
- Database: MongoDB Atlas
- Authentication: JSON Web Tokens (JWT), bcryptjs
- Hosting: Vercel (frontend), Render (backend)

## 🔐 Features

- ✅ User Signup and Login (JWT-based authentication)
- ✅ Add New Job Entries (Company, Role, Date, Status, Notes)
- ✅ View All Job Applications in a dashboard
- ✅ Responsive UI with Tailwind CSS
- ✅ Protected Routes using JWT
- ✅ Live Deployment with cloud database (MongoDB Atlas)

## 📂 Folder Structure

job-tracker/
├── backend/ # Express API
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── server.js
├── frontend/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ └── App.js
│ ├── public/
│ └── tailwind.config.js

markdown
Copy
Edit

## 🧪 API Endpoints

| Method | Endpoint             | Description                     |
|--------|----------------------|---------------------------------|
| POST   | /api/auth/signup     | Register new user               |
| POST   | /api/auth/login      | Login user                      |
| GET    | /api/jobs            | Get all jobs (for user)         |
| POST   | /api/jobs            | Add a new job application       |

## 🌐 Deployment

- Frontend: Deployed to Vercel
- Backend: Deployed to Render
- Database: MongoDB Atlas (cloud-hosted)
- Environment Variables used in backend:
  - MONGO_URI
  - JWT_SECRET


## 🧠 Learnings

- Complete MERN stack integration
- JWT authentication & protected routes in React
- Tailwind CSS for clean, mobile-responsive UI
- Hosting backend + frontend with live DB

## 🚧 Future Enhancements

- Edit / Delete job entries
- Filter / Sort by date or status
- Email reminders / resume upload
- UI animations or dark mode toggle

## 🙏 Acknowledgements

- Shelfex Internship Task Sheet
- MongoDB Atlas for free-tier database
- Render & Vercel for cloud hosting

## 📧 Contact

Created by [Vasu Tripathi](tripathivasu7@gmail.com)

Feel free to fork or contribute!

Frontend (Vercel):-https://job-tracker-orpin.vercel.app/
Backend (Render):-https://job-tracker-ylii.onrender.com
