# Backend Project

## 📌 Project Setup Instructions

Follow these steps to set up and run the backend project locally.

---

## ⚙️ Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (LTS recommended) ➝ [Download Node.js](https://nodejs.org/)
- **MySQL** (or use a hosted MySQL database) ➝ [Download MySQL](https://www.mysql.com/)
- **Postman** (for API testing, optional) ➝ [Download Postman](https://www.postman.com/)

---

## 📂 Installation & Running the Project

### 1️⃣ Clone the Repository
```sh
    git clone <repository-url>
    cd <project-folder>
```

### 2️⃣ Install Dependencies
```sh
    npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory and add the following variables:

```ini
DATABASE_URL=mysql://username:password@localhost:3306/database_name
PORT=5000
JWT_SECRET_KEY=your_secret_key
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_cloud_api_key
CLOUD_API_SECRET=your_cloud_api_secret
```

> **Note:** Replace `username`, `password`, and `database_name` with your actual MySQL credentials.

---

### 4️⃣ Run Database Migration
```sh
    npx prisma migrate dev --name init
```



---

### 5️⃣ Start the Backend Server
```sh
    npm run start
```

For development mode (with nodemon):
```sh
    npm run dev
```

The backend server will start on `http://localhost:5000` (or the specified `PORT`).

---

## 🚀 API Documentation

Once the server is running, you can test the API using **Postman** or **cURL**.

- And **Postman**, to test the routes:
  ```sh
  http://localhost:{PORT}/
  ```

---

## API ROUTES 

```sh
    ### For Login
    /api/v1/auth/login
    Method : POST

    Fields :-> 
    {
        1. email or username
        2. password
    }

    ### For signup
    /api/v1/auth/signup
    Method : POST
    Fields :-> 

    {
        1. email 
        2. username
        3. password
        4. name
    }

    ### for logout
    Method : GET


    ### For User profile Update
    /api/v1/user
    Method : POST
    Fields :-> 

    NOTE -> All the fields are optional
    {
        name
        bio
        avatar
    }
```

#


## 🛠 Common Issues & Solutions

**1. Port Already in Use?**
   - Change the `PORT` in `.env` or run:
     ```sh
     kill -9 $(lsof -t -i:5000)
     ```

**2. Database Connection Error?**
   - Ensure MySQL is running (`mysql -u root -p` to check).
   - Check if your `DATABASE_URL` is correctly formatted.

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).
