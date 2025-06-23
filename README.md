## Live preview: https://airspace-tmv2.netlify.app/dashboard

# AirSpace-TM Documentation
## Table of Contents
- Overview
- Features
- Tech Stack
- Project Structure
- Setup & Installation
- Environment Variables
- Running the App
- Deployment
- API Endpoints
- Frontend Usage
- Authentication & Authorization
- Security Best Practices
- Performance & Scalability
- Troubleshooting
- Contributing
- License

## Overview
**AirSpace-TM** is a full-stack task management application designed for teams and administrators. It features user authentication, role-based access, task assignment, deadline tracking, and a modern, responsive UI.

## Features
- User registration and login (JWT-based)
- Role-based access (Admin/User)
- Task creation, assignment, and status tracking
- Deadline alerts and overdue notifications
- Board and list views for tasks
- Responsive design for desktop and mobile
- Version checking and cache busting after deployment

## Tech Stack
- Frontend: React, Redux Toolkit, Vite, Tailwind CSS
- Backend: Node.js, Express.js, MongoDB (Mongoose)
- Deployment: Vercel (or Node server), Netlify (optional)
- Other: JWT, bcrypt, helmet, morgan, dotenv

## Project Structure
AirSpace-TM/\
├── server/\
│   ├── client/                # Frontend (React)\
│   │   ├── public/\
│   │   ├── src/\
│   │   └── vite.config.js\
│   ├── controllers/\
│   ├── middlewares/\
│   ├── models/\
│   ├── routes/\
│   ├── utils/\
│   ├── index.js              # Express entry point\
│   ├── .env\
│   └── vercel.json\
└── README.md

## Setup & Installation
### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)
**Clone the Repository**
git clone https://github.com/yourusername/AirSpace-TM.git\
cd AirSpace-TM/server

**Install Dependencies**
#### Backend
npm install
**Frontend**
cd client
npm install

### Environment Variables
Create a .env file in the server directory:
PORT=5000\
MONGO_URI=your_mongodb_connection_string\
JWT_SECRET=your_jwt_secret\
APP_VERSION=1.0.0\
NODE_ENV=development

### Running the App
**Development**
**Backend**
npm run dev
**Frontend (in a separate terminal)**
cd client
npm run dev

Visit http://localhost:3000 for the frontend and http://localhost:5000 for the backend API.\

**Production Build**
cd client
npm run build
cd ..
node index.js

### API Endpoints
**Authentication**
Method	Endpoint	Description\
POST	/api/auth/login	User login\
POST	/api/auth/register	User registration\
POST	/api/auth/logout	User logout\
**Tasks**
Method	Endpoint	Description\
GET	/api/tasks	Get all tasks\
POST	/api/tasks	Create a task\
PUT	/api/tasks/:id	Update a task\
DELETE	/api/tasks/:id	Delete a task\
**Users**
Method	Endpoint	Description\
GET	/api/users	Get all users\
GET	/api/users/:id	Get user by ID\
**Version**
Method	Endpoint	Description\
GET	/api/version	Get backend version\
**Frontend Usage**
**Board/List Views**: Switch between Kanban board and list view for tasks.\
**Task Alerts**: Overdue tasks show a red alert and highlight.\
**Admin Features**: Admins can manage users and all tasks.\
**User Features**: Users can view and manage their own tasks.\
**Authentication & Authorization**
JWT tokens are stored in HTTP-only cookies for security.\
Role-based middleware restricts access to admin routes.\
Version mismatch between frontend and backend triggers a forced reload.\
**Security Best Practices**
**Cookies**: Set HttpOnly, Secure, and SameSite=Strict flags.\
**Password Hashing**: Uses bcrypt with a strong salt.\
**Input Validation**: All API inputs are validated.\
**Rate Limiting**: Login and sensitive endpoints are rate-limited.\
**Helmet**: Sets secure HTTP headers.\
**CORS**: Only allows trusted origins.\
**CSRF/XSS**: Use libraries like csurf and xss-clean if needed.\
**Environment Variables**: All secrets are stored in .env.\
**Performance & Scalability**
**Database Indexes**: Ensure indexes on frequently queried fields.\
**Pagination**: Use pagination for large data sets.\
**Caching**: Consider Redis for caching heavy queries.\
**CDN**: Serve static assets via CDN in production.\
**Lazy Loading**: Use React.lazy for large components.\
**Troubleshooting**
**Blank Page After Deploy**: Check static file serving and routing in index.js and vercel.json.\
**404 Errors**: Ensure client/dist is built and deployed.\
**Version Mismatch**: Update APP_VERSION in .env and redeploy both backend and frontend.\
**Authentication Issues**: Check cookie settings and JWT secret consistency.
**Contributing**
- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature).
- Commit your changes (git commit -am 'Add new feature').
- Push to the branch (git push origin feature/your-feature).
- Open a Pull Request.
**License**
- This project is licensed under the MIT License.
