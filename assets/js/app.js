const STORAGE_KEYS = {
  users: "set_users_v1",
  expenses: "set_expenses_v1",
  currentUser: "set_current_user_v1"
};

const CATEGORY_LIST = [
  "Food",
  "Transport",
  "Bills",
  "Shopping",
  "Health",
  "Education",
  "Entertainment",
  "Utilities",
  "Other"
];

const state = {
  users: [],
  expenses: [],
  currentUser: null,
  activeView: "overview",
  dateRange: "all",
  searchTerm: ""
};

const elements = {};

const currencyFormatter = new Intl.NumberFormat("en-BD", {
  style: "currency",
  currency: "BDT",
  maximumFractionDigits: 2
});

if (typeof document === "undefined") {
  console.error(
    "This script is browser-only. Open index.html via a local web server instead of running app.js with Node."
  );
} else {
  document.addEventListener("DOMContentLoaded", () => {
    cacheElements();
    bindEvents();
    bootstrap().catch((error) => {
      console.error(error);
      showFeedback(elements.authFeedback, "App failed to initialize. Please refresh.", "error");
    });
  });
}

function cacheElements() {
  elements.authSection = document.getElementById("auth-section");
  elements.appSection = document.getElementById("app-section");
  elements.authFeedback = document.getElementById("auth-feedback");
  elements.appFeedback = document.getElementById("app-feedback");

  elements.authTabButtons = Array.from(document.querySelectorAll("[data-auth-tab]"));
  elements.loginForm = document.getElementById("login-form");
  elements.registerForm = document.getElementById("register-form");

  elements.welcomeText = document.getElementById("welcome-text");
  elements.logoutBtn = document.getElementById("logout-btn");
  elements.navButtons = Array.from(document.querySelectorAll(".nav-btn[data-view]"));
  elements.adminTab = document.getElementById("admin-tab");
  elements.viewTitle = document.getElementById("view-title");
  elements.dateRange = document.getElementById("date-range");

  elements.cardTotal = document.getElementById("card-total");
  elements.cardMonth = document.getElementById("card-month");
  elements.cardCount = document.getElementById("card-count");
  elements.cardCategory = document.getElementById("card-category");
  elements.recentExpenses = document.getElementById("recent-expenses");
  elements.overviewCategoryBars = document.getElementById("overview-category-bars");

  elements.expenseForm = document.getElementById("expense-form");
  elements.expenseFeedback = document.getElementById("expense-feedback");
  elements.expenseFormTitle = document.getElementById("expense-form-title");
  elements.expenseSubmitBtn = document.getElementById("expense-submit-btn");
  elements.expenseCancelBtn = document.getElementById("expense-cancel-btn");
  elements.expenseId = document.getElementById("expense-id");
  elements.expenseAmount = document.getElementById("expense-amount");
  elements.expenseDate = document.getElementById("expense-date");
  elements.expenseCategory = document.getElementById("expense-category");
  elements.expenseDescription = document.getElementById("expense-description");
  elements.expenseTableBody = document.getElementById("expense-table-body");
  elements.searchExpense = document.getElementById("search-expense");
  elements.clearSearchBtn = document.getElementById("clear-search-btn");

  elements.reportCategoryBars = document.getElementById("report-category-bars");
  elements.monthlyTableBody = document.getElementById("monthly-table-body");
  elements.downloadReportBtn = document.getElementById("download-report-btn");
  elements.reportFeedback = document.getElementById("report-feedback");

  elements.adminTotalUsers = document.getElementById("admin-total-users");
  elements.adminActiveUsers = document.getElementById("admin-active-users");
  elements.adminTotalExpenses = document.getElementById("admin-total-expenses");
  elements.adminSystemTotal = document.getElementById("admin-system-total");
  elements.adminUserBody = document.getElementById("admin-user-body");
  elements.adminFeedback = document.getElementById("admin-feedback");
}

