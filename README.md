# Minimal Library Management System 📚

A clean and minimal **Library Management System** built with React, Redux Toolkit Query (RTK Query), and TypeScript. This system allows users to view, add, edit, delete, and borrow books, along with a simple borrow summary—all without authentication or payment integration.

---

## 🌐 Live Links

- **Client-side:** [Library Management Client](https://library-management-client-psi-sage.vercel.app)  
- **Server-side:** [Library Management Server](https://library-management-pearl-two.vercel.app)  
- **Server-side-repo:** [Library Management Server repo](https://github.com/DevByDipto/library-management)  
---

## 📝 Project Overview

The goal of this project is to build a **functional and clean client-side application** that interacts with a RESTful API. Core functionalities include:

- Book Management (CRUD operations)
- Borrowing books
- Viewing a borrow summary
- Minimalist UI & responsive design

The application demonstrates proper **state management**, **API integration**, and **modern React/TypeScript practices**.

---

## ⚡ Features

### 1. Public Routes 🚀
- No login or authentication required.
- Focused on essential book and borrowing functionalities.

### 2. Book Management 🛠️
- **Book List Table:** Displays all books with columns for Title, Author, Genre, ISBN, Copies, Availability, and Actions.
- **Actions:**
  - **Edit Book:** Edit existing book data and update via API.
  - **Delete Book:** Confirmation dialog before deletion.
  - **Borrow Book:** Open a form to borrow the selected book.
- **Add New Book:** Button opens a form to create a new book.
  - Fields: Title, Author, Genre, ISBN, Description, Copies, Available (optional)
  - After creation, redirects to the book list with UI updated instantly.

### 3. Borrow Book
- Fields: Quantity (number), Due Date (date)
- Business Logic:
  - Cannot borrow more than available copies.
  - If copies reach 0, book is marked unavailable.
- API integration with success notification.
- Redirects to **Borrow Summary** after successful submission.

### 4. Borrow Summary
- Displays aggregated list of borrowed books.
- Columns: Book Title, ISBN, Total Quantity Borrowed.
- Data retrieved from aggregation API.

### 5. Landing Page Components
- **Navbar:** Links to All Books, Add Book, Borrow Summary
- **Book Table/Grid:** Core book actions
- **Footer:** Site info or credits

### 6. Responsive UI/UX
- Minimalist design using Tailwind CSS
- Fully responsive for **mobile, tablet, and desktop**
- Clean navigation and clear forms/buttons

---

## 🏗️ Technical Stack

| Layer           | Technology                        |
|-----------------|----------------------------------|
| Frontend        | React + TypeScript               |
| State Management| Redux Toolkit + RTK Query        |
| Backend         | Node.js + Express.js             |
| Database        | MongoDB + Mongoose               |
| Styling         | Tailwind CSS                     |

---

## 📝 Pages & Routes

| Route                | Description |
|---------------------|-------------|
| `/books`            | List all books with options to view, edit, delete, borrow |
| `/create-book`      | Form to add a new book |
| `/books/:id`        | View single book details |
| `/edit-book/:id`    | Edit existing book |
| `/borrow-summary`   | Aggregated borrow summary |

---

## 📂 Project Setup

### 1. Clone Repo
```bash
git clone <repo-link>
cd <project-folder>
