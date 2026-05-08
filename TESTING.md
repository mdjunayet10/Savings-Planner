# Manual Testing Checklist

Use this checklist before final submission. Run the app from a local static server and keep the browser console open.

## 1. App Startup

- Open `index.html` through a local server.
- Expected: The login/register screen appears without console errors.
- Refresh the page.
- Expected: The app reloads normally without broken layout or JavaScript errors.

## 2. Register, Login, And Logout

- Register a new user with a valid name, email, and password.
- Expected: Registration succeeds and the app opens.
- Log out.
- Expected: The login screen appears and the saved session is cleared.
- Log in with the same account.
- Expected: Login succeeds and the app opens.
- Try an incorrect password.
- Expected: Login is rejected with a clear error message.

## 3. Login Persistence After Refresh

- Log in successfully.
- Refresh the page.
- Expected: The same user remains logged in.
- Log out and refresh again.
- Expected: The login screen remains visible.

## 4. Demo Forgot Password

- Click `Forgot Password?` on the login screen.
- Enter an email that is not registered.
- Expected: The app shows an error.
- Enter a registered email.
- Expected: The app shows a demo verification code on screen and explains that no real email is sent.
- Enter a wrong code.
- Expected: The app rejects the code.
- Enter the correct code with mismatched new passwords.
- Expected: The app rejects the mismatch.
- Enter the correct code with matching valid passwords.
- Expected: The password is reset and the app returns to login.
- Log in with the old password.
- Expected: Login fails.
- Log in with the new password.
- Expected: Login succeeds.

## 5. Expenses Add, Edit, And Delete

- Open the Expenses page.
- Add an expense with amount, date, category, and description.
- Expected: The expense appears in the table and totals update.
- Confirm the Category dropdown includes `Other`.
- Add another expense using `Other`.
- Expected: The expense saves successfully.
- Edit an existing expense.
- Expected: The form switches to edit mode and saves the changed data.
- Delete an expense and confirm.
- Expected: The expense is removed and totals update.

## 6. Budgets

- Set a monthly budget.
- Expected: The overview budget summary updates.
- Set a category budget.
- Expected: The category budget table shows the saved budget and spending status.
- Clear a budget.
- Expected: The budget is removed and the UI updates.

## 7. Reports

- Open the Reports page after adding expenses.
- Expected: The spending distribution chart and legend render correctly.
- Change the report builder period type and date controls.
- Expected: The generated report summary updates.
- Click `Export CSV`.
- Expected: A CSV report downloads when expenses exist.

## 8. Receipts

- Add or edit an expense with an image or PDF receipt.
- Expected: The receipt is saved with the expense.
- Click the receipt view/download action from the expense table.
- Expected: The receipt opens or downloads.
- Remove a receipt while editing an expense.
- Expected: The receipt is removed after saving.

## 9. Settings

- Open Settings.
- Update profile name or email.
- Expected: The profile saves and the header/user details update.
- Change currency.
- Expected: Money values update to the selected currency format.
- Change language.
- Expected: Current interface labels update.
- Change theme mode, theme color, or font size.
- Expected: Appearance updates without changing the app structure.

## 10. Backup, Export, And Restore

- Open Settings.
- Click `Export Full Backup`.
- Expected: A JSON backup file downloads.
- Try restoring an invalid JSON file.
- Expected: The app rejects it and current data is not overwritten.
- Restore a valid Smart Expense Tracker backup.
- Expected: The app asks for confirmation before replacing local data.
- Confirm restore.
- Expected: Backup data loads successfully.
- Cancel restore.
- Expected: Existing local data remains unchanged.

## 11. Admin And Demo Controls

- Log in with `admin@expense.local` and `Admin1234`.
- Expected: The Admin page is visible.
- Toggle a non-admin user status.
- Expected: The user status updates and audit activity is recorded.
- Log in as a non-admin user.
- Expected: The Admin page is not visible.

## 12. Theme And Dark Mode

- Use the app in dark mode.
- Expected: Text, cards, tables, inputs, modals, and dropdowns remain readable.
- Check primary/golden buttons.
- Expected: Golden button colors are preserved.
- Switch theme mode if available.
- Expected: The app remains usable and readable.

## 13. Responsive And Mobile Check

- Resize the browser to mobile width or use device toolbar.
- Expected: Navigation, forms, tables, settings, and reports remain usable.
- Add and edit an expense on mobile width.
- Expected: Controls fit without overlapping.

## 14. Final Console Check

- Visit Overview, Expenses, Reports, Settings, and Admin where available.
- Expected: Navigation is smooth and no unnecessary loading state appears.
- Watch the browser console while using the main features.
- Expected: No uncaught JavaScript errors appear.
