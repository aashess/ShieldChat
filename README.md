# ShieldChat

Secure real-time chat application built with a separate frontend and backend architecture.

## Overview

ShieldChat is a modern messaging platform designed to provide secure and reliable communication. The project follows a client-server architecture, separating frontend and backend services for better scalability and maintainability.

## Features

- Real-time messaging
- User authentication
- Secure communication
- Responsive user interface
- Scalable backend architecture
- Modern web technologies

## Project Structure

```bash
ShieldChat/
│
├── backend_server/
│   └── Backend APIs and server logic
│
├── fronted_server/
│   └── Frontend application
│
└── README.md
```

## Tech Stack

### Frontend

- TypeScript
- JavaScript
- HTML
- CSS

### Backend

- Node.js
- Express.js (if applicable)

## Installation

### Clone Repository

```bash
git clone https://github.com/aashess/ShieldChat.git
cd ShieldChat
```

### Backend Setup

```bash
cd backend_server
npm install
npm run dev
```

### Frontend Setup

```bash
cd fronted_server
npm install
npm start
```

## Environment Variables

Create a `.env` file inside the backend directory.

Example:

```env
PORT=5000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
```

## Running Locally

Start backend:

```bash
cd backend_server
npm run dev
```

Start frontend:

```bash
cd fronted_server
npm start
```

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### Messaging

```http
GET /api/messages
POST /api/messages
```

> Update endpoints according to your implementation.

## Security

ShieldChat focuses on secure communication and follows modern authentication practices.

## Future Improvements

- End-to-end encryption
- Group chats
- Media sharing
- Voice and video calling
- Push notifications
- Message reactions

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Open a pull request

## License

This project is licensed under the MIT License.

## Authors

- Aashish Jha
- Contributors
