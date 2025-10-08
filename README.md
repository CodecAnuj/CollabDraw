# 🎨 CollabDraw - Real-time Collaborative Drawing App

A collaborative drawing application where users can create rooms, draw together in real-time, and chat with each other.

---

## 🚀 Tech Stack

### 🖥️ Frontend

* Next.js 14
* TypeScript
* Tailwind CSS
* Socket.io Client

### ⚙️ Backend

* Express.js
* Socket.io
* TypeScript
* JWT Authentication

### 🗄️ Database

* PostgreSQL
* Prisma ORM

### 🧰 DevOps & Tools

* Docker & Docker Compose
* Turborepo (Monorepo Setup)
* pnpm

---

## 📦 Project Structure

```
collabdraw/
├── apps/
│   ├── web/              # Next.js frontend
│   └── api/              # Express backend
├── packages/
│   ├── database/         # Prisma schema
│   ├── types/            # Shared TypeScript types
│   └── config/           # Shared configs
└── docker-compose.yml
```

---

## 🛠️ Setup Instructions

### ✅ Prerequisites

* Node.js 18 or higher
* Docker Desktop
* pnpm (install globally)

```
npm install -g pnpm
```

---

### ⚡ Installation

#### 1. Clone the repository

```
git clone https://github.com/your-username/collabdraw.git
cd collabdraw
```

#### 2. Install dependencies

```
pnpm install
```

#### 3. Setup environment variables

Create `.env` files in the required locations:

```
# apps/api/.env
# packages/database/.env
```

Example `.env` for backend:

```
DATABASE_URL=postgresql://user:password@localhost:5432/collabdraw
JWT_SECRET=your_secret_key
```

---

#### 4. Start PostgreSQL with Docker

```
docker-compose up -d postgres
```

---

#### 5. Run database migrations

```
cd packages/database
pnpm prisma migrate dev
pnpm prisma generate
```

---

#### 6. Start development servers

**Backend:**

```
cd apps/api
pnpm dev
```

**Frontend (coming soon):**

```
cd apps/web
pnpm dev
```

---

## 📝 API Endpoints

### 🔐 Authentication

| Method | Endpoint             | Description                  |
| ------ | -------------------- | ---------------------------- |
| POST   | `/api/auth/register` | Register new user            |
| POST   | `/api/auth/login`    | User login                   |
| GET    | `/api/auth/me`       | Get current user (protected) |

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 💡 Author

**Anuj Tiwari**
Full Stack Developer | MERN & DevOps Enthusiast
🚀 Building scalable real-time web apps