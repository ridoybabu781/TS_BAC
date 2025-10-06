# 🛍️ E-Commerce Backend (Express + TypeScript + MongoDB)

A modular and production-ready backend for an e-commerce application built with **Node.js**, **Express**, and **TypeScript**, supporting **user**, **vendor**, and **admin** roles.
It includes authentication, authorization, product and category management, orders, payments (SSLCommerz), reviews, and more.

---

## 🚀 Features

### 👤 Authentication & Authorization

- JWT-based authentication (`jsonwebtoken`)
- Role-based access: **User**, **Vendor**, **Admin**
- Cookie-based session handling (`cookie-parser`)
- Secure password hashing with **bcrypt**

### 🛒 Core Features

- **Product Management** (Add, update, delete, fetch)
- **Category Management** with icons (via Cloudinary)
- **Cart System** (Add / Remove / Get items)
- **Order Management** with COD & SSLCommerz payment
- **Review System** (Users can review products)

### 💳 Payment Integration

- Integrated **SSLCommerz** (sandbox) for online payments
- Supports both **Cash On Delivery (COD)** and **Online Payment**
- Handles success, fail, and cancel callbacks

### 📦 Admin Panel (API)

- Approve / Reject vendor requests
- Block / Unblock / Delete users
- Manage categories and products

### 📧 Utility Integrations

- **Multer** for file uploads
- **Cloudinary** for image hosting
- **Nodemailer** for sending confirmation and notification emails

### 🧰 Validation

- Request validation with **Joi**
- Centralized `validation()` middleware

---

## 🧠 Tech Stack

| Category            | Tech                   |
| ------------------- | ---------------------- |
| **Runtime**         | Node.js, Express.js    |
| **Language**        | TypeScript             |
| **Database**        | MongoDB (via Mongoose) |
| **Auth**            | JWT, Cookies           |
| **File Upload**     | Multer + Cloudinary    |
| **Email Service**   | Nodemailer             |
| **Validation**      | Joi                    |
| **Security**        | bcrypt, cookie-parser  |
| **Payment Gateway** | SSLCommerz Sandbox     |

---

---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```env
PORT=9999
MONGO_URI=mongodb+srv://<your-db-url>
JWT_SECRET=your_jwt_secret

# Cloudinary
CNAME=your_cloud_name
CAPI_KEY=your_api_key
CAPI_SECRET=your_api_secret

# Nodemailer
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

# SSLCommerz (Sandbox)
SSLC_STORE_ID=your_ssl_store_id
SSLC_STORE_PASS=your_ssl_store_pass
```

---

```
http://localhost:9999/api
```

All routes are prefixed with `/api`.

---

---

## 🧠 Authentication Overview

- **User Login/Register** → `/api/auth`
- **Vendor Login/Register** → `/api/vendor`
- **Admin Register** → `/api/admin/register`
- Login returns a **JWT token (cookie)** to be sent with each request.

---

## 👥 USER ROUTES

| Method   | Endpoint             | Description                    |
| -------- | -------------------- | ------------------------------ |
| `POST`   | `/api/auth/register` | Register as a new user         |
| `POST`   | `/api/auth/login`    | Login and receive token        |
| `PUT`    | `/api/auth/update`   | Update profile (Auth required) |
| `GET`    | `/api/auth/profile`  | Get logged-in user profile     |
| `DELETE` | `/api/auth/delete`   | Delete account                 |

### 🧾 User Validation (Joi)

```js
{
  name: string (min 3),
  email: string (valid email),
  password: string (min 6),
  role: "user"
}
```

---

## 🏪 VENDOR ROUTES

| Method | Endpoint                | Description              |
| ------ | ----------------------- | ------------------------ |
| `POST` | `/api/vendor/register`  | Register as vendor       |
| `POST` | `/api/vendor/block/:id` | Block user (Vendor only) |

### 🧾 Vendor Validation (Joi)

```js
{
  name: string,
  email: string,
  password: string,
  role: "vendor"
}
```

---

## 🧑‍💼 ADMIN ROUTES

| Method | Endpoint                       | Description            |
| ------ | ------------------------------ | ---------------------- |
| `POST` | `/api/admin/register`          | Create new admin       |
| `PUT`  | `/api/admin/approveVendor/:id` | Approve pending vendor |
| `PUT`  | `/api/admin/rejectVendor`      | Reject vendor          |
| `PUT`  | `/api/admin/block/:id`         | Block user             |
| `PUT`  | `/api/admin/unblock/:id`       | Unblock user           |
| `PUT`  | `/api/admin/delete/:id`        | Soft delete user       |
| `PUT`  | `/api/admin/undelete/:id`      | Restore deleted user   |

---

## 🛍 PRODUCT ROUTES

