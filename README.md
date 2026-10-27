# 🎓 Campus Event Management System

A professional **Campus Event Management System** developed as a scenario-based activity for **Unit 3 – SQL & JDBC**.

The system provides a user-friendly interface for viewing campus events, managing student registrations, and demonstrating database operations using **MySQL and Java JDBC**.

---

## 📌 Project Overview

Colleges conduct various technical, coding, design, cultural, and hackathon events. Managing student registrations manually can result in duplicate records, difficulty in searching participants, and inefficient event management.

The **Campus Event Management System** solves this problem by providing a centralized platform to:

- View available campus events
- Register students for events
- View registration records
- Search and filter registrations
- Delete registrations
- Manage student and event data
- Connect Java with MySQL using JDBC

---

## 🎯 Objectives

The main objectives of this project are:

1. To design a user-friendly event management interface.
2. To store student, event, and registration information in MySQL.
3. To perform SQL operations such as `SELECT`, `INSERT`, `UPDATE`, and `DELETE`.
4. To demonstrate SQL `JOIN`, `UNION`, `INTERSECT`, `EXCEPT`, and subqueries.
5. To demonstrate database connectivity using Java JDBC.
6. To implement the `Connection`, `Statement`, and `ResultSet` interfaces.

---

## ✨ Features

### 📊 Dashboard

- Total events
- Total students
- Total registrations
- Event categories
- Upcoming events
- Quick registration access

### 🎫 Event Management

Displays available events such as:

- TechFest 2026
- CodeSprint
- Design Arena
- Hackathon
- Cultural Night

### 📝 Student Registration

Students can enter:

- Student name
- Email
- Department
- Year
- Selected event

### 📋 Registration Management

- View registered students
- Search registrations
- Filter by status
- Delete registrations

### 🗄️ Database Operations

The project demonstrates:

- `CREATE DATABASE`
- `CREATE TABLE`
- `ALTER TABLE`
- `SELECT`
- `WHERE`
- `JOIN`
- `UNION`
- `INTERSECT`
- `EXCEPT`
- Subqueries
- `INSERT`
- `UPDATE`
- `DELETE`

### ☕ JDBC

Java JDBC is used for:

- Database connection
- Executing SQL queries
- Retrieving records
- Updating records
- Inserting records
- Deleting records

---
<img width="666" height="295" alt="image" src="https://github.com/user-attachments/assets/bce91833-aaae-4e0b-b7e2-e516c7f16791" />
<img width="671" height="295" alt="image" src="https://github.com/user-attachments/assets/f25929cc-daa2-4bea-9845-a9b77adb662d" />
<img width="667" height="292" alt="image" src="https://github.com/user-attachments/assets/e1bd517e-1fab-4ba5-bc47-3e16607af750" />

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure of the application |
| CSS3 | User interface and styling |
| JavaScript | Frontend interaction |
| Java | Backend |
| JDBC | Java-MySQL connectivity |
| MySQL | Database |
| VS Code | Development environment |

---

## 📂 Project Structure

```text
campusEvent/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   └── CampusEventApp.java
│
├── database/
│   └── campus_event.sql
│
└── README.md