function bindEvents() {
  for (const button of elements.authTabButtons) {
    button.addEventListener("click", () => switchAuthTab(button.dataset.authTab));
  }

  elements.loginForm.addEventListener("submit", handleLoginSubmit);
  elements.registerForm.addEventListener("submit", handleRegisterSubmit);

  elements.logoutBtn.addEventListener("click", handleLogout);

  for (const button of elements.navButtons) {
    button.addEventListener("click", () => {
      switchView(button.dataset.view);
    });
  }

  elements.dateRange.addEventListener("change", (event) => {
    state.dateRange = event.target.value;
    renderAll();
  });

  elements.expenseForm.addEventListener("submit", handleExpenseSubmit);
  elements.expenseCancelBtn.addEventListener("click", resetExpenseEditor);
  elements.expenseTableBody.addEventListener("click", handleExpenseTableActions);

  elements.searchExpense.addEventListener("input", (event) => {
    state.searchTerm = event.target.value.trim();
    renderExpenseTable();
  });

  elements.clearSearchBtn.addEventListener("click", () => {
    state.searchTerm = "";
    elements.searchExpense.value = "";
    renderExpenseTable();
  });

  elements.downloadReportBtn.addEventListener("click", handleDownloadReport);
  elements.adminUserBody.addEventListener("click", handleAdminTableActions);
}

async function bootstrap() {
  await seedDefaultAdmin();
  loadState();
  resetExpenseEditor();

  if (state.currentUser) {
    showApp();
    return;
  }

  showAuth();
}

async function seedDefaultAdmin() {
  const users = readStorage(STORAGE_KEYS.users, []);
  const hasAdmin = users.some((user) => user.role === "admin");

  if (hasAdmin) {
    return;
  }

  users.push({
    id: createId(),
    name: "System Admin",
    email: "admin@expense.local",
    passwordHash: await hashPassword("Admin1234"),
    role: "admin",
    isActive: true,
    createdAt: new Date().toISOString()
  });

  writeStorage(STORAGE_KEYS.users, users);
}

function loadState() {
  state.users = readStorage(STORAGE_KEYS.users, []);
  state.expenses = readStorage(STORAGE_KEYS.expenses, []);

  const persistedUser = readStorage(STORAGE_KEYS.currentUser, null);

  if (!persistedUser) {
    state.currentUser = null;
    return;
  }

  const matchedUser = state.users.find((user) => user.id === persistedUser.id);

  if (!matchedUser || !matchedUser.isActive) {
    state.currentUser = null;
    writeStorage(STORAGE_KEYS.currentUser, null);
    return;
  }

  state.currentUser = {
    id: matchedUser.id,
    name: matchedUser.name,
    email: matchedUser.email,
    role: matchedUser.role
  };
}

function showAuth() {
  elements.appSection.classList.add("hidden");
  elements.authSection.classList.remove("hidden");
  switchAuthTab("login");
}

function showApp() {
  if (!state.currentUser) {
    showAuth();
    return;
  }

  elements.authSection.classList.add("hidden");
  elements.appSection.classList.remove("hidden");
  elements.welcomeText.textContent = `Signed in as ${state.currentUser.name} (${state.currentUser.role})`;

  const isAdmin = state.currentUser.role === "admin";
  elements.adminTab.classList.toggle("hidden", !isAdmin);

  if (!isAdmin && state.activeView === "admin") {
    state.activeView = "overview";
  }

  switchView(state.activeView);
  renderAll();
}

function switchAuthTab(tabName) {
  const isLogin = tabName === "login";

  elements.loginForm.classList.toggle("is-active", isLogin);
  elements.registerForm.classList.toggle("is-active", !isLogin);

  for (const button of elements.authTabButtons) {
    const buttonIsActive = button.dataset.authTab === tabName;
    button.classList.toggle("is-active", buttonIsActive);
    button.setAttribute("aria-selected", String(buttonIsActive));
  }

  showFeedback(elements.authFeedback, "");
}

