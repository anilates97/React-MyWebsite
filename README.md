# React My Website

Personal portfolio website built with React, TypeScript, Vite, Bootstrap and a
small Vercel serverless contact endpoint.

Live demo: https://anilates.vercel.app/

## Features

- Responsive portfolio landing page
- Skills and technologies section
- Project showcase with detail pages
- Image carousel for project screenshots
- Contact form connected to a mail endpoint
- Vercel-ready client and server structure

## Tech Stack

### Client

- React 18
- TypeScript
- Vite
- React Bootstrap
- React Router
- Swiper
- Lottie React

### Server

- Vercel serverless function
- Node.js
- Nodemailer
- CORS

## Project Structure

```text
React-MyWebsite/
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── features/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
├── server/
│   ├── index.js
│   ├── package.json
│   └── vercel.json
└── README.md
```

## Getting Started

Install and run the client:

```bash
cd client
npm install
npm run dev
```

Install the server dependencies:

```bash
cd server
npm install
```

## Environment Variables

Client:

```bash
VITE_CONTACT_API_URL=https://your-contact-endpoint.vercel.app
```

Server:

```bash
EMAIL_USERNAME=your-gmail-address
EMAIL_PASSWORD=your-gmail-app-password
CONTACT_RECEIVER_EMAIL=receiver-address
```

`CONTACT_RECEIVER_EMAIL` is optional. If it is not set, the server sends mail to
`EMAIL_USERNAME`.

## Scripts

Client:

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

Server:

```bash
npm start
```

## Developer

Anil Hasan Ates

- LinkedIn: https://linkedin.com/in/anilates97
- GitHub: https://github.com/anilates97
- Portfolio: https://anilates.vercel.app/
