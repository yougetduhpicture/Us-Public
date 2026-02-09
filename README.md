# Us

The official website for **Us**. Built as a full-stack web application using the MERN stack. featuring upcoming and past show listings, music releases, music videos, newsletter signup, and more.

**Live site:** [usbandofficial.com](https://usbandofficial.com/)

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
- [Build & Deployment](#build--deployment)
- [API](#api)
  - [Internal Endpoints](#internal-endpoints)
  - [External Services](#external-services)
- [Database Schema](#database-schema)
- [License](#license)
- [Author](#author)

---

## Tech Stack

| Layer    | Technology                          |
| -------- | ----------------------------------- |
| Frontend | React 18, Vite 7, CSS         |
| Backend  | Node.js, Express 4                  |
| Database | MongoDB Atlas (Mongoose 8)          |
| Hosting  | Render (custom domain)              |
| APIs     | Bandsintown REST API, Mailchimp     |

---

## Project Structure

```
UsBandOfficial/
├── us2.0/                  # Frontend (React + Vite)
│   ├── public/             # Static assets (images, icons)
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── css/            # Stylesheets (CSS)
│   │   ├── App.jsx         # Root application component
│   │   └── index.jsx       # Entry point
│   ├── vite.config.ts      # Vite configuration
│   └── package.json
│
├── usbackend/              # Backend (Express API)
│   ├── models/
│   │   └── show.js         # Mongoose Show model
│   ├── build/              # Production frontend build (generated)
│   ├── index.js            # Express server entry point
│   └── package.json
│
└── README.md
```

---

## Features

- **Upcoming Shows** — Fetched in real time from the Bandsintown API
- **Past Shows** — Historical show archive stored in MongoDB, combined with recent past shows from Bandsintown
- **Music Releases** — Showcase of albums/singles with streaming service links
- **Music Videos** — Embedded video content
- **Newsletter** — Email subscription powered by Mailchimp
- **Social Media** — Links to the band's social media profiles
- **Contact** — Contact information section

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/)
- A [MongoDB Atlas](https://www.mongodb.com/atlas) cluster (or local MongoDB instance)

### Installation

```bash
# Clone the repository
git clone https://github.com/Yougetduhpicure/UsBandOfficial.git
cd UsBandOfficial

# Install frontend dependencies
cd us2.0
npm install

# Install backend dependencies
cd ../usbackend
npm install
```

### Environment Variables

Create a `.env` file in the `usbackend/` directory:

```env
PORT=3001
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/UsDB?retryWrites=true&w=majority
```

### Running Locally

**Backend** (from the `usbackend/` directory):

```bash
npm run dev          # Starts the Express server with nodemon
```

**Frontend** (from the `us2.0/` directory):

```bash
npm run dev          # Starts the Vite dev server
```

The frontend dev server will run on `http://localhost:5173` by default, and the backend on the port specified in your `.env` file.

---

## Build & Deployment

The project is deployed on [Render](https://render.com/) and served from the backend under the custom domain [usbandofficial.com](https://usbandofficial.com/).

The frontend is built into the backend's `build/` directory, and the Express server serves it as static files.

**Build and deploy with a single command** (from `usbackend/`):

```bash
npm run build:ui       # Builds the frontend and copies it into usbackend/build/
npm run deploy:full    # Builds UI, commits, and pushes to main
```

**What `build:ui` does:**

1. Removes the existing `build/` directory
2. Runs `vite build` in `us2.0/` (outputs to `us2.0/build/`)
3. Copies the built files into `usbackend/build/`

Render automatically picks up new pushes to `main` and redeploys the application.

---

## API

### Internal Endpoints

| Method | Endpoint      | Description                                  |
| ------ | ------------- | -------------------------------------------- |
| `GET`  | `/`           | Serves the frontend SPA                      |
| `GET`  | `/api/shows`  | Returns all past shows from the database     |

### External Services

- **Bandsintown API** — Fetches upcoming and recent past events for Us
- **Mailchimp** — Handles newsletter email subscriptions

---

## Database Schema

**Show** (MongoDB collection: `shows`)

| Field      | Type     | Description                     |
| ---------- | -------- | ------------------------------- |
| `_id`      | String   | Document ID                     |
| `id`       | Number   | Show identifier                 |
| `tour`     | String   | Tour name                       |
| `date`     | String   | Show date                       |
| `venue`    | String   | Venue name                      |
| `location` | String   | City / region                   |
| `country`  | String   | Country                         |
| `link`     | String   | Ticket or event link            |

---

## License

This project is licensed under [MIT](LICENSE).

---

## Author

**Rasmus Ruonakoski**