async function handleRegisterSubmit(event) {
  event.preventDefault();
  showFeedback(elements.authFeedback, "");

  const name = document.getElementById("register-name").value.trim();
  const email = document.getElementById("register-email").value.trim().toLowerCase();
  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById("register-confirm-password").value;

  if (!name || !email || !password || !confirmPassword) {
    showFeedback(elements.authFeedback, "Please fill every registration field.", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showFeedback(elements.authFeedback, "Please provide a valid email address.", "error");
    return;
  }

  if (password !== confirmPassword) {
    showFeedback(elements.authFeedback, "Passwords do not match.", "error");
    return;
  }

  if (!isStrongPassword(password)) {
    showFeedback(elements.authFeedback, "Password must be at least 8 chars and include letters and numbers.", "error");
    return;
  }

  if (state.users.some((user) => user.email === email)) {
    showFeedback(elements.authFeedback, "An account already exists with this email.", "error");
    return;
  }

  const newUser = {
    id: createId(),
    name,
    email,
    passwordHash: await hashPassword(password),
    role: "user",
    isActive: true,
    createdAt: new Date().toISOString()
  };

  state.users.push(newUser);
  persistUsers();

  elements.registerForm.reset();
  switchAuthTab("login");
  showFeedback(elements.authFeedback, "Registration successful. Please login.", "success");
}

async function handleLoginSubmit(event) {
  event.preventDefault();
  showFeedback(elements.authFeedback, "");

  const email = document.getElementById("login-email").value.trim().toLowerCase();
  const password = document.getElementById("login-password").value;

  if (!email || !password) {
    showFeedback(elements.authFeedback, "Email and password are required.", "error");
    return;
  }

  const user = state.users.find((entry) => entry.email === email);

  if (!user) {
    showFeedback(elements.authFeedback, "Invalid login credentials.", "error");
    return;
  }

  if (!user.isActive) {
    showFeedback(elements.authFeedback, "This account is inactive. Contact an admin.", "error");
    return;
  }

  const passwordHash = await hashPassword(password);

  if (user.passwordHash !== passwordHash) {
    showFeedback(elements.authFeedback, "Invalid login credentials.", "error");
    return;
  }

  state.currentUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  };

  writeStorage(STORAGE_KEYS.currentUser, state.currentUser);
  elements.loginForm.reset();
  showApp();
}

function handleLogout() {
  state.currentUser = null;
  writeStorage(STORAGE_KEYS.currentUser, null);
  showAuth();
}

function switchView(viewName) {
  if (!state.currentUser) {
    return;
  }

  if (viewName === "admin" && state.currentUser.role !== "admin") {
    viewName = "overview";
  }

  state.activeView = viewName;

  for (const button of elements.navButtons) {
    button.classList.toggle("is-active", button.dataset.view === viewName);
  }

  const views = ["overview", "expenses", "reports", "admin"];
  for (const name of views) {
    const section = document.getElementById(`${name}-view`);
    if (section) {
      section.classList.toggle("hidden", name !== viewName);
    }
  }

  const titleMap = {
    overview: "Overview",
    expenses: "Expenses",
    reports: "Reports",
    admin: "Admin"
  };

  elements.viewTitle.textContent = titleMap[viewName] || "Overview";
}

function handleExpenseSubmit(event) {
  event.preventDefault();

  if (!state.currentUser) {
    return;
  }

  const amount = Number(elements.expenseAmount.value);
  const date = elements.expenseDate.value;
  const category = elements.expenseCategory.value;
  const description = elements.expenseDescription.value.trim();
  const expenseId = elements.expenseId.value;

  if (!Number.isFinite(amount) || amount <= 0) {
    showFeedback(elements.expenseFeedback, "Amount must be greater than zero.", "error");
    return;
  }

  if (!date) {
    showFeedback(elements.expenseFeedback, "Date is required.", "error");
    return;
  }

  if (!CATEGORY_LIST.includes(category)) {
    showFeedback(elements.expenseFeedback, "Please select a valid category.", "error");
    return;
  }

  const nowIso = new Date().toISOString();
  const existingIndex = state.expenses.findIndex(
    (expense) => expense.id === expenseId && expense.userId === state.currentUser.id
  );

  if (existingIndex >= 0) {
    state.expenses[existingIndex] = {
      ...state.expenses[existingIndex],
      amount: Number(amount.toFixed(2)),
      date,
      category,
      description,
      updatedAt: nowIso
    };
    showFeedback(elements.expenseFeedback, "Expense updated successfully.", "success");
  } else {
    state.expenses.push({
      id: createId(),
      userId: state.currentUser.id,
      amount: Number(amount.toFixed(2)),
      date,
      category,
      description,
      createdAt: nowIso,
      updatedAt: nowIso
    });
    showFeedback(elements.expenseFeedback, "Expense added successfully.", "success");
  }

  persistExpenses();
  resetExpenseEditor();
  renderAll();
}

