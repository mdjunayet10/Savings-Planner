# Smart-Expense-Tracker
Course Name  : Software Engineering Laboratory    
Course Code: CSE-3206   
Group no : 06   
Project Name: Smart Expense Tracker   
Group Member :    
1. Al Sadique Nuhin - 23524202061  
2.Md Junayet Hossain Mohit - 23524202065  
3.Abdullah Mahmud Yamin - 23524202085  
4.Mashrafi Elahi - 23524202137

Submission Date: 26 February 2026 

METHODOLOGY:
1. Purpose (Objective) 
The purpose of the Smart Expense Tracker is to help users record, manage, and 
analyze their daily expenses efficiently. The system is designed to improve 
financial awareness by allowing users to monitor their spending habits and 
maintain better control over their personal budgets. 
2. Product Scope 
The Smart Expense Tracker is a web-based application that enables users to add 
their daily expenses, categorize them according to different spending types such as 
food, transport, or bills, and monitor their overall financial activities. The system 
provides a simple and interactive interface through which users can review their 
expense history and observe summaries or reports of their spending patterns. The 
application is accessible through standard web browsers on both desktop and 
mobile devices. 
3. User Classes 
The primary user of the system is the general user who registers and logs in to 
manage personal expenses. An optional admin user may also exist to manage user 
accounts and oversee the overall system functionality and performance. 
4. Functional Requirements 
● User can register an account. 
● User can log in securely. 
● User can add new expenses with details such as amount, date, and category. 
● User can edit existing expenses. 
● User can delete expenses. 
● User can categorize expenses (Food, Transport, Bills, Shopping, etc.). 
● User can view expense history. 
● System automatically calculates total expenses. 
● System generates and displays expense summaries and reports. 
5. Non-Functional Requirements 
The system must meet the following quality requirements: 
● The system should load within 2 seconds. 
● The system must be secure (login authentication required). 
● The system should be user-friendly and easy to navigate. 
● The system should be mobile responsive. 
● The system must store data reliably. 
● The system should be available 24/7. 
6. Operating Environment 
The Smart Expense Tracker operates within a web browser environment such as 
Chrome, Edge, or other modern browsers. It requires an active internet connection 
and can be accessed from devices such as mobile phones, tablets, or laptops. 
7. Constraints 
The system must be developed using HTML, CSS, and JavaScript technologies. 
Hosting resources may be limited, so the design should remain lightweight and 
efficient. The application must function entirely as a browser-based system. 
8. Assumptions 
It is assumed that users have access to a stable internet connection and possess 
basic knowledge of how to use web applications. It is also assumed that a proper 
server and database environment are available to store and manage user data. 
9. Risks 
There is a potential risk of data loss if proper backup mechanisms are not 
implemented. Security vulnerabilities may arise if authentication and data 
protection are not properly handled. Server downtime could temporarily restrict 
user access to the system. Additionally, incorrect data entry by users may affect the 
accuracy of expense reports. 

---

## Base Project Implementation (April 2026)

This repository now includes a browser based starter implementation using only HTML, CSS, and JavaScript, matching the project constraints.

### Current Project Structure

```
Smart-Expense-Tracker/
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
├── index.html
├── .gitignore
├── README.md
├── Project_Methodology.pdf
├── SDLC.pdf
└── usecase_diagram.pdf
```

### How to Run

1. Open this folder in VS Code.
2. Start a local static server (Live Server extension or any basic HTTP server).
3. Open `index.html` in your browser.
4. Do not run `assets/js/app.js` directly with Node. It is browser-side code and requires `window`/`document`.

### Default Admin Account

- Email: admin@expense.local
- Password: Admin1234

Use this account to access the admin page where user accounts and overall system summary are available.

### Implemented Features (Base)

- User registration with password validation.
- Login with hashed password verification (SHA-256 where supported).
- Expense add, edit, delete.
- Expense categories (Food, Transport, Bills, Shopping, etc.).
- Expense history table with search.
- Auto total expense calculations.
- Recurring monthly expense plans with activate/pause/delete controls.
- Monthly budget setup with warning (80%) and overspending alerts.
- Category-wise monthly budgets with near-limit and over-budget status.
- Category summary and monthly report views.
- JSON report export.
- CSV export and CSV import for expense records.
- Admin features:
	- Manage user account status (activate/deactivate non-admin users).
	- View system overview (total users, active users, total records, total spend).
- Local persistence via browser localStorage.
- Responsive UI for desktop/mobile.

### SDLC Alignment (Agile)

The current base build can be treated as Sprint 1-3 scope:

- Sprint 1: authentication and core layout.
- Sprint 2: expense management CRUD and history.
- Sprint 3: reports, summary analytics, and admin overview.

Next iterations should focus on stronger production security, automated tests, and backend/database integration.
