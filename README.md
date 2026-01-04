# 🛒 ShoppyGlobe – E-commerce React Application

ShoppyGlobe is a basic e-commerce web application built using **React + Vite**.  
The project demonstrates modern React concepts including **Redux Toolkit**, **React Router**, **custom hooks**, **lazy loading**, and **API integration**.

This project is created as part of a **React assignment** and strictly follows the given guidelines.

---

## 🚀 Tech Stack Used

- React (with Vite)
- Redux Toolkit
- React Redux
- React Router DOM
- JavaScript (ES6+)
- CSS (Responsive Design)

---

## 📌 Features Implemented

### 🧩 Component Structure
- App (Main component)
- Header (Navigation + Cart icon)
- ProductList
- ProductItem
- ProductDetail
- Cart
- CartItem
- Checkout
- NotFound (404 page)

---

### 🔄 Data Fetching
- Products fetched from API:
https://dummyjson.com/products

- Custom hook `useFetchProducts` used
- Error and loading states handled

---

### 🛍️ Cart Functionality (Redux)
- Add product to cart
- Remove product from cart
- Update quantity (minimum quantity = 1)
- Clear cart after placing order

---

### 🔍 Search Feature (Redux-based)
- Search term stored in Redux state
- Products filtered in ProductList using Redux state
- Fully compliant with assignment requirement

---

### 🧭 Routing (React Router)
- `/` → Home (Product List)
- `/product/:id` → Product Detail
- `/cart` → Cart
- `/checkout` → Checkout
- `*` → 404 Not Found page

---

### ⚡ Performance Optimization
- Code splitting using `React.lazy` and `Suspense`
- Lazy loading for components
- Lazy loading for images

---

### 🎨 Styling
- Clean and simple UI
- Fully responsive (mobile + desktop)
- Custom CSS used

---

## 📁 Project Structure

src/
├── components/
│ ├── Header.jsx
│ ├── ProductList.jsx
│ ├── ProductItem.jsx
│ ├── ProductDetail.jsx
│ ├── Cart.jsx
│ ├── CartItem.jsx
│ ├── Checkout.jsx
│ ├── SearchBar.jsx
│ └── NotFound.jsx
│
├── redux/
│ ├── store.js
│ ├── cartSlice.js
│ └── searchSlice.js
│
├── hooks/
│ └── useFetchProducts.js
│
├── App.jsx
├── main.jsx
└── App.css


---

## ▶️ How to Run the Project Locally

### 1️⃣ Clone the repository
```bash
git clone https://github.com/TriptiThakur2003/shoppyglobe.git


```
2️⃣ Go into project folder

cd ShoppyGlobe

3️⃣ Install dependencies

npm install

4️⃣ Start development server

npm run dev

📦 GitHub Repository

```bash
https://github.com/TriptiThakur2003/shoppyglobe.git
```
 