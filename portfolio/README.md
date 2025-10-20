# 🎨 Design Portfolio Backend

This is a **portfolio-type website backend** built with **Node.js, Express, and MongoDB (Mongoose)**.
It allows users to explore and purchase designs, leave reviews, and manage profiles — while admins can manage categories, designs, and pricing plans.

---

## 🚀 Tech Stack

**Backend Framework:** Express.js
**Database:** MongoDB
**Authentication:** JWT, bcrypt, cookie-parser
**File Uploads:** Multer + Cloudinary
**Error Handling:** Custom error handler middleware
**Authorization:** Role-based (Admin / User)
**Validation:** Joi

---


---

## 🌐 API Routes Overview

### 🔑 **Auth Routes**

**Base URL:** `/api/auth`

| Method | Route       | Description                            |
| ------ | ----------- | -------------------------------------- |
| POST   | `/register` | Register a new user                    |
| POST   | `/login`    | Login user and get JWT token           |
| POST   | `/profile`  | Get logged-in user profile (Protected) |

---

### 🧑‍💼 **Admin Routes**

**Base URL:** `/api/admin`

| Method | Route       | Description                              |
| ------ | ----------- | ---------------------------------------- |
| POST   | `/register` | Create new admin (for setup or manually) |

---

### 🎨 **Design Routes**

**Base URL:** `/api/design`

| Method | Route           | Middleware          | Description       |
| ------ | --------------- | ------------------- | ----------------- |
| POST   | `/createDesign` | `isAdmin`, `multer` | Create new design |
| GET    | `/`             | —                   | Get all designs   |
| GET    | `/:id`          | —                   | Get single design |
| DELETE | `/:id`          | `isAdmin`           | Delete design     |

---

### 🏷️ **Category Routes**

**Base URL:** `/api/category`

| Method | Route         | Description        |
| ------ | ------------- | ------------------ |
| POST   | `/create`     | Create category    |
| GET    | `/`           | Get all categories |
| DELETE | `/delete/:id` | Create category    |

---

### 💰 **Pricing Plan Routes**

**Base URL:** `/api/pricing`

| Method | Route         | Middleware | Description             |
| ------ | ------------- | ---------- | ----------------------- |
| POST   | `/addPricing` | `isAdmin`  | Create pricing plan     |
| GET    | `/`           | —          | Get all pricing plans   |
| GET    | `/:id`        | —          | Get single pricing plan |
| DELETE | `/:id`        | `isAdmin`  | Delete pricing plan     |

---

### 🛍️ **Purchase Routes**

**Base URL:** `/api/purchase`

| Method | Route           | Middleware | Description            |
| ------ | --------------- | ---------- | ---------------------- |
| POST   | `/makePurchase` | `isUser`   | Make a design purchase |
| GET    | `/`             | `isUser`   | Get all my purchases   |

---

### ⭐ **Review Routes**

**Base URL:** `/api/review`

| Method | Route             | Middleware | Description                  |
| ------ | ----------------- | ---------- | ---------------------------- |
| POST   | `/addReview/:id`  | `isUser`   | Add review for a design      |
| GET    | `/getReviews/:id` | —          | Get all reviews for a design |
| DELETE | `/delete/:id`     | `isUser`   | Delete own review            |

---

## 🔐 Authentication & Authorization

- **JWT** is used for authentication.
- **bcrypt** for password hashing.
- **cookie-parser** to store and access tokens in cookies.
- **Role-based Access Control (RBAC)** ensures only admins can manage content.

---

## 🖼️ Image Management

- **Multer** handles image upload from forms.
- **Cloudinary** stores images online.

---

## ⚙️ Error Handling

The project uses a **custom error handler middleware** to handle:

- Validation errors
- Authentication failures
- File upload issues
- Database and server errors

---

## 🧩 Environment Variables

```
PORT = 9999
DB_URL = <DB_URL>
JWT_SECRET = <JWT SECRET>


CNAME=<Cloudinary name>
CAPI_KEY =<cloudinary api key>
CAPI_SECRET =<cloudinary api secret>
```

---

## 🧑‍💻 Roles Overview

| Role      | Permissions                                                   |
| --------- | ------------------------------------------------------------- |
| **User**  | Register, login, view designs, make purchases, write reviews  |
| **Admin** | Manage designs, categories, pricing plans, and delete content |

---
