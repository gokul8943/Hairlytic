# Hairlytic

Hairlytic is a modern web application designed to help users track and analyze their hair style.The application provides tools for monitoring hair and give the perfect hairstyle.

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- TailwindCSS
- Shadcn UI Components
- Zustand (State Management)
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt for password hashing

## Project Structure

```
Hairlytic/
├── frontend/           # React frontend application
│   ├── src/           # Source code
│   ├── public/        # Static assets
│   └── package.json   # Frontend dependencies
└── backend/           # Node.js backend application
    ├── src/          # Source code
    └── package.json  # Backend dependencies
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gokul8943/Hairlytic.git
cd Hairlytic
```

2. Install Frontend Dependencies:
```bash
cd frontend
npm install
```

3. Install Backend Dependencies:
```bash
cd ../backend
npm install
```

4. Set up environment variables:
   - Create `.env` files in both frontend and backend directories
   - Copy the example environment variables and fill in your values

### Running the Application

1. Start the Backend Server:
```bash
cd backend
npm run dev
```

2. Start the Frontend Development Server:
```bash
cd frontend
npm run dev
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Features

- User Authentication
- Hair style generating
- Modern and Responsive UI
- Secure API Endpoints

## Development

### Frontend Development
```bash
cd frontend
npm run dev    # Start development server
npm run build  # Build for production
npm run lint   # Run linting
```

### Backend Development
```bash
cd backend
npm run dev    # Start development server
npm start      # Start production server
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Acknowledgments

- Shadcn UI for the beautiful component library
- The React and Node.js communities for their excellent tools and libraries 