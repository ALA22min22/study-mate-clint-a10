# 🎓 StudyMate — Find Your Perfect Study Partner

**StudyMate** is a MERN Stack web platform designed to help students connect and collaborate for better learning outcomes. It enables users to find study partners based on subjects, learning preferences, or nearby locations, making education more interactive, engaging, and goal-oriented.





### 🔗 Quick Links
<a href="https://sturdy-mate.firebaseapp.com" target="_blank"><img src="https://img.shields.io/badge/Live_Site-Visit_Now-2ea44f?style=for-the-badge&logo=netlify&logoColor=white" /></a>
<a href="https://github.com/ALA22min22/study-mate-clint-a10.git" target="_blank"><img src="https://img.shields.io/badge/Server_API-Link-orange?style=for-the-badge&logo=vercel&logoColor=white" /></a>

---

## 🖼 Screenshot
![StudyMate Homepage](https://i.ibb.co.com/jPJffPj8/sturdy-mate-web-app-1.png)


---

## ⚙️ Main Technologies
* **Frontend:** React.js (Vite), Tailwind CSS, DaisyUI, Framer Motion
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Atlas)
* **Authentication:** Firebase Auth & JWT
* **Data Fetching:** Axios

---

## 🌟 Core Features
* **🔐 Secure Authentication:** Seamless login/registration with Email/Password and **Google One-Click Login** via Firebase.
* **🔍 Smart Partner Discovery:** A "Find Partners" page with **Server-side Search** by subject and **Sorting** by experience level.
* **🤝 Real-time Connections:** Send partner requests that automatically increment the partner’s connection count using the MongoDB **$inc operator**.
* **🛠️ Full CRUD Management:** Users can create their own study profiles and manage their sent requests (Update/Delete) via the "My Connections" dashboard.
* **🌓 Theme Toggle:** Integrated **Dark and Light mode** for a comfortable user experience.
* **📱 High Performance & Responsive:** Fully responsive layout with custom loading spinners and a creative 404 error page.

---

## 📦 Key Dependencies
### Client Side:
* `axios`: For efficient API calls.
* `firebase`: For secure authentication.
* `react-router-dom`: For SPA navigation and private routes.
* `framer-motion`: For smooth UI animations.
* `react-toastify` / `sweetalert2`: For interactive notifications.

### Server Side:
* `express`: Web framework for Node.js.
* `mongodb`: For flexible data storage.
* `dotenv`: For securing environment variables.
* `cors`: To manage cross-origin resource sharing.

---

## 💻 Step-by-Step Guide to Run Locally

Follow these steps to set up the project on your local machine:

**1. Clone the repository:**
> git clone https://github.com/ALA22min22/study-mate-clint-a10.git

**2. Setup Server:**
* Navigate to the server folder: `cd server`
* Install dependencies: `npm install`
* Create a `.env` file and add:
  > DB_USER=your_mongodb_username  
  > DB_PASS=your_mongodb_password
* Start the server: `npm start` (or `node index.js`)

**3. Setup Client:**
* Navigate to the client folder: `cd client`
* Install dependencies: `npm install`
* Create a `.env.local` file and add your Firebase configurations.
* Start the development server: `npm run dev`

---

## 🔗 Resources
* **Live Site:** [studymate-link.web.app](https://sturdy-mate.firebaseapp.com)
* **React Docs:** [react.dev](https://react.dev/)
* **MongoDB $inc Guide:** [Official Documentation](https://www.mongodb.com/docs/manual/reference/operator/update/inc/)

---

<h3 align="center">📫 Connect with Me</h3>
<div align="center">
  <a href="https://www.linkedin.com/in/md-alamin-dev" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  &nbsp;
  <a href="https://github.com/ALA22min22" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
</div>