function handleExpenseTableActions(event) {
  const targetButton = event.target.closest("button[data-action]");

  if (!targetButton || !state.currentUser) {
    return;
  }

  const expenseId = targetButton.dataset.expenseId;

  if (!expenseId) {
    return;
  }

  const expense = state.expenses.find(
    (entry) => entry.id === expenseId && entry.userId === state.currentUser.id
  );

  if (!expense) {
    return;
  }

  if (targetButton.dataset.action === "edit") {
    elements.expenseId.value = expense.id;
    elements.expenseAmount.value = String(expense.amount);
    elements.expenseDate.value = expense.date;
    elements.expenseCategory.value = expense.category;
    elements.expenseDescription.value = expense.description;
    elements.expenseFormTitle.textContent = "Edit Expense";
    elements.expenseSubmitBtn.textContent = "Update Expense";
    elements.expenseCancelBtn.classList.remove("hidden");
    showFeedback(elements.expenseFeedback, "Editing selected expense.", "success");
    switchView("expenses");
    return;
  }

  if (targetButton.dataset.action === "delete") {
    const isConfirmed = window.confirm("Delete this expense?");

    if (!isConfirmed) {
      return;
    }

    state.expenses = state.expenses.filter((entry) => entry.id !== expense.id);
    persistExpenses();
    resetExpenseEditor();
    renderAll();
    showFeedback(elements.expenseFeedback, "Expense deleted.", "success");
  }
}

function resetExpenseEditor() {
  elements.expenseForm.reset();
  elements.expenseId.value = "";
  elements.expenseFormTitle.textContent = "Add Expense";
  elements.expenseSubmitBtn.textContent = "Save Expense";
  elements.expenseCancelBtn.classList.add("hidden");
  elements.expenseDate.value = new Date().toISOString().slice(0, 10);
}

function renderAll() {
  renderOverview();
  renderExpenseTable();
  renderReports();
  renderAdmin();
}

function renderOverview() {
  const expenses = getDateFilteredExpenses(getCurrentUserExpenses());
  const monthExpenses = getCurrentMonthExpenses(getCurrentUserExpenses());

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const monthTotal = monthExpenses.reduce((sum, expense) => sum + expense.amount, 0);

  elements.cardTotal.textContent = formatMoney(total);
  elements.cardMonth.textContent = formatMoney(monthTotal);
  elements.cardCount.textContent = String(expenses.length);
  elements.cardCategory.textContent = getTopCategory(expenses) || "-";

  renderRecentExpenses(expenses);
  renderCategoryBars(elements.overviewCategoryBars, expenses);
}

function renderRecentExpenses(expenses) {
  const sorted = [...expenses].sort(compareByDateDesc).slice(0, 6);

  if (sorted.length === 0) {
    elements.recentExpenses.innerHTML = '<li class="empty">No expenses yet. Add one to get started.</li>';
    return;
  }

  elements.recentExpenses.innerHTML = sorted
    .map((expense) => {
      return `<li class="recent-item">
        <div class="recent-main">
          <strong>${escapeHtml(expense.category)}</strong>
          <span class="recent-meta">${formatDate(expense.date)}${expense.description ? ` - ${escapeHtml(expense.description)}` : ""}</span>
        </div>
        <strong>${formatMoney(expense.amount)}</strong>
      </li>`;
    })
    .join("");
}

function renderExpenseTable() {
  const expenses = getSearchFilteredExpenses(getDateFilteredExpenses(getCurrentUserExpenses()));
  const sorted = [...expenses].sort(compareByDateDesc);

  if (sorted.length === 0) {
    elements.expenseTableBody.innerHTML = '<tr><td colspan="5" class="empty">No expense records found for this filter.</td></tr>';
    return;
  }

  elements.expenseTableBody.innerHTML = sorted
    .map((expense) => {
      return `<tr>
        <td>${formatDate(expense.date)}</td>
        <td>${escapeHtml(expense.category)}</td>
        <td>${formatMoney(expense.amount)}</td>
        <td class="description">${expense.description ? escapeHtml(expense.description) : "-"}</td>
        <td>
          <div class="table-actions">
            <button type="button" class="btn small ghost" data-action="edit" data-expense-id="${expense.id}">Edit</button>
            <button type="button" class="btn small secondary" data-action="delete" data-expense-id="${expense.id}">Delete</button>
          </div>
        </td>
      </tr>`;
    })
    .join("");
}

