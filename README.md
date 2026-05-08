# Smart Expense Tracker

## Project Overview

Smart Expense Tracker is a frontend-only web application for recording, organizing, and reviewing personal expenses. It is built with HTML, CSS, and JavaScript and stores data in the browser using localStorage.

Course Name: Software Engineering Laboratory  
Course Code: CSE-3206  
Group No: 06  
Project Name: Smart Expense Tracker  

Group Members:

1. Al Sadique Nuhin - 23524202061
2. Md Junayet Hossain Mohit - 23524202065
3. Abdullah Mahmud Yamin - 23524202085
4. Mashrafi Elahi - 23524202137

## Group Member Contribution

| Member Name | Student ID | Contribution |
|---|---:|---|
| Al Sadique Nuhin | 23524202061 | Authentication system, login/register/logout, forgot password demo, admin account, user status management, and audit activity |
| Md Junayet Hossain Mohit | 23524202065 | Expense management, add/edit/delete expenses, receipt handling, budgets, category budgets, bill reminders, and expense filters |
| Abdullah Mahmud Yamin | 23524202085 | Dashboard, spending overview, recent expenses, category analytics, forecast, report builder, charts, and CSV export |
| Mashrafi Elahi | 23524202137 | UI/UX design, responsive layout, theme customization, language/currency settings, backup/restore, documentation, and testing checklist |

## Methodology

### Purpose (Objective)

The purpose of the Smart Expense Tracker is to help users record, manage, and analyze their daily expenses efficiently. The system is designed to improve financial awareness by allowing users to monitor their spending habits and maintain better control over their personal budgets.

### Product Scope

The Smart Expense Tracker is a web-based application that enables users to add their daily expenses, categorize them according to different spending types such as food, transport, shopping, bills, entertainment, health, education, or other expenses, and monitor their overall financial activities. The system provides a simple and interactive interface through which users can review their expense history and observe summaries or reports of their spending patterns. The application is accessible through standard web browsers on both desktop and mobile devices.

### User Classes

The primary user of the system is the general user who registers and logs in to manage personal expenses. An optional admin user also exists to manage user account status and oversee overall system activity in the frontend demo.

### Functional Requirements

- User can register an account.
- User can log in and log out.
- User login state can persist after page refresh.
- User can reset a password through the local demo forgot password flow.
- User can add new expenses with details such as amount, date, category, description, and optional receipt.
- User can edit existing expenses.
- User can delete expenses.
- User can categorize expenses using the default categories, including Other.
- User can view expense history.
- System automatically calculates total expenses.
- System generates and displays expense summaries and reports.
- User can export CSV reports.
- User can set monthly budgets and category budgets.
- User can create bill reminders.
- User can update profile, preference, and appearance settings.
- User can export and restore full backup JSON files.
- Admin/demo user can view system summary and manage non-admin user account status.

### Non-Functional Requirements

- The system should load quickly in a modern browser.
- The system should require login authentication before accessing app data.
- The system should be user-friendly and easy to navigate.
- The system should be mobile responsive.
- The system should store data reliably in browser storage for the frontend-only project scope.
- The system should provide backup and restore support to reduce the risk of local browser data loss.
- The system should handle invalid input and invalid backup files safely.
- The system should run without console errors during normal use.

### Operating Environment

The Smart Expense Tracker operates within a web browser environment such as Chrome, Edge, Safari, or other modern browsers. It can be accessed from devices such as mobile phones, tablets, or laptops. Since the current project is frontend-only, it can run from a local static server and does not require a backend server.

### Constraints

The system is developed using HTML, CSS, and JavaScript technologies. Hosting resources may be limited, so the design remains lightweight and efficient. The application functions as a browser-based frontend system and stores data locally in browser storage.

### Assumptions

It is assumed that users have access to a modern web browser and possess basic knowledge of how to use web applications. For this project version, it is also assumed that browser storage is available. A backend server, real database, real email service, and cloud synchronization are considered future improvements rather than current project requirements.

### Risks

There is a potential risk of data loss if browser data is cleared and no backup has been exported. Security limitations may exist because authentication and password recovery are handled locally for frontend demonstration purposes. Incorrect data entry by users may affect the accuracy of expense reports. Large receipt uploads may also increase browser storage usage.

## Current Features

- Frontend-only app with local browser storage persistence.
- Register, login, logout, and login persistence after page refresh.
- Demo forgot password flow that shows a local verification code on screen.
- Expense add, edit, delete, and receipt attachment support.
- Default expense categories: Food, Transport, Shopping, Bills, Entertainment, Health, Education, and Other.
- Overview dashboard with spending totals, recent expenses, category summary, and forecast information.
- Monthly budget tracking.
- Category budget tracking.
- Bill reminder calendar.
- Reports with spending distribution chart, report builder, and CSV export.
- Settings for profile, preferences, appearance, and backup/restore.
- JSON backup export and restore.
- Admin/demo account for user status management and system overview.
- Dark theme, theme color, and font size settings.
- English, Bangla, and Hindi language support for the main interface.
- Responsive layout for desktop and mobile browser use.

## How to Run

1. Open the project folder in VS Code or another editor.
2. Start a local static server, such as the VS Code Live Server extension.
3. Open `index.html` in a modern browser.

You can also use a simple local server:

```bash
python3 -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

Do not run `assets/js/app.js` directly with Node. It is browser-side code and depends on `window`, `document`, and browser storage.

## Default Admin Account

- Email: `admin@expense.local`
- Password: `Admin1234`

The admin account can view the admin page, user account status controls, system summary, and audit activity.

## Project Structure

```text
Smart-Expense-Tracker/
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── app.js
├── index.html
├── README.md
├── TESTING.md
├── .gitignore
├── Project_Methodology.pdf
├── SDLC.pdf
└── usecase_diagram.pdf
```

## Data Storage

This project stores app data in the user's browser storage. That includes local users, password hashes, expenses, budgets, receipts, settings, reminders, and audit history.

Important notes:

- There is no backend database.
- Data is not synced across devices.
- Clearing browser data can remove saved app data.
- Use the Export Full Backup option before clearing browser data or moving to another browser.
- Backup JSON files may contain local user data and password hashes, so they should not be shared publicly.

## Forgot Password Demo

The forgot password flow is a demo/local feature only. It does not send a real email.

The app checks the locally stored account email, generates a temporary verification code, and displays that code directly on the reset screen. The user can use the shown code to set a new password. The new password is stored using the same local password hashing method used by login/register.

## Backup And Restore

The Settings page includes:

- Export Full Backup
- Restore Backup JSON

Restore replaces the current local app data after confirmation. Invalid backup files are rejected before the app overwrites local data.

## Limitations

- No backend, server database, Firebase Auth, SMTP, or API is included.
- Authentication is local/demo authentication, not production-grade authentication.
- Forgot password is demo/local only and does not send real OTP or email.
- Browser storage can be cleared by the user or browser.
- Large receipt files may increase browser storage usage.
- This project is intended for academic frontend demonstration, not production financial storage.

## Future Improvements

- Backend database and secure server-side authentication.
- Real email verification and password recovery.
- Cloud sync across devices.
- Stronger role and access control.
- Automated tests.
- Production deployment with secure hosting.