| Method   | Endpoint                  | Description                   |
| -------- | ------------------------- | ----------------------------- |
| `POST`   | `/api/product/addProduct` | Add new product (Vendor only) |
| `GET`    | `/api/product/:id`        | Get product by ID             |
| `GET`    | `/api/product/`           | Get all products              |
| `PUT`    | `/api/product/update/:id` | Update product (Vendor only)  |
| `DELETE` | `/api/product/delete/:id` | Delete product (Vendor only)  |

### 🧾 Product Validation (Joi)

**Create Product**

```js
{
  slag: string,
  name: string,
  stock: number,
  description: string,
  price: number,
  discountPrice?: number,
  brand?: string,
  categories: string[]
}
```

---

## 📦 CART ROUTES

| Method | Endpoint               | Description              |
| ------ | ---------------------- | ------------------------ |
| `POST` | `/api/cart/add`        | Add product to cart      |
| `GET`  | `/api/cart/`           | Get current user’s cart  |
| `POST` | `/api/cart/remove/:id` | Remove product from cart |

### 🧾 Cart Model Example

```js
{
  user: ObjectId,
  items: [
    { product: ObjectId, qty: Number, price: Number }
  ],
  totalPrice: Number
}
```

---

## 🧾 ORDER ROUTES

| Method | Endpoint                       | Description                       |
| ------ | ------------------------------ | --------------------------------- |
| `POST` | `/api/order/createOrder`       | Place a new order                 |
| `GET`  | `/api/order/myOrders`          | Get logged-in user's orders       |
| `PUT`  | `/api/order/updateOrderStatus` | Update order status (Vendor only) |

### 🧾 Order Validation (Joi)

```js
{
  items: [
    { product: string, qty: number, price: number }
  ],
  totalPrice: number,
  paymentMethod: "cod" | "sslcommerz",
  shippingAddress: {
    street, city, country, postalCode
  },
  phone: string
}
```

---

## 💳 PAYMENT ROUTES

| Method | Endpoint                   | Description              |
| ------ | -------------------------- | ------------------------ |
| `POST` | `/api/payment/payBill/:id` | Pay for order            |
| `POST` | `/api/payment/success/:id` | Payment success callback |
| `POST` | `/api/payment/fail/:id`    | Payment failed           |
| `POST` | `/api/payment/cancel/:id`  | Payment canceled         |

---

## ⭐ REVIEW ROUTES

| Method   | Endpoint                            | Description                   |
| -------- | ----------------------------------- | ----------------------------- |
| `POST`   | `/api/review/addReview/:productId`  | Add a review                  |
| `GET`    | `/api/review/getReviews/:productId` | Get all reviews for a product |
| `DELETE` | `/api/review/delete/:id`            | Delete your review            |

### 🧾 Review Validation (Joi)

```js
{
  rating: number (1–5),
  comment: string
}
```

---

## 🏷 CATEGORY ROUTES

| Method   | Endpoint                    | Description                  |
| -------- | --------------------------- | ---------------------------- |
| `POST`   | `/api/category/addCategory` | Add category (Admin only)    |
| `GET`    | `/api/category/`            | Get all categories           |
| `DELETE` | `/api/category/delete/:id`  | Delete category (Admin only) |

---

## 🧱 MODELS OVERVIEW

### 🧍‍♂️ User Model

```js
{
  name, email, password, role,
  profileImg, isBlocked, isDeleted,
  address: { street, city, state, zip, country },
  phone, countryCode,
  companyName, products: [ProductId],
  isVendor: "yes" | "pending" | "no"
}
```

### 📦 Product Model

```js
{
  seller: UserId,
  slag, name, stock, description, price,
  discountPrice, brand,
  categories: [String],
  images: { imageUrls: [], imagePublicIds: [] },
  rating, reviews: [ReviewId]
}
```

### 🛒 Cart Model

```js
{
  user: UserId,
  items: [
    { product: ProductId, qty, price }
  ],
  totalPrice
}
```

### 🧾 Order Model

```js
{
  customer: UserId,
  items: [ { product, qty, price } ],
  totalPrice,
  paymentMethod: "cod" | "sslcommerz",
  shippingAddress: { street, city, country, postalCode },
  phone,
  status: "pending" | "paid" | "shipped" | "completed" | "canceled",
  paymentStatus: "unpaid" | "paid" | "failed",
  transactionId
}
```

### 💬 Review Model

```js
{
  reviewer: UserId,
  product: ProductId,
  rating: Number,
  comment: String
}
```

---

## 🔐 Middleware Summary

| Middleware     | Purpose                          |
| -------------- | -------------------------------- |
| `isUser`       | Verifies normal user JWT         |
| `isVendor`     | Verifies vendor JWT              |
| `isAdmin`      | Verifies admin JWT               |
| `validation()` | Validates request body using Joi |
| `handleError`  | Catches all app-level errors     |

---