function renderReports() {
  const expenses = getDateFilteredExpenses(getCurrentUserExpenses());

  renderCategoryBars(elements.reportCategoryBars, expenses);

  const groupedByMonth = new Map();

  for (const expense of expenses) {
    const monthKey = expense.date.slice(0, 7);

    if (!groupedByMonth.has(monthKey)) {
      groupedByMonth.set(monthKey, {
        count: 0,
        total: 0
      });
    }

    const entry = groupedByMonth.get(monthKey);
    entry.count += 1;
    entry.total += expense.amount;
  }

  const rows = Array.from(groupedByMonth.entries()).sort((a, b) => b[0].localeCompare(a[0]));

  if (rows.length === 0) {
    elements.monthlyTableBody.innerHTML = '<tr><td colspan="3" class="empty">No report data available yet.</td></tr>';
    return;
  }

  elements.monthlyTableBody.innerHTML = rows
    .map(([monthKey, values]) => {
      return `<tr>
        <td>${formatMonth(monthKey)}</td>
        <td>${values.count}</td>
        <td>${formatMoney(values.total)}</td>
      </tr>`;
    })
    .join("");
}

function renderCategoryBars(container, expenses) {
  const totals = new Map(CATEGORY_LIST.map((category) => [category, 0]));

  for (const expense of expenses) {
    const currentTotal = totals.get(expense.category) || 0;
    totals.set(expense.category, currentTotal + expense.amount);
  }

  const ordered = Array.from(totals.entries()).filter(([, total]) => total > 0).sort((a, b) => b[1] - a[1]);

  if (ordered.length === 0) {
    container.innerHTML = '<p class="empty">No category data available yet.</p>';
    return;
  }

  const max = ordered[0][1];

  container.innerHTML = ordered
    .map(([category, total]) => {
      const width = Math.max(6, Math.round((total / max) * 100));
      return `<div class="bar-row">
        <div class="bar-head">
          <span>${escapeHtml(category)}</span>
          <strong>${formatMoney(total)}</strong>
        </div>
        <div class="bar-track">
          <div class="bar-fill" style="width:${width}%"></div>
        </div>
      </div>`;
    })
    .join("");
}

function renderAdmin() {
  const isAdmin = state.currentUser && state.currentUser.role === "admin";

  if (!isAdmin) {
    return;
  }

  const activeUsers = state.users.filter((user) => user.isActive).length;
  const systemTotal = state.expenses.reduce((sum, expense) => sum + expense.amount, 0);

  elements.adminTotalUsers.textContent = String(state.users.length);
  elements.adminActiveUsers.textContent = String(activeUsers);
  elements.adminTotalExpenses.textContent = String(state.expenses.length);
  elements.adminSystemTotal.textContent = formatMoney(systemTotal);

  elements.adminUserBody.innerHTML = state.users
    .map((user) => {
      const expenseCount = state.expenses.filter((expense) => expense.userId === user.id).length;
      const statusMarkup = user.isActive
        ? '<span class="badge active">Active</span>'
        : '<span class="badge inactive">Inactive</span>';
      const actionMarkup = user.role === "admin"
        ? '<span class="protected-label">Protected</span>'
        : `<button type="button" class="btn small ghost" data-action="toggle-user" data-user-id="${user.id}">${user.isActive ? "Deactivate" : "Activate"}</button>`;

      return `<tr>
        <td>${escapeHtml(user.name)}</td>
        <td>${escapeHtml(user.email)}</td>
        <td>${escapeHtml(user.role)}</td>
        <td>${statusMarkup}</td>
        <td>${expenseCount}</td>
        <td>${actionMarkup}</td>
      </tr>`;
    })
    .join("");
}

function handleAdminTableActions(event) {
  const actionButton = event.target.closest("button[data-action='toggle-user']");

  if (!actionButton || !state.currentUser || state.currentUser.role !== "admin") {
    return;
  }

  const userId = actionButton.dataset.userId;
  const user = state.users.find((entry) => entry.id === userId);

  if (!user || user.role === "admin") {
    return;
  }

  user.isActive = !user.isActive;
  persistUsers();
  renderAdmin();

  const message = user.isActive
    ? `${user.name} is now active.`
    : `${user.name} is now inactive.`;

  showFeedback(elements.adminFeedback, message, "success");
}

