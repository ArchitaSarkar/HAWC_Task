# 🎓 FacultyPortal - Professional Teacher Community


## ✨ Features

- **Professional Authentication**: Secure Register and Login pages featuring a high-tech HUD/Network geometric background.
- **Teacher Directory**: A clean, row-by-row directory of faculty members with real-time data fetching.
- **Protected Routes**: Secure access to the dashboard using JWT (JSON Web Token) verification.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views using Tailwind CSS v4.
- **Theme Consistency**: Deep Navy and Teal color palette tailored for a professional "SaaS" feel.

## 📸 Screenshots

### 🔑 Authentication
<div flex align="center">
  <img src="./Screenshots/Login.png" width="45%" alt="Login Page" />
  <img src="./Screenshots/Register.png" width="45%" alt="Register Page" />
</div>

### 📊 Dashboard
![Dashboard Row View](![Faculty Dashboard](./Screenshots/Dashboard.png))

## 🛠️ Tech Stack

**Frontend:**
- **React.js** (Vite)
- **Tailwind CSS v4** (Utility-first styling)
- **Lucide React** (Professional iconography)
- **Axios** (API handling with interceptors)
- **React Router Dom** (Navigation & Protected Routes)

**Backend (Logic):**
- **php** 
- **mysql** (Database)
- **JWT** (Authentication)

## 🚀 Getting Started

### Prerequisites
- php 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/ArchitaSarkar/HW-WHY_Task.git](https://github.com/ArchitaSarkar/HW-WHY_Task.git)
   cd HW-WHY_Task
    ```
2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3.**Backend Setup**
   ```bash
  cd backend
  npm install
  npm start
  ```

### 📂 Project Structure
   ```bash
   src/
   ├── api/            # Axios instance with JWT interceptors
   ├── components/     # Reusable UI (ProtectedRoutes, ThemeToggle)
   ├── pages/          # Login, Register, and Dashboard views
   ├── App.jsx         # Routing & Layout logic
   └── index.css       # Tailwind v4 theme & HUD background styles
   ```

## 👤 Author

**Archita Sarkar**
* GitHub: [@ArchitaSarkar](https://github.com/ArchitaSarkar)
* LinkedIn: [Archita Sarkar](https://www.linkedin.com/in/archita-sarkar-010421308)

---