function handleDownloadReport() {
  if (!state.currentUser) {
    return;
  }

  const expenses = getDateFilteredExpenses(getCurrentUserExpenses());
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const payload = {
    generatedAt: new Date().toISOString(),
    user: {
      id: state.currentUser.id,
      name: state.currentUser.name,
      email: state.currentUser.email
    },
    range: state.dateRange,
    transactions: expenses.length,
    total,
    expenses
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 10);

  anchor.href = url;
  anchor.download = `expense-report-${stamp}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);

  showFeedback(elements.reportFeedback, "Report downloaded successfully.", "success");
}

function getCurrentUserExpenses() {
  if (!state.currentUser) {
    return [];
  }

  return state.expenses.filter((expense) => expense.userId === state.currentUser.id);
}

function getDateFilteredExpenses(expenses) {
  if (state.dateRange === "all") {
    return expenses;
  }

  const now = new Date();

  if (state.dateRange === "month") {
    return expenses.filter((expense) => {
      const date = new Date(`${expense.date}T00:00:00`);
      return date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth();
    });
  }

  if (state.dateRange === "last30") {
    const threshold = new Date();
    threshold.setHours(0, 0, 0, 0);
    threshold.setDate(threshold.getDate() - 30);

    return expenses.filter((expense) => {
      const date = new Date(`${expense.date}T00:00:00`);
      return date >= threshold;
    });
  }

  return expenses;
}

function getSearchFilteredExpenses(expenses) {
  const search = state.searchTerm.toLowerCase();

  if (!search) {
    return expenses;
  }

  return expenses.filter((expense) => {
    const combined = `${expense.category} ${expense.date} ${expense.amount} ${expense.description}`.toLowerCase();
    return combined.includes(search);
  });
}

function getCurrentMonthExpenses(expenses) {
  const now = new Date();
  return expenses.filter((expense) => {
    const date = new Date(`${expense.date}T00:00:00`);
    return date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth();
  });
}

function getTopCategory(expenses) {
  if (expenses.length === 0) {
    return "";
  }

  const totals = new Map();

  for (const expense of expenses) {
    totals.set(expense.category, (totals.get(expense.category) || 0) + expense.amount);
  }

  return Array.from(totals.entries()).sort((a, b) => b[1] - a[1])[0][0];
}

function compareByDateDesc(a, b) {
  if (a.date === b.date) {
    return b.updatedAt.localeCompare(a.updatedAt);
  }
  return b.date.localeCompare(a.date);
}

function persistUsers() {
  writeStorage(STORAGE_KEYS.users, state.users);
}

function persistExpenses() {
  writeStorage(STORAGE_KEYS.expenses, state.expenses);
}

function readStorage(key, fallbackValue) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallbackValue;
  } catch (error) {
    console.warn("Storage read failed:", error);
    return fallbackValue;
  }
}

function writeStorage(key, value) {
  try {
    if (value === null || value === undefined) {
      localStorage.removeItem(key);
      return;
    }

    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("Storage write failed:", error);
  }
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isStrongPassword(password) {
  return password.length >= 8 && /[A-Za-z]/.test(password) && /\d/.test(password);
}

async function hashPassword(password) {
  if (window.crypto && window.crypto.subtle) {
    const encoded = new TextEncoder().encode(password);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", encoded);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  let fallbackHash = 0;
  for (let index = 0; index < password.length; index += 1) {
    fallbackHash = (fallbackHash << 5) - fallbackHash + password.charCodeAt(index);
    fallbackHash |= 0;
  }
  return `fallback-${Math.abs(fallbackHash)}`;
}

function createId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return `id-${Date.now()}-${Math.floor(Math.random() * 100000)}`;
}

function formatMoney(amount) {
  return currencyFormatter.format(amount || 0);
}

function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

function formatMonth(monthKey) {
  const date = new Date(`${monthKey}-01T00:00:00`);
  return date.toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric"
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function showFeedback(target, message, type) {
  target.textContent = message;
  target.classList.remove("is-error", "is-success");

  if (!message) {
    return;
  }

  if (type === "error") {
    target.classList.add("is-error");
  }

  if (type === "success") {
    target.classList.add("is-success");
  }
}
