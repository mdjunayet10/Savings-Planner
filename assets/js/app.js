const APP_BACKUP_VERSION = 2;

const STORAGE_KEYS = {
  users: "set_users_v1",
  expenses: "set_expenses_v1",
  currentUser: "set_current_user_v1",
  budgets: "set_budgets_v1",
  categoryBudgets: "set_category_budgets_v1",
  customCategories: "set_custom_categories_v1",
  savedViews: "set_saved_views_v1",
  billReminders: "set_bill_reminders_v1",
  auditLogs: "set_audit_logs_v1",
  userPreferences: "set_user_preferences_v1",
  appearanceSettings: "set_appearance_settings_v1",
  supportQueue: "set_support_queue_v1"
};

const BASE_CATEGORY_LIST = [
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

const DEFAULT_USER_SETTINGS = {
  currency: "BDT",
  language: "en",
  dateLocale: "en-GB",
  timezone: "Asia/Dhaka",
  weekStart: "monday",
  defaultRange: "all"
};

const DEFAULT_PRIVACY_SETTINGS = {
  appLockEnabled: false,
  appLockPinHash: "",
  biometricEnabled: false,
  twoFactorEnabled: false,
  permissions: {
    notifications: true,
    analytics: false,
    supportContact: true,
    dataExport: true
  }
};

const DEFAULT_APPEARANCE_SETTINGS = {
  themeMode: "dark",
  themeColor: "emerald",
  fontSize: "medium",
  widgets: {
    insights: true,
    forecast: true,
    recent: true,
    categories: true
  }
};

const DEFAULT_SUPPORT_QUEUE = {
  feedback: [],
  bugReports: [],
  deletionRequests: []
};

const DEFAULT_EXPENSE_FILTERS = {
  fromDate: "",
  toDate: "",
  category: "all",
  minAmount: "",
  maxAmount: "",
  tag: ""
};

const SUPPORTED_DATE_RANGES = ["all", "month", "last30", "last7", "last1", "yearly", "custom"];
const SUPPORTED_WEEK_STARTS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const SUPPORTED_CURRENCIES = ["BDT", "USD", "EUR", "INR", "GBP"];
const SUPPORTED_DATE_LOCALES = ["en-GB", "en-US", "en-CA"];
const SUPPORTED_TIMEZONES = ["Asia/Dhaka", "UTC", "Asia/Kolkata", "Europe/London", "America/New_York"];
const SUPPORTED_LANGUAGES = ["en", "bn", "hi"];
const SUPPORTED_THEME_COLORS = ["emerald", "ocean", "sunset", "rose", "slate", "cobalt", "graphite", "amber"];

const LANGUAGE_PACKS = {
  en: {
    dashboard: "Dashboard",
    filterPeriod: "Filter period",
    logout: "Log Out",
    signedInAs: "Signed in as",
    roles: {
      admin: "Admin",
      user: "User"
    },
    nav: {
      overview: "Overview",
      expenses: "Expenses",
      reports: "Reports",
      settings: "Settings",
      admin: "Admin"
    },
    viewTitles: {
      overview: "Overview",
      expenses: "Expenses",
      reports: "Reports",
      settings: "Settings",
      admin: "Admin"
    },
    viewSubtitles: {
      overview: "Live snapshot of spending health, pace, and forecast.",
      expenses: "Capture and organize spending with advanced filtering.",
      reports: "Generate reports and review your personal audit trail.",
      settings: "Manage account preferences, appearance, and backup tools.",
      admin: "Manage user access and monitor platform activity."
    }
  },
  bn: {
    dashboard: "ড্যাশবোর্ড",
    filterPeriod: "সময়ের ফিল্টার",
    logout: "লগ আউট",
    signedInAs: "লগ ইন করেছেন",
    roles: {
      admin: "অ্যাডমিন",
      user: "ইউজার"
    },
    nav: {
      overview: "ওভারভিউ",
      expenses: "খরচ",
      reports: "রিপোর্ট",
      settings: "সেটিংস",
      admin: "অ্যাডমিন"
    },
    viewTitles: {
      overview: "ওভারভিউ",
      expenses: "খরচ",
      reports: "রিপোর্ট",
      settings: "সেটিংস",
      admin: "অ্যাডমিন"
    },
    viewSubtitles: {
      overview: "খরচের অবস্থা, গতি, এবং পূর্বাভাসের লাইভ চিত্র দেখুন।",
      expenses: "খরচ যোগ করুন এবং উন্নত ফিল্টার দিয়ে সাজান।",
      reports: "রিপোর্ট তৈরি করুন এবং ব্যক্তিগত অডিট ট্রেইল দেখুন।",
      settings: "অ্যাকাউন্ট পছন্দ, থিম, এবং ব্যাকআপ টুলস নিয়ন্ত্রণ করুন।",
      admin: "ইউজার এক্সেস এবং প্ল্যাটফর্ম অ্যাক্টিভিটি পরিচালনা করুন।"
    }
  },
  hi: {
    dashboard: "डैशबोर्ड",
    filterPeriod: "समय फ़िल्टर",
    logout: "लॉग आउट",
    signedInAs: "लॉग इन किया है",
    roles: {
      admin: "एडमिन",
      user: "यूज़र"
    },
    nav: {
      overview: "ओवरव्यू",
      expenses: "खर्च",
      reports: "रिपोर्ट",
      settings: "सेटिंग्स",
      admin: "एडमिन"
    },
    viewTitles: {
      overview: "ओवरव्यू",
      expenses: "खर्च",
      reports: "रिपोर्ट",
      settings: "सेटिंग्स",
      admin: "एडमिन"
    },
    viewSubtitles: {
      overview: "खर्च की स्थिति, गति और पूर्वानुमान का लाइव सारांश देखें।",
      expenses: "खर्च जोड़ें और उन्नत फ़िल्टर के साथ व्यवस्थित करें।",
      reports: "रिपोर्ट बनाएं और अपनी पर्सनल ऑडिट ट्रेल देखें।",
      settings: "अकाउंट प्राथमिकताएं, थीम और बैकअप टूल्स प्रबंधित करें।",
      admin: "यूज़र एक्सेस और प्लेटफ़ॉर्म गतिविधि प्रबंधित करें।"
    }
  }
};

const FULL_UI_TRANSLATIONS = {
  en: {
    selectors: {
      ".brand-block .label": "Personal Finance",
      ".brand-subtitle": "Plan, track, and improve your monthly cash flow.",
      "#undo-message": "Last action can be undone.",
      "#undo-btn": "Undo",
      "#undo-dismiss-btn": "Dismiss",
      "#overview-view .card-grid .card:nth-child(1) .card-label": "Total Expenses",
      "#overview-view .card-grid .card:nth-child(2) .card-label": "This Month",
      "#overview-view .card-grid .card:nth-child(3) .card-label": "Transactions",
      "#overview-view .card-grid .card:nth-child(4) .card-label": "Top Category",
      "#overview-view .budget-panel h3": "Monthly Budget",
      "#overview-view .budget-head .budget-note": "Track this month's spend and get alerts before you go over limit.",
      "#budget-form .budget-actions button[type='submit']": "Save",
      "#budget-clear-btn": "Clear",
      "#overview-view .budget-metrics p:nth-child(1) span": "Budget",
      "#overview-view .budget-metrics p:nth-child(2) span": "Spent (this month)",
      "#overview-view .budget-metrics p:nth-child(3) span": "Remaining",
      "#budget-status": "Set a monthly budget to start tracking alerts.",
      "#overview-forecast-panel h3": "Forecast and Spending Pace",
      "#overview-recent-panel h3": "Recent Expenses",
      "#overview-category-panel h3": "Spending by Category",
      "#expense-form-title": "Add Expense",
      "label[for='expense-amount']": "Amount",
      "label[for='expense-date']": "Date",
      "label[for='expense-category']": "Category",
      "#add-custom-category-btn": "Add",
      "label[for='expense-receipt']": "Receipt (optional)",
      "label[for='expense-description']": "Description",
      "#expense-submit-btn": "Save Expense",
      "#expense-cancel-btn": "Cancel Edit",
      ".expense-history-panel h3": "Expense History",
      ".expense-history-panel thead th:nth-child(1)": "Date",
      ".expense-history-panel thead th:nth-child(2)": "Category",
      ".expense-history-panel thead th:nth-child(3)": "Amount",
      ".expense-history-panel thead th:nth-child(4)": "Receipt",
      ".expense-history-panel thead th:nth-child(5)": "Description",
      ".expense-history-panel thead th:nth-child(6)": "Actions",
      ".expense-budget-panel h3": "Category Budgets (This Month)",
      "#category-budget-form button[type='submit']": "Set",
      "#category-budget-clear-btn": "Clear",
      ".expense-budget-panel thead th:nth-child(1)": "Category",
      ".expense-budget-panel thead th:nth-child(2)": "Budget",
      ".expense-budget-panel thead th:nth-child(3)": "Spent",
      ".expense-budget-panel thead th:nth-child(4)": "Remaining",
      ".expense-budget-panel thead th:nth-child(5)": "Usage",
      ".expense-budget-panel thead th:nth-child(6)": "Status",
      ".expense-calendar-panel h3": "Bill Reminder Calendar",
      "#bill-reminder-form button[type='submit']": "Add Bill",
      ".expense-calendar-panel thead th:nth-child(1)": "Next Due",
      ".expense-calendar-panel thead th:nth-child(2)": "Title",
      ".expense-calendar-panel thead th:nth-child(3)": "Category",
      ".expense-calendar-panel thead th:nth-child(4)": "Amount",
      ".expense-calendar-panel thead th:nth-child(5)": "Status",
      ".expense-calendar-panel thead th:nth-child(6)": "Action",
      "#reports-view > .panel:nth-of-type(1) h3": "Spending Distribution",
      "#report-pie-empty": "No expense data available for this period.",
      "#reports-view > .panel:nth-of-type(2) h3": "Professional Report Builder",
      "#download-report-btn": "Download JSON Report",
      "#download-csv-btn": "Export CSV",
      "label[for='import-csv-input']": "Import CSV",
      "#generate-report-builder-btn": "Generate",
      "#reports-view > .panel:nth-of-type(3) h3": "Your Audit Trail",
      "#reports-view > .panel:nth-of-type(3) thead th:nth-child(1)": "Time",
      "#reports-view > .panel:nth-of-type(3) thead th:nth-child(2)": "Action",
      "#reports-view > .panel:nth-of-type(3) thead th:nth-child(3)": "Target",
      "#reports-view > .panel:nth-of-type(3) thead th:nth-child(4)": "Details",
      "#admin-view .card-grid .card:nth-child(1) .card-label": "Total Users",
      "#admin-view .card-grid .card:nth-child(2) .card-label": "Active Users",
      "#admin-view .card-grid .card:nth-child(3) .card-label": "All Expenses",
      "#admin-view .card-grid .card:nth-child(4) .card-label": "System Spend",
      "#admin-view > .panel:nth-of-type(1) h3": "User Accounts",
      "#admin-view > .panel:nth-of-type(1) thead th:nth-child(1)": "Name",
      "#admin-view > .panel:nth-of-type(1) thead th:nth-child(2)": "Email",
      "#admin-view > .panel:nth-of-type(1) thead th:nth-child(3)": "Role",
      "#admin-view > .panel:nth-of-type(1) thead th:nth-child(4)": "Status",
      "#admin-view > .panel:nth-of-type(1) thead th:nth-child(5)": "Expenses",
      "#admin-view > .panel:nth-of-type(1) thead th:nth-child(6)": "Action",
      "#admin-view > .panel:nth-of-type(2) h3": "Audit Log (Recent Activity)",
      "#admin-view > .panel:nth-of-type(2) thead th:nth-child(1)": "Time",
      "#admin-view > .panel:nth-of-type(2) thead th:nth-child(2)": "User",
      "#admin-view > .panel:nth-of-type(2) thead th:nth-child(3)": "Action",
      "#admin-view > .panel:nth-of-type(2) thead th:nth-child(4)": "Target",
      "#admin-view > .panel:nth-of-type(2) thead th:nth-child(5)": "Details",
      "#settings-view > .panel:nth-of-type(1) h3": "Profile & Account",
      "label[for='setting-profile-name']": "Full name",
      "label[for='setting-profile-email']": "Email",
      "label[for='setting-profile-picture']": "Profile picture",
      "#profile-settings-form button[type='submit']": "Save Profile",
      "#settings-view > .panel:nth-of-type(2) h3": "Account Preferences",
      "label[for='setting-currency']": "Currency",
      "label[for='setting-language']": "Language",
      "label[for='setting-date-format']": "Date format locale",
      "label[for='setting-timezone']": "Timezone",
      "label[for='setting-week-start']": "First day of week",
      "label[for='setting-default-range']": "Default report range",
      "#preferences-settings-form button[type='submit']": "Save Preferences",
      "#settings-view > .panel:nth-of-type(3) h3": "Appearance",
      "label[for='setting-theme-mode']": "Theme mode",
      "label[for='setting-theme-color']": "Theme color",
      "label[for='setting-font-size']": "Font size",
      "label[for='setting-widget-insights']": "Show insight strip widget",
      "label[for='setting-widget-forecast']": "Show forecast widget",
      "label[for='setting-widget-recent']": "Show recent expenses widget",
      "label[for='setting-widget-categories']": "Show category widget",
      "#appearance-settings-form button[type='submit']": "Save Appearance",
      "#settings-view > .panel:nth-of-type(4) h3": "Help & Support",
      "#faq-list details:nth-child(1) summary": "How do I edit an expense?",
      "#faq-list details:nth-child(1) .hint": "Go to Expenses, use the Edit action from Expense History, update fields, then save.",
      "#faq-list details:nth-child(2) summary": "How do I export my data?",
      "#faq-list details:nth-child(2) .hint": "Use Reports for JSON/CSV export, or Backup and Restore for full backup JSON.",
      "#faq-list details:nth-child(3) summary": "What does App Lock do?",
      "#faq-list details:nth-child(3) .hint": "It stores a secure PIN preference for your account as a lock state setting.",
      "label[for='feedback-topic']": "Feedback topic",
      "label[for='feedback-message']": "Feedback message",
      "#feedback-form button[type='submit']": "Send Feedback",
      "label[for='bug-severity']": "Bug severity",
      "label[for='bug-message']": "Bug details",
      "#bug-report-form button[type='submit']": "Submit Bug Report",
      "#settings-view > .panel:nth-of-type(5) h3": "Backup and Restore",
      "#backup-export-btn": "Export Full Backup",
      "label[for='backup-import-input']": "Restore Backup JSON"
    },
    inputLabels: {
      "label[for='expense-remove-receipt']": "Remove existing receipt",
      "label[for='setting-remove-profile-picture']": "Remove current picture"
    },
    placeholders: {
      "#custom-category-input": "e.g. Subscriptions",
      "#expense-description": "Short note about this expense",
      "#bill-title": "Bill title (e.g. House Rent)",
      "#bill-amount": "Amount",
      "#report-builder-year": "Year",
      "#feedback-message": "Share your feedback",
      "#bug-message": "What happened and how to reproduce"
    },
    options: {
      "date-range": {
        all: "All time",
        month: "This month",
        last30: "Last 30 days",
        last7: "Last 7 days",
        last1: "Last 1 day",
        yearly: "This year",
        custom: "Custom time"
      },
      "setting-default-range": {
        all: "All time",
        month: "This month",
        last30: "Last 30 days",
        last7: "Last 7 days",
        last1: "Last 1 day",
        yearly: "This year",
        custom: "Custom time"
      },
      "report-builder-type": {
        monthly: "Monthly",
        weekly: "Weekly",
        yearly: "Yearly",
        latest2years: "Latest 2 Year",
        custom: "Custom"
      },
      "setting-theme-mode": {
        dark: "Dark",
        light: "Light"
      },
      "setting-theme-color": {
        emerald: "Emerald",
        ocean: "Ocean",
        sunset: "Sunset",
        rose: "Rose",
        slate: "Slate Pro",
        cobalt: "Cobalt Pro",
        graphite: "Graphite",
        amber: "Corporate Amber"
      },
      "setting-font-size": {
        small: "Small",
        medium: "Medium",
        large: "Large"
      },
      "setting-week-start": {
        sunday: "Sunday",
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        saturday: "Saturday"
      },
      "feedback-topic": {
        general: "General",
        feature: "Feature request",
        performance: "Performance",
        ui: "UI/UX"
      },
      "bug-severity": {
        low: "Low",
        medium: "Medium",
        high: "High",
        critical: "Critical"
      },
      "bill-category": {
        Rent: "Rent",
        Utilities: "Utilities",
        Subscription: "Subscription",
        Insurance: "Insurance",
        Other: "Other"
      }
    },
    dynamic: {
      budgetLabel: "Budget",
      currentProfilePicture: "Current profile picture",
      noProfilePicture: "No profile picture selected.",
      expenseAddTitle: "Add Expense",
      expenseEditTitle: "Edit Expense",
      expenseSaveButton: "Save Expense",
      expenseUpdateButton: "Update Expense",
      expenseCancelButton: "Cancel Edit",
      expenseEditingFeedback: "Editing selected expense.",
      notSet: "Not set",
      none: "None",
      dailyPace: "Daily pace",
      projectedMonthEnd: "Projected month-end",
      billsDue30d: "Bills due (30d)",
      budgetVariance: "Budget variance",
      setBudgetForProjection: "Set a monthly budget to unlock projection guidance.",
      forecastOverBudgetPrefix: "At this pace, you may exceed budget by",
      forecastOverBudgetSuffix: "Consider reducing non-essential categories.",
      forecastHealthyPrefix: "Forecast is healthy. You are projected to stay within budget by",
      dailyAverageLabel: "Daily Avg",
      highestLabel: "Highest",
      billsTrackedLabel: "Bills Tracked",
      billsSoonLabel: "Bills Soon",
      nextBillLabel: "Next Bill",
      percentUsedSuffix: "% used",
      dueSuffix: "due",
      onWord: "on",
      budgetStatusSetPrompt: "Set a monthly budget to start tracking smart alerts.",
      budgetStatusOverPrefix: "100%+ Alert: Over budget by",
      budgetStatusOverSuffix: "Pause non-essential spending and revise allocations.",
      budgetStatusNinetyPrefix: "90% Alert: You have used",
      budgetStatusNinetySuffix: "of budget. Freeze optional purchases until month-end.",
      budgetStatusSeventyPrefix: "70% Alert: You have used",
      budgetStatusSeventySuffix: "of budget. Review discretionary categories now.",
      budgetStatusOnTrackPrefix: "On track:",
      budgetStatusOnTrackSuffix: "of budget used. Keep current pace.",
      recentExpensesEmpty: "No expenses yet. Add one to get started.",
      expenseKindLabel: "Expense",
      expenseTableEmpty: "No expense records found for this filter.",
      viewReceiptButton: "View",
      editButton: "Edit",
      deleteButton: "Delete",
      pieTotalLabel: "Total",
      pieNoExpenses: "No expenses in the selected filter period.",
      pieNoDataAria: "No expense data to display in pie chart.",
      pieCategoriesLabel: "categories",
      pieChartAriaPrefix: "Pie chart of spending distribution across",
      monthlyTableEmpty: "No report data available yet."
    }
  },
  bn: {
    selectors: {
      ".brand-block .label": "ব্যক্তিগত অর্থব্যবস্থা",
      ".brand-subtitle": "মাসিক নগদ প্রবাহ পরিকল্পনা, ট্র্যাক এবং উন্নত করুন।",
      "#undo-message": "শেষ কাজটি পূর্বাবস্থায় নেওয়া যাবে।",
      "#undo-btn": "আনডু",
      "#undo-dismiss-btn": "বন্ধ করুন",
      "#overview-view .card-grid .card:nth-child(1) .card-label": "মোট খরচ",
      "#overview-view .card-grid .card:nth-child(2) .card-label": "এই মাস",
      "#overview-view .card-grid .card:nth-child(3) .card-label": "লেনদেন",
      "#overview-view .card-grid .card:nth-child(4) .card-label": "শীর্ষ ক্যাটাগরি",
      "#overview-view .budget-panel h3": "মাসিক বাজেট",
      "#overview-view .budget-head .budget-note": "এই মাসের খরচ ট্র্যাক করুন এবং সীমা ছাড়ানোর আগে সতর্কতা পান।",
      "#budget-form .budget-actions button[type='submit']": "সেভ",
      "#budget-clear-btn": "ক্লিয়ার",
      "#overview-view .budget-metrics p:nth-child(2) span": "খরচ (এই মাস)",
      "#overview-view .budget-metrics p:nth-child(3) span": "বাকি",
      "#overview-forecast-panel h3": "পূর্বাভাস ও খরচের গতি",
      "#overview-recent-panel h3": "সাম্প্রতিক খরচ",
      "#overview-category-panel h3": "ক্যাটাগরি অনুযায়ী খরচ",
      "#expense-form-title": "খরচ যোগ করুন",
      "label[for='expense-amount']": "পরিমাণ",
      "label[for='expense-date']": "তারিখ",
      "label[for='expense-category']": "ক্যাটাগরি",
      "label[for='expense-description']": "বিবরণ",
      "#expense-submit-btn": "খরচ সেভ করুন",
      "#expense-cancel-btn": "এডিট বাতিল",
      ".expense-history-panel h3": "খরচের ইতিহাস",
      ".expense-calendar-panel h3": "বিল রিমাইন্ডার ক্যালেন্ডার",
      "#bill-reminder-form button[type='submit']": "বিল যোগ করুন",
      "#reports-view > .panel:nth-of-type(1) h3": "খরচের বণ্টন",
      "#reports-view > .panel:nth-of-type(2) h3": "প্রফেশনাল রিপোর্ট বিল্ডার",
      "#download-report-btn": "JSON রিপোর্ট ডাউনলোড",
      "#download-csv-btn": "CSV এক্সপোর্ট",
      "label[for='import-csv-input']": "CSV ইম্পোর্ট",
      "#generate-report-builder-btn": "জেনারেট",
      "#reports-view > .panel:nth-of-type(3) h3": "আপনার অডিট ট্রেইল",
      "#settings-view > .panel:nth-of-type(1) h3": "প্রোফাইল ও অ্যাকাউন্ট",
      "#settings-view > .panel:nth-of-type(2) h3": "অ্যাকাউন্ট পছন্দসমূহ",
      "#settings-view > .panel:nth-of-type(3) h3": "চেহারা",
      "#settings-view > .panel:nth-of-type(4) h3": "হেল্প ও সাপোর্ট",
      "#settings-view > .panel:nth-of-type(5) h3": "ব্যাকআপ ও রিস্টোর",
      "#backup-export-btn": "পূর্ণ ব্যাকআপ এক্সপোর্ট",
      "label[for='backup-import-input']": "ব্যাকআপ JSON পুনরুদ্ধার"
    },
    inputLabels: {
      "label[for='expense-remove-receipt']": "বিদ্যমান রসিদ সরান",
      "label[for='setting-remove-profile-picture']": "বর্তমান ছবি সরান"
    },
    placeholders: {
      "#custom-category-input": "যেমন: সাবস্ক্রিপশন",
      "#expense-description": "এই খরচ সম্পর্কে সংক্ষিপ্ত নোট",
      "#feedback-message": "আপনার মতামত লিখুন",
      "#bug-message": "কি হয়েছে এবং কীভাবে পুনরায় দেখা যায়"
    },
    options: {
      "date-range": {
        all: "সব সময়",
        month: "এই মাস",
        last30: "শেষ ৩০ দিন",
        last7: "শেষ ৭ দিন",
        last1: "শেষ ১ দিন",
        yearly: "এই বছর",
        custom: "কাস্টম সময়"
      },
      "setting-default-range": {
        all: "সব সময়",
        month: "এই মাস",
        last30: "শেষ ৩০ দিন",
        last7: "শেষ ৭ দিন",
        last1: "শেষ ১ দিন",
        yearly: "এই বছর",
        custom: "কাস্টম সময়"
      },
      "report-builder-type": {
        monthly: "মাসিক",
        weekly: "সাপ্তাহিক",
        yearly: "বার্ষিক",
        latest2years: "সর্বশেষ ২ বছর",
        custom: "কাস্টম"
      },
      "setting-theme-mode": {
        dark: "ডার্ক",
        light: "লাইট"
      },
      "setting-font-size": {
        small: "ছোট",
        medium: "মাঝারি",
        large: "বড়"
      },
      "setting-language": {
        en: "ইংরেজি",
        bn: "বাংলা",
        hi: "হিন্দি"
      },
      "setting-week-start": {
        sunday: "রবিবার",
        monday: "সোমবার",
        tuesday: "মঙ্গলবার",
        wednesday: "বুধবার",
        thursday: "বৃহস্পতিবার",
        friday: "শুক্রবার",
        saturday: "শনিবার"
      },
      "feedback-topic": {
        general: "সাধারণ",
        feature: "ফিচার অনুরোধ",
        performance: "পারফরম্যান্স",
        ui: "ইউআই/ইউএক্স"
      },
      "bug-severity": {
        low: "কম",
        medium: "মাঝারি",
        high: "উচ্চ",
        critical: "গুরুতর"
      }
    },
    dynamic: {
      budgetLabel: "বাজেট",
      currentProfilePicture: "বর্তমান প্রোফাইল ছবি",
      noProfilePicture: "কোনো প্রোফাইল ছবি নির্বাচন করা হয়নি।",
      expenseAddTitle: "খরচ যোগ করুন",
      expenseEditTitle: "খরচ সম্পাদনা",
      expenseSaveButton: "খরচ সেভ করুন",
      expenseUpdateButton: "খরচ আপডেট করুন",
      expenseCancelButton: "এডিট বাতিল",
      expenseEditingFeedback: "নির্বাচিত খরচ সম্পাদনা হচ্ছে।",
      notSet: "সেট করা নেই",
      none: "কোনোটিই নয়",
      dailyPace: "দৈনিক গতি",
      projectedMonthEnd: "মাস শেষে সম্ভাব্য",
      billsDue30d: "বকেয়া বিল (৩০ দিন)",
      budgetVariance: "বাজেট পার্থক্য",
      setBudgetForProjection: "পূর্বাভাস নির্দেশনা পেতে মাসিক বাজেট সেট করুন।",
      forecastOverBudgetPrefix: "এই গতিতে বাজেট ছাড়িয়ে যেতে পারেন",
      forecastOverBudgetSuffix: "অপ্রয়োজনীয় খরচ কমানোর কথা ভাবুন।",
      forecastHealthyPrefix: "পূর্বাভাস ভালো। আপনি প্রায়",
      dailyAverageLabel: "দৈনিক গড়",
      highestLabel: "সর্বোচ্চ",
      billsTrackedLabel: "ট্র্যাক করা বিল",
      billsSoonLabel: "শীঘ্রই বিল",
      nextBillLabel: "পরবর্তী বিল",
      percentUsedSuffix: "% ব্যবহৃত",
      dueSuffix: "বাকি",
      onWord: "তারিখে",
      budgetStatusSetPrompt: "স্মার্ট অ্যালার্ট ট্র্যাক করতে মাসিক বাজেট সেট করুন।",
      budgetStatusOverPrefix: "১০০%+ সতর্কতা: বাজেট ছাড়িয়েছে",
      budgetStatusOverSuffix: "অপ্রয়োজনীয় খরচ থামান এবং বরাদ্দ ঠিক করুন।",
      budgetStatusNinetyPrefix: "৯০% সতর্কতা: আপনি ব্যবহার করেছেন",
      budgetStatusNinetySuffix: "বাজেট। মাস শেষে ঐচ্ছিক কেনাকাটা বন্ধ রাখুন।",
      budgetStatusSeventyPrefix: "৭০% সতর্কতা: আপনি ব্যবহার করেছেন",
      budgetStatusSeventySuffix: "বাজেট। এখনই ঐচ্ছিক ক্যাটাগরি পর্যালোচনা করুন।",
      budgetStatusOnTrackPrefix: "ঠিক পথে:",
      budgetStatusOnTrackSuffix: "বাজেট ব্যবহৃত। একই গতি বজায় রাখুন।",
      recentExpensesEmpty: "এখনও কোনো খরচ নেই। শুরু করতে একটি যোগ করুন।",
      expenseKindLabel: "খরচ",
      expenseTableEmpty: "এই ফিল্টারে কোনো খরচের রেকর্ড পাওয়া যায়নি।",
      viewReceiptButton: "দেখুন",
      editButton: "এডিট",
      deleteButton: "ডিলিট",
      pieTotalLabel: "মোট",
      pieNoExpenses: "নির্বাচিত ফিল্টার সময়ে কোনো খরচ নেই।",
      pieNoDataAria: "পাই চার্ট দেখানোর জন্য কোনো খরচের তথ্য নেই।",
      pieCategoriesLabel: "ক্যাটাগরি",
      pieChartAriaPrefix: "খরচের বণ্টনের পাই চার্ট",
      monthlyTableEmpty: "এখনও কোনো রিপোর্ট ডেটা নেই।"
    }
  },
  hi: {
    selectors: {
      ".brand-block .label": "पर्सनल फाइनेंस",
      ".brand-subtitle": "मासिक कैश फ्लो को प्लान, ट्रैक और बेहतर करें।",
      "#undo-message": "पिछला काम वापस किया जा सकता है।",
      "#undo-btn": "अनडू",
      "#undo-dismiss-btn": "बंद करें",
      "#overview-view .card-grid .card:nth-child(1) .card-label": "कुल खर्च",
      "#overview-view .card-grid .card:nth-child(2) .card-label": "यह महीना",
      "#overview-view .card-grid .card:nth-child(3) .card-label": "लेनदेन",
      "#overview-view .card-grid .card:nth-child(4) .card-label": "शीर्ष श्रेणी",
      "#overview-view .budget-panel h3": "मासिक बजट",
      "#overview-view .budget-head .budget-note": "इस महीने का खर्च ट्रैक करें और सीमा से पहले अलर्ट पाएं।",
      "#budget-form .budget-actions button[type='submit']": "सेव",
      "#budget-clear-btn": "क्लियर",
      "#overview-view .budget-metrics p:nth-child(2) span": "खर्च (इस महीने)",
      "#overview-view .budget-metrics p:nth-child(3) span": "शेष",
      "#overview-forecast-panel h3": "पूर्वानुमान और खर्च की रफ्तार",
      "#overview-recent-panel h3": "हाल के खर्च",
      "#overview-category-panel h3": "श्रेणी अनुसार खर्च",
      "#expense-form-title": "खर्च जोड़ें",
      "label[for='expense-amount']": "राशि",
      "label[for='expense-date']": "तारीख",
      "label[for='expense-category']": "श्रेणी",
      "label[for='expense-description']": "विवरण",
      "#expense-submit-btn": "खर्च सेव करें",
      "#expense-cancel-btn": "एडिट रद्द करें",
      ".expense-history-panel h3": "खर्च इतिहास",
      ".expense-calendar-panel h3": "बिल रिमाइंडर कैलेंडर",
      "#bill-reminder-form button[type='submit']": "बिल जोड़ें",
      "#reports-view > .panel:nth-of-type(1) h3": "खर्च वितरण",
      "#reports-view > .panel:nth-of-type(2) h3": "प्रोफेशनल रिपोर्ट बिल्डर",
      "#download-report-btn": "JSON रिपोर्ट डाउनलोड",
      "#download-csv-btn": "CSV एक्सपोर्ट",
      "label[for='import-csv-input']": "CSV इम्पोर्ट",
      "#generate-report-builder-btn": "जेनरेट",
      "#reports-view > .panel:nth-of-type(3) h3": "आपकी ऑडिट ट्रेल",
      "#settings-view > .panel:nth-of-type(1) h3": "प्रोफ़ाइल और अकाउंट",
      "#settings-view > .panel:nth-of-type(2) h3": "अकाउंट प्राथमिकताएँ",
      "#settings-view > .panel:nth-of-type(3) h3": "दिखावट",
      "#settings-view > .panel:nth-of-type(4) h3": "मदद और सपोर्ट",
      "#settings-view > .panel:nth-of-type(5) h3": "बैकअप और रिस्टोर",
      "#backup-export-btn": "पूर्ण बैकअप एक्सपोर्ट",
      "label[for='backup-import-input']": "बैकअप JSON रिस्टोर"
    },
    inputLabels: {
      "label[for='expense-remove-receipt']": "मौजूदा रसीद हटाएँ",
      "label[for='setting-remove-profile-picture']": "मौजूदा तस्वीर हटाएँ"
    },
    placeholders: {
      "#custom-category-input": "जैसे: सब्सक्रिप्शन",
      "#expense-description": "इस खर्च के बारे में छोटा नोट",
      "#feedback-message": "अपना फीडबैक लिखें",
      "#bug-message": "क्या हुआ और कैसे दोहराएँ"
    },
    options: {
      "date-range": {
        all: "सभी समय",
        month: "यह महीना",
        last30: "पिछले 30 दिन",
        last7: "पिछले 7 दिन",
        last1: "पिछला 1 दिन",
        yearly: "यह वर्ष",
        custom: "कस्टम समय"
      },
      "setting-default-range": {
        all: "सभी समय",
        month: "यह महीना",
        last30: "पिछले 30 दिन",
        last7: "पिछले 7 दिन",
        last1: "पिछला 1 दिन",
        yearly: "यह वर्ष",
        custom: "कस्टम समय"
      },
      "report-builder-type": {
        monthly: "मासिक",
        weekly: "साप्ताहिक",
        yearly: "वार्षिक",
        latest2years: "पिछले 2 वर्ष",
        custom: "कस्टम"
      },
      "setting-theme-mode": {
        dark: "डार्क",
        light: "लाइट"
      },
      "setting-font-size": {
        small: "छोटा",
        medium: "मध्यम",
        large: "बड़ा"
      },
      "setting-language": {
        en: "अंग्रेज़ी",
        bn: "बांग्ला",
        hi: "हिन्दी"
      },
      "setting-week-start": {
        sunday: "रविवार",
        monday: "सोमवार",
        tuesday: "मंगलवार",
        wednesday: "बुधवार",
        thursday: "गुरुवार",
        friday: "शुक्रवार",
        saturday: "शनिवार"
      },
      "feedback-topic": {
        general: "सामान्य",
        feature: "फ़ीचर अनुरोध",
        performance: "परफॉर्मेंस",
        ui: "यूआई/यूएक्स"
      },
      "bug-severity": {
        low: "कम",
        medium: "मध्यम",
        high: "उच्च",
        critical: "गंभीर"
      }
    },
    dynamic: {
      budgetLabel: "बजट",
      currentProfilePicture: "वर्तमान प्रोफ़ाइल तस्वीर",
      noProfilePicture: "कोई प्रोफ़ाइल तस्वीर चयनित नहीं है।",
      expenseAddTitle: "खर्च जोड़ें",
      expenseEditTitle: "खर्च संपादित करें",
      expenseSaveButton: "खर्च सेव करें",
      expenseUpdateButton: "खर्च अपडेट करें",
      expenseCancelButton: "एडिट रद्द करें",
      expenseEditingFeedback: "चयनित खर्च संपादित हो रहा है।",
      notSet: "सेट नहीं",
      none: "कोई नहीं",
      dailyPace: "दैनिक गति",
      projectedMonthEnd: "महीने के अंत का अनुमान",
      billsDue30d: "देय बिल (30 दिन)",
      budgetVariance: "बजट अंतर",
      setBudgetForProjection: "पूर्वानुमान मार्गदर्शन के लिए मासिक बजट सेट करें।",
      forecastOverBudgetPrefix: "इस गति पर आप बजट से अधिक जा सकते हैं",
      forecastOverBudgetSuffix: "गैर-जरूरी श्रेणियों में खर्च घटाएँ।",
      forecastHealthyPrefix: "पूर्वानुमान अच्छा है। आप लगभग",
      dailyAverageLabel: "दैनिक औसत",
      highestLabel: "सबसे अधिक",
      billsTrackedLabel: "ट्रैक किए गए बिल",
      billsSoonLabel: "जल्द देय बिल",
      nextBillLabel: "अगला बिल",
      percentUsedSuffix: "% उपयोग",
      dueSuffix: "देय",
      onWord: "को",
      budgetStatusSetPrompt: "स्मार्ट अलर्ट ट्रैक करने के लिए मासिक बजट सेट करें।",
      budgetStatusOverPrefix: "100%+ अलर्ट: बजट से अधिक",
      budgetStatusOverSuffix: "गैर-जरूरी खर्च रोकें और आवंटन संशोधित करें।",
      budgetStatusNinetyPrefix: "90% अलर्ट: आपने उपयोग किया",
      budgetStatusNinetySuffix: "बजट। महीने के अंत तक वैकल्पिक खरीद रोकें।",
      budgetStatusSeventyPrefix: "70% अलर्ट: आपने उपयोग किया",
      budgetStatusSeventySuffix: "बजट। विवेकाधीन श्रेणियों की समीक्षा करें।",
      budgetStatusOnTrackPrefix: "सही राह पर:",
      budgetStatusOnTrackSuffix: "बजट उपयोग। यही गति रखें।",
      recentExpensesEmpty: "अभी कोई खर्च नहीं। शुरू करने के लिए एक जोड़ें।",
      expenseKindLabel: "खर्च",
      expenseTableEmpty: "इस फ़िल्टर के लिए कोई खर्च रिकॉर्ड नहीं मिला।",
      viewReceiptButton: "देखें",
      editButton: "एडिट",
      deleteButton: "हटाएँ",
      pieTotalLabel: "कुल",
      pieNoExpenses: "चयनित फ़िल्टर अवधि में कोई खर्च नहीं।",
      pieNoDataAria: "पाई चार्ट दिखाने के लिए कोई खर्च डेटा नहीं है।",
      pieCategoriesLabel: "श्रेणियाँ",
      pieChartAriaPrefix: "खर्च वितरण का पाई चार्ट",
      monthlyTableEmpty: "अभी कोई रिपोर्ट डेटा उपलब्ध नहीं है।"
    }
  }
};

const state = {
  users: [],
  expenses: [],
  currentUser: null,
  activeView: "overview",
  dateRange: "all",
  customDateRange: {
    fromDate: "",
    toDate: ""
  },
  searchTerm: "",
  budgets: {},
  categoryBudgets: {},
  customCategories: {},
  savedViews: {},
  billReminders: [],
  auditLogs: [],
  userPreferences: {},
  appearanceSettings: {},
  liveSettingsPreview: {
    profile: null,
    preferences: null,
    appearance: null
  },
  supportQueue: { ...DEFAULT_SUPPORT_QUEUE },
  expenseFilters: { ...DEFAULT_EXPENSE_FILTERS },
  undoAction: null,
  undoTimerId: null
};

const elements = {};
const formatterCache = new Map();
let eventsBound = false;

if (typeof document === "undefined") {
  console.error(
    "This script is browser-only. Open index.html via a local web server instead of running app.js with Node."
  );
} else {
  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.classList.add("js");
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
  elements.viewSubtitle = document.getElementById("view-subtitle");
  elements.insightStrip = document.getElementById("insight-strip");
  elements.dateRange = document.getElementById("date-range");
  elements.customRangeControls = document.getElementById("custom-range-controls");
  elements.customRangeFrom = document.getElementById("custom-range-from");
  elements.customRangeTo = document.getElementById("custom-range-to");
  elements.toastStack = document.getElementById("toast-stack");

  elements.undoBanner = document.getElementById("undo-banner");
  elements.undoMessage = document.getElementById("undo-message");
  elements.undoBtn = document.getElementById("undo-btn");
  elements.undoDismissBtn = document.getElementById("undo-dismiss-btn");

  elements.cardTotal = document.getElementById("card-total");
  elements.cardMonth = document.getElementById("card-month");
  elements.cardCount = document.getElementById("card-count");
  elements.cardCategory = document.getElementById("card-category");
  elements.recentExpenses = document.getElementById("recent-expenses");
  elements.overviewCategoryBars = document.getElementById("overview-category-bars");
  elements.forecastCards = document.getElementById("forecast-cards");
  elements.forecastNote = document.getElementById("forecast-note");
  elements.budgetForm = document.getElementById("budget-form");
  elements.budgetAmount = document.getElementById("budget-amount");
  elements.budgetClearBtn = document.getElementById("budget-clear-btn");
  elements.budgetTotal = document.getElementById("budget-total");
  elements.budgetSpent = document.getElementById("budget-spent");
  elements.budgetRemaining = document.getElementById("budget-remaining");
  elements.budgetProgress = document.querySelector(".budget-progress");
  elements.budgetProgressFill = document.getElementById("budget-progress-fill");
  elements.budgetStatus = document.getElementById("budget-status");
  elements.budgetFeedback = document.getElementById("budget-feedback");

  elements.expenseForm = document.getElementById("expense-form");
  elements.expenseFeedback = document.getElementById("expense-feedback");
  elements.expenseFormTitle = document.getElementById("expense-form-title");
  elements.expenseSubmitBtn = document.getElementById("expense-submit-btn");
  elements.expenseCancelBtn = document.getElementById("expense-cancel-btn");
  elements.expenseId = document.getElementById("expense-id");
  elements.expenseAmount = document.getElementById("expense-amount");
  elements.expenseDate = document.getElementById("expense-date");
  elements.expenseCategory = document.getElementById("expense-category");
  elements.expenseReceipt = document.getElementById("expense-receipt");
  elements.expenseRemoveReceipt = document.getElementById("expense-remove-receipt");
  elements.expenseDescription = document.getElementById("expense-description");

  elements.customCategoryInput = document.getElementById("custom-category-input");
  elements.addCustomCategoryBtn = document.getElementById("add-custom-category-btn");
  elements.customCategoryList = document.getElementById("custom-category-list");
  elements.customCategoryFeedback = document.getElementById("custom-category-feedback");

  elements.expenseTableBody = document.getElementById("expense-table-body");
  elements.searchExpense = document.getElementById("search-expense");
  elements.toggleAdvancedFiltersBtn = document.getElementById("toggle-advanced-filters-btn");
  elements.clearSearchBtn = document.getElementById("clear-search-btn");
  elements.advancedFilterPanel = document.getElementById("advanced-filter-panel");

  elements.filterFromDate = document.getElementById("filter-from-date");
  elements.filterToDate = document.getElementById("filter-to-date");
  elements.filterCategory = document.getElementById("filter-category");
  elements.filterMinAmount = document.getElementById("filter-min-amount");
  elements.filterMaxAmount = document.getElementById("filter-max-amount");
  elements.filterTag = document.getElementById("filter-tag");
  elements.applyAdvancedFiltersBtn = document.getElementById("apply-advanced-filters-btn");
  elements.clearAdvancedFiltersBtn = document.getElementById("clear-advanced-filters-btn");
  elements.savedViewName = document.getElementById("saved-view-name");
  elements.saveFilterViewBtn = document.getElementById("save-filter-view-btn");
  elements.savedFilterViewSelect = document.getElementById("saved-filter-view-select");
  elements.loadFilterViewBtn = document.getElementById("load-filter-view-btn");
  elements.deleteFilterViewBtn = document.getElementById("delete-filter-view-btn");
  elements.filterFeedback = document.getElementById("filter-feedback");

  elements.reportCategoryBars = document.getElementById("report-category-bars");
  elements.monthlyTableBody = document.getElementById("monthly-table-body");
  elements.downloadReportBtn = document.getElementById("download-report-btn");
  elements.downloadCsvBtn = document.getElementById("download-csv-btn");
  elements.importCsvInput = document.getElementById("import-csv-input");
  elements.reportFeedback = document.getElementById("report-feedback");
  elements.reportPieChart = document.getElementById("report-pie-chart");
  elements.reportPieLegend = document.getElementById("report-pie-legend");
  elements.reportPieTotal = document.getElementById("report-pie-total");
  elements.reportPieEmpty = document.getElementById("report-pie-empty");

  elements.billReminderForm = document.getElementById("bill-reminder-form");
  elements.billTitle = document.getElementById("bill-title");
  elements.billCategory = document.getElementById("bill-category");
  elements.billAmount = document.getElementById("bill-amount");
  elements.billDueDate = document.getElementById("bill-due-date");
  elements.billReminderBody = document.getElementById("bill-reminder-body");
  elements.billAlertNote = document.getElementById("bill-alert-note");
  elements.billReminderFeedback = document.getElementById("bill-reminder-feedback");

  elements.reportBuilderType = document.getElementById("report-builder-type");
  elements.reportBuilderMonth = document.getElementById("report-builder-month");
  elements.reportBuilderWeekDate = document.getElementById("report-builder-week-date");
  elements.reportBuilderYear = document.getElementById("report-builder-year");
  elements.reportBuilderFrom = document.getElementById("report-builder-from");
  elements.reportBuilderTo = document.getElementById("report-builder-to");
  elements.generateReportBuilderBtn = document.getElementById("generate-report-builder-btn");
  elements.reportBuilderOutput = document.getElementById("report-builder-output");

  elements.categoryBudgetForm = document.getElementById("category-budget-form");
  elements.categoryBudgetSelect = document.getElementById("category-budget-select");
  elements.categoryBudgetAmount = document.getElementById("category-budget-amount");
  elements.categoryBudgetClearBtn = document.getElementById("category-budget-clear-btn");
  elements.categoryBudgetBody = document.getElementById("category-budget-body");
  elements.categoryBudgetFeedback = document.getElementById("category-budget-feedback");

  elements.adminTotalUsers = document.getElementById("admin-total-users");
  elements.adminActiveUsers = document.getElementById("admin-active-users");
  elements.adminTotalExpenses = document.getElementById("admin-total-expenses");
  elements.adminSystemTotal = document.getElementById("admin-system-total");
  elements.adminUserBody = document.getElementById("admin-user-body");
  elements.adminFeedback = document.getElementById("admin-feedback");
  elements.auditLogBody = document.getElementById("audit-log-body");

  elements.backupExportBtn = document.getElementById("backup-export-btn");
  elements.backupImportInput = document.getElementById("backup-import-input");
  elements.backupFeedback = document.getElementById("backup-feedback");
  elements.userAuditBody = document.getElementById("user-audit-body");

  elements.profileSettingsForm = document.getElementById("profile-settings-form");
  elements.settingProfileName = document.getElementById("setting-profile-name");
  elements.settingProfileEmail = document.getElementById("setting-profile-email");
  elements.settingProfilePicture = document.getElementById("setting-profile-picture");
  elements.settingRemoveProfilePicture = document.getElementById("setting-remove-profile-picture");
  elements.settingProfilePicturePreview = document.getElementById("setting-profile-picture-preview");
  elements.settingProfilePictureName = document.getElementById("setting-profile-picture-name");
  elements.profileSettingsFeedback = document.getElementById("profile-settings-feedback");

  elements.preferencesSettingsForm = document.getElementById("preferences-settings-form");
  elements.settingCurrency = document.getElementById("setting-currency");
  elements.settingLanguage = document.getElementById("setting-language");
  elements.settingDateFormat = document.getElementById("setting-date-format");
  elements.settingTimezone = document.getElementById("setting-timezone");
  elements.settingWeekStart = document.getElementById("setting-week-start");
  elements.settingDefaultRange = document.getElementById("setting-default-range");
  elements.preferencesSettingsFeedback = document.getElementById("preferences-settings-feedback");

  elements.privacySecurityForm = document.getElementById("privacy-security-form");
  elements.settingAppLockEnabled = document.getElementById("setting-app-lock-enabled");
  elements.settingAppLockPin = document.getElementById("setting-app-lock-pin");
  elements.settingAppLockPinConfirm = document.getElementById("setting-app-lock-pin-confirm");
  elements.settingBiometricEnabled = document.getElementById("setting-biometric-enabled");
  elements.settingTwoFactorEnabled = document.getElementById("setting-two-factor-enabled");
  elements.settingPermissionNotifications = document.getElementById("setting-permission-notifications");
  elements.settingPermissionAnalytics = document.getElementById("setting-permission-analytics");
  elements.settingPermissionSupport = document.getElementById("setting-permission-support");
  elements.settingPermissionExport = document.getElementById("setting-permission-export");
  elements.settingClearPinBtn = document.getElementById("setting-clear-pin-btn");
  elements.privacySecurityFeedback = document.getElementById("privacy-security-feedback");
  elements.settingDeleteAccountDataBtn = document.getElementById("setting-delete-account-data-btn");
  elements.accountDeletionFeedback = document.getElementById("account-deletion-feedback");

  elements.appearanceSettingsForm = document.getElementById("appearance-settings-form");
  elements.settingThemeMode = document.getElementById("setting-theme-mode");
  elements.settingThemeColor = document.getElementById("setting-theme-color");
  elements.settingFontSize = document.getElementById("setting-font-size");
  elements.settingWidgetInsights = document.getElementById("setting-widget-insights");
  elements.settingWidgetForecast = document.getElementById("setting-widget-forecast");
  elements.settingWidgetRecent = document.getElementById("setting-widget-recent");
  elements.settingWidgetCategories = document.getElementById("setting-widget-categories");
  elements.appearanceSettingsFeedback = document.getElementById("appearance-settings-feedback");

  elements.feedbackForm = document.getElementById("feedback-form");
  elements.feedbackTopic = document.getElementById("feedback-topic");
  elements.feedbackMessage = document.getElementById("feedback-message");
  elements.feedbackSubmitFeedback = document.getElementById("feedback-submit-feedback");
  elements.bugReportForm = document.getElementById("bug-report-form");
  elements.bugSeverity = document.getElementById("bug-severity");
  elements.bugMessage = document.getElementById("bug-message");
  elements.bugReportFeedback = document.getElementById("bug-report-feedback");

  elements.overviewForecastPanel = document.getElementById("overview-forecast-panel");
  elements.overviewRecentPanel = document.getElementById("overview-recent-panel");
  elements.overviewCategoryPanel = document.getElementById("overview-category-panel");

  elements.passwordSettingsForm = document.getElementById("password-settings-form");
  elements.settingCurrentPassword = document.getElementById("setting-current-password");
  elements.settingNewPassword = document.getElementById("setting-new-password");
  elements.settingConfirmPassword = document.getElementById("setting-confirm-password");
  elements.passwordSettingsFeedback = document.getElementById("password-settings-feedback");
}

function bindEvents() {
  if (eventsBound) {
    return;
  }

  eventsBound = true;

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

  elements.dateRange.addEventListener("change", handleDateRangeChange);

  if (elements.customRangeFrom) {
    elements.customRangeFrom.addEventListener("change", handleCustomDateRangeChange);
  }
  if (elements.customRangeTo) {
    elements.customRangeTo.addEventListener("change", handleCustomDateRangeChange);
  }

  elements.undoBtn.addEventListener("click", handleUndoAction);
  elements.undoDismissBtn.addEventListener("click", dismissUndoAction);

  elements.budgetForm.addEventListener("submit", handleBudgetSubmit);
  elements.budgetClearBtn.addEventListener("click", handleBudgetClear);

  elements.expenseForm.addEventListener("submit", handleExpenseSubmit);
  elements.expenseCancelBtn.addEventListener("click", resetExpenseEditor);
  elements.expenseTableBody.addEventListener("click", handleExpenseTableActions);

  if (elements.searchExpense) {
    elements.searchExpense.addEventListener("input", (event) => {
      state.searchTerm = event.target.value.trim();
      renderExpenseTable();
    });
  }

  if (elements.toggleAdvancedFiltersBtn) {
    elements.toggleAdvancedFiltersBtn.addEventListener("click", handleToggleAdvancedFilters);
  }

  if (elements.clearSearchBtn && elements.searchExpense) {
    elements.clearSearchBtn.addEventListener("click", () => {
      state.searchTerm = "";
      elements.searchExpense.value = "";
      renderExpenseTable();
    });
  }

  elements.addCustomCategoryBtn.addEventListener("click", handleAddCustomCategory);
  elements.customCategoryList.addEventListener("click", handleCustomCategoryListActions);

  if (elements.applyAdvancedFiltersBtn) {
    elements.applyAdvancedFiltersBtn.addEventListener("click", () => {
      syncExpenseFiltersFromForm();
      renderExpenseTable();
    });
  }

  if (elements.clearAdvancedFiltersBtn) {
    elements.clearAdvancedFiltersBtn.addEventListener("click", clearAdvancedFilters);
  }
  if (elements.saveFilterViewBtn) {
    elements.saveFilterViewBtn.addEventListener("click", handleSaveFilterView);
  }
  if (elements.loadFilterViewBtn) {
    elements.loadFilterViewBtn.addEventListener("click", handleLoadFilterView);
  }
  if (elements.deleteFilterViewBtn) {
    elements.deleteFilterViewBtn.addEventListener("click", handleDeleteFilterView);
  }

  elements.downloadReportBtn.addEventListener("click", handleDownloadReport);
  elements.downloadCsvBtn.addEventListener("click", handleDownloadCsv);
  elements.importCsvInput.addEventListener("change", handleImportCsv);

  elements.billReminderForm.addEventListener("submit", handleBillReminderSubmit);
  elements.billReminderBody.addEventListener("click", handleBillReminderTableActions);

  elements.generateReportBuilderBtn.addEventListener("click", renderReportBuilder);
  elements.reportBuilderType.addEventListener("change", () => {
    syncReportBuilderControlVisibility();
    renderReportBuilder();
  });
  elements.reportBuilderMonth.addEventListener("change", renderReportBuilder);
  if (elements.reportBuilderWeekDate) {
    elements.reportBuilderWeekDate.addEventListener("change", renderReportBuilder);
  }
  if (elements.reportBuilderYear) {
    elements.reportBuilderYear.addEventListener("change", renderReportBuilder);
  }
  if (elements.reportBuilderFrom) {
    elements.reportBuilderFrom.addEventListener("change", renderReportBuilder);
  }
  if (elements.reportBuilderTo) {
    elements.reportBuilderTo.addEventListener("change", renderReportBuilder);
  }

  elements.categoryBudgetForm.addEventListener("submit", handleCategoryBudgetSubmit);
  elements.categoryBudgetClearBtn.addEventListener("click", handleCategoryBudgetClear);
  elements.categoryBudgetSelect.addEventListener("change", syncCategoryBudgetInput);

  elements.adminUserBody.addEventListener("click", handleAdminTableActions);

  if (elements.profileSettingsForm) {
    elements.profileSettingsForm.addEventListener("submit", handleProfileSettingsSubmit);

    if (elements.settingProfileName) {
      elements.settingProfileName.addEventListener("input", handleProfileLivePreviewInputChange);
    }
    if (elements.settingProfileEmail) {
      elements.settingProfileEmail.addEventListener("input", handleProfileLivePreviewInputChange);
    }
    if (elements.settingRemoveProfilePicture) {
      elements.settingRemoveProfilePicture.addEventListener("change", handleProfileLivePreviewInputChange);
    }
    if (elements.settingProfilePicture) {
      elements.settingProfilePicture.addEventListener("change", handleProfilePicturePreviewChange);
    }
  }
  if (elements.preferencesSettingsForm) {
    elements.preferencesSettingsForm.addEventListener("submit", handlePreferencesSettingsSubmit);

    const preferencePreviewControls = [
      elements.settingCurrency,
      elements.settingLanguage,
      elements.settingDateFormat,
      elements.settingTimezone,
      elements.settingWeekStart,
      elements.settingDefaultRange
    ];

    for (const control of preferencePreviewControls) {
      if (control) {
        control.addEventListener("change", handlePreferencesLivePreviewChange);
      }
    }
  }
  if (elements.privacySecurityForm) {
    elements.privacySecurityForm.addEventListener("submit", handlePrivacySecuritySubmit);
  }
  if (elements.settingClearPinBtn) {
    elements.settingClearPinBtn.addEventListener("click", handleClearPin);
  }
  if (elements.settingDeleteAccountDataBtn) {
    elements.settingDeleteAccountDataBtn.addEventListener("click", handleDeleteAccountData);
  }
  if (elements.appearanceSettingsForm) {
    elements.appearanceSettingsForm.addEventListener("submit", handleAppearanceSettingsSubmit);

    const appearancePreviewControls = [
      elements.settingThemeMode,
      elements.settingThemeColor,
      elements.settingFontSize,
      elements.settingWidgetInsights,
      elements.settingWidgetForecast,
      elements.settingWidgetRecent,
      elements.settingWidgetCategories
    ];

    for (const control of appearancePreviewControls) {
      if (control) {
        control.addEventListener("change", handleAppearanceLivePreviewChange);
      }
    }
  }
  if (elements.feedbackForm) {
    elements.feedbackForm.addEventListener("submit", handleFeedbackSubmit);
  }
  if (elements.bugReportForm) {
    elements.bugReportForm.addEventListener("submit", handleBugReportSubmit);
  }
  if (elements.passwordSettingsForm) {
    elements.passwordSettingsForm.addEventListener("submit", handlePasswordSettingsSubmit);
  }

  elements.backupExportBtn.addEventListener("click", handleBackupExport);
  elements.backupImportInput.addEventListener("change", handleBackupImport);
}

async function bootstrap() {
  await seedDefaultAdmin();
  loadState();
  setDefaultControlValues();
  resetExpenseEditor();

  if (state.currentUser) {
    showApp();
    return;
  }

  showAuth();
}

function setDefaultControlValues() {
  const currentMonthKey = monthKeyFromDate(new Date());
  const currentDateKey = formatDateKey(new Date());
  const currentYear = String(new Date().getFullYear());

  if (!elements.reportBuilderMonth.value) {
    elements.reportBuilderMonth.value = currentMonthKey;
  }

  if (elements.reportBuilderWeekDate && !elements.reportBuilderWeekDate.value) {
    elements.reportBuilderWeekDate.value = currentDateKey;
  }

  if (elements.reportBuilderYear && !elements.reportBuilderYear.value) {
    elements.reportBuilderYear.value = currentYear;
  }

  if (elements.reportBuilderFrom && !elements.reportBuilderFrom.value) {
    elements.reportBuilderFrom.value = `${currentMonthKey}-01`;
  }

  if (elements.reportBuilderTo && !elements.reportBuilderTo.value) {
    elements.reportBuilderTo.value = currentDateKey;
  }

  if (elements.billDueDate && !elements.billDueDate.value) {
    elements.billDueDate.value = currentDateKey;
  }

  if (elements.customRangeFrom && !elements.customRangeFrom.value) {
    elements.customRangeFrom.value = `${currentMonthKey}-01`;
  }

  if (elements.customRangeTo && !elements.customRangeTo.value) {
    elements.customRangeTo.value = currentDateKey;
  }

  if (elements.customRangeFrom && elements.customRangeTo) {
    state.customDateRange.fromDate = elements.customRangeFrom.value;
    state.customDateRange.toDate = elements.customRangeTo.value;
  }

  syncReportBuilderControlVisibility();
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
  state.budgets = readStorage(STORAGE_KEYS.budgets, {});
  state.categoryBudgets = readStorage(STORAGE_KEYS.categoryBudgets, {});
  state.customCategories = readStorage(STORAGE_KEYS.customCategories, {});
  state.savedViews = readStorage(STORAGE_KEYS.savedViews, {});
  state.billReminders = readStorage(STORAGE_KEYS.billReminders, []);
  state.auditLogs = readStorage(STORAGE_KEYS.auditLogs, []);
  state.userPreferences = readStorage(STORAGE_KEYS.userPreferences, {});
  state.appearanceSettings = readStorage(STORAGE_KEYS.appearanceSettings, {});
  state.supportQueue = readStorage(STORAGE_KEYS.supportQueue, { ...DEFAULT_SUPPORT_QUEUE });
  state.expenseFilters = { ...DEFAULT_EXPENSE_FILTERS };

  if (!Array.isArray(state.users)) {
    state.users = [];
  }

  if (!Array.isArray(state.expenses)) {
    state.expenses = [];
  }

  if (!Array.isArray(state.auditLogs)) {
    state.auditLogs = [];
  }

  if (!Array.isArray(state.billReminders)) {
    state.billReminders = [];
  }

  if (!isPlainObject(state.budgets)) {
    state.budgets = {};
  }

  if (!isPlainObject(state.categoryBudgets)) {
    state.categoryBudgets = {};
  }

  if (!isPlainObject(state.customCategories)) {
    state.customCategories = {};
  }

  if (!isPlainObject(state.savedViews)) {
    state.savedViews = {};
  }

  if (!isPlainObject(state.userPreferences)) {
    state.userPreferences = {};
  }

  if (!isPlainObject(state.appearanceSettings)) {
    state.appearanceSettings = {};
  }

  if (!isPlainObject(state.supportQueue)) {
    state.supportQueue = { ...DEFAULT_SUPPORT_QUEUE };
  }

  if (!Array.isArray(state.supportQueue.feedback)) {
    state.supportQueue.feedback = [];
  }

  if (!Array.isArray(state.supportQueue.bugReports)) {
    state.supportQueue.bugReports = [];
  }

  if (!Array.isArray(state.supportQueue.deletionRequests)) {
    state.supportQueue.deletionRequests = [];
  }

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
  clearLiveSettingsPreview();
  elements.appSection.classList.add("hidden");
  elements.authSection.classList.remove("hidden");
  const root = document.documentElement;

  if (document.body) {
    const themeColorClasses = getThemeColorClassNames();
    document.body.classList.remove(
      "theme-light",
      "theme-dark",
      ...themeColorClasses,
      "font-small",
      "font-medium",
      "font-large"
    );
  }

  if (root) {
    root.classList.remove("font-small", "font-medium", "font-large");
  }

  if (document.documentElement) {
    document.documentElement.lang = "en";
  }

  dismissUndoAction();
  switchAuthTab("login");
}

function showApp() {
  if (!state.currentUser) {
    showAuth();
    return;
  }

  clearLiveSettingsPreview();

  elements.authSection.classList.add("hidden");
  elements.appSection.classList.remove("hidden");

  const isAdmin = state.currentUser.role === "admin";
  elements.adminTab.classList.toggle("hidden", !isAdmin);

  if (!isAdmin && state.activeView === "admin") {
    state.activeView = "overview";
  }

  const currentSettings = getCurrentUserSettings();
  state.dateRange = isSupportedDateRange(currentSettings.defaultRange)
    ? currentSettings.defaultRange
    : DEFAULT_USER_SETTINGS.defaultRange;
  elements.dateRange.value = state.dateRange;

  refreshCategorySelectors();
  renderCustomCategoryList();
  renderSavedViews();
  refreshAdvancedFilterUi();
  setDefaultControlValues();
  syncDateRangeControls();
  applyAppearanceSettings();
  applyLanguageSettings();

  switchView(state.activeView);
  renderAll();
}

function isSupportedDateRange(value) {
  return SUPPORTED_DATE_RANGES.includes(String(value || ""));
}

function ensureCustomDateRangeValues() {
  const todayKey = formatDateKey(new Date());
  const monthStartKey = `${monthKeyFromDate(new Date())}-01`;

  let fromDate = String(
    (elements.customRangeFrom && elements.customRangeFrom.value) || state.customDateRange.fromDate || monthStartKey
  );
  let toDate = String(
    (elements.customRangeTo && elements.customRangeTo.value) || state.customDateRange.toDate || todayKey
  );

  if (!parseDateInput(fromDate)) {
    fromDate = monthStartKey;
  }

  if (!parseDateInput(toDate)) {
    toDate = todayKey;
  }

  if (fromDate > toDate) {
    const temp = fromDate;
    fromDate = toDate;
    toDate = temp;
  }

  state.customDateRange.fromDate = fromDate;
  state.customDateRange.toDate = toDate;

  if (elements.customRangeFrom) {
    elements.customRangeFrom.value = fromDate;
  }
  if (elements.customRangeTo) {
    elements.customRangeTo.value = toDate;
  }

  return { fromDate, toDate };
}

function syncDateRangeControls() {
  if (!isSupportedDateRange(state.dateRange)) {
    state.dateRange = DEFAULT_USER_SETTINGS.defaultRange;
  }

  if (elements.dateRange) {
    elements.dateRange.value = state.dateRange;
  }

  const isCustomRange = state.dateRange === "custom";

  if (elements.customRangeControls) {
    elements.customRangeControls.classList.toggle("hidden", !isCustomRange);
  }

  if (isCustomRange) {
    ensureCustomDateRangeValues();
  }
}

function handleDateRangeChange(event) {
  const selectedRange = String(event && event.target ? event.target.value : state.dateRange);
  state.dateRange = isSupportedDateRange(selectedRange) ? selectedRange : DEFAULT_USER_SETTINGS.defaultRange;
  syncDateRangeControls();
  renderAll();
}

function handleCustomDateRangeChange() {
  if (state.dateRange !== "custom") {
    return;
  }

  ensureCustomDateRangeValues();
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

  // Enforce dark mode as the default experience at login.
  if (!isPlainObject(state.appearanceSettings)) {
    state.appearanceSettings = {};
  }

  const savedAppearance = normalizeAppearanceSettings(
    isPlainObject(state.appearanceSettings[user.id])
      ? state.appearanceSettings[user.id]
      : DEFAULT_APPEARANCE_SETTINGS
  );

  if (savedAppearance.themeMode !== "dark") {
    state.appearanceSettings[user.id] = {
      ...savedAppearance,
      themeMode: "dark"
    };
    persistAppearanceSettings();
  }

  writeStorage(STORAGE_KEYS.currentUser, state.currentUser);
  elements.loginForm.reset();
  showApp();
}

function handleLogout() {
  state.currentUser = null;
  writeStorage(STORAGE_KEYS.currentUser, null);
  showAuth();
}

function getThemeColorClassNames() {
  return SUPPORTED_THEME_COLORS.map((colorName) => `theme-color-${colorName}`);
}

function getLanguagePack(languageCode) {
  const normalized = String(languageCode || "").trim().toLowerCase();
  return LANGUAGE_PACKS[normalized] || LANGUAGE_PACKS.en;
}

function mergeOptionTranslationMaps(baseOptions, localizedOptions) {
  const merged = {};
  const optionKeys = new Set([...Object.keys(baseOptions || {}), ...Object.keys(localizedOptions || {})]);

  for (const optionKey of optionKeys) {
    merged[optionKey] = {
      ...(baseOptions && baseOptions[optionKey] ? baseOptions[optionKey] : {}),
      ...(localizedOptions && localizedOptions[optionKey] ? localizedOptions[optionKey] : {})
    };
  }

  return merged;
}

function getUiTranslationBundle(languageCode) {
  const normalized = String(languageCode || "").trim().toLowerCase();
  const baseBundle = FULL_UI_TRANSLATIONS.en;
  const localizedBundle = FULL_UI_TRANSLATIONS[normalized] || {};

  return {
    selectors: {
      ...(baseBundle.selectors || {}),
      ...(localizedBundle.selectors || {})
    },
    inputLabels: {
      ...(baseBundle.inputLabels || {}),
      ...(localizedBundle.inputLabels || {})
    },
    placeholders: {
      ...(baseBundle.placeholders || {}),
      ...(localizedBundle.placeholders || {})
    },
    options: mergeOptionTranslationMaps(baseBundle.options || {}, localizedBundle.options || {}),
    dynamic: {
      ...(baseBundle.dynamic || {}),
      ...(localizedBundle.dynamic || {})
    }
  };
}

function setTextBySelector(selector, text) {
  if (!selector || typeof text !== "string") {
    return;
  }

  const targets = document.querySelectorAll(selector);
  for (const target of targets) {
    target.textContent = text;
  }
}

function setPlaceholderBySelector(selector, text) {
  if (!selector || typeof text !== "string") {
    return;
  }

  const targets = document.querySelectorAll(selector);
  for (const target of targets) {
    if ("placeholder" in target) {
      target.placeholder = text;
    }
  }
}

function setInputLabelText(selector, text) {
  if (!selector || typeof text !== "string") {
    return;
  }

  const targets = document.querySelectorAll(selector);
  for (const target of targets) {
    const input = target.querySelector("input");

    if (!input) {
      target.textContent = text;
      continue;
    }

    target.textContent = "";
    target.appendChild(input);
    target.appendChild(document.createTextNode(` ${text}`));
  }
}

function setSelectOptionLabel(selectId, optionValue, optionLabel) {
  const select = document.getElementById(selectId);
  if (!select) {
    return;
  }

  const option = Array.from(select.options).find((entry) => entry.value === optionValue);
  if (option) {
    option.textContent = optionLabel;
  }
}

function syncExpenseEditorLanguage(uiBundle) {
  if (!elements.expenseFormTitle || !elements.expenseSubmitBtn || !elements.expenseCancelBtn || !uiBundle) {
    return;
  }

  const isEditing = Boolean(elements.expenseId && elements.expenseId.value);
  elements.expenseFormTitle.textContent = isEditing
    ? uiBundle.dynamic.expenseEditTitle
    : uiBundle.dynamic.expenseAddTitle;
  elements.expenseSubmitBtn.textContent = isEditing
    ? uiBundle.dynamic.expenseUpdateButton
    : uiBundle.dynamic.expenseSaveButton;
  elements.expenseCancelBtn.textContent = uiBundle.dynamic.expenseCancelButton;
}

function applyComprehensiveUiTranslations(languageCode, currencyCode) {
  const uiBundle = getUiTranslationBundle(languageCode);

  for (const [selector, text] of Object.entries(uiBundle.selectors)) {
    setTextBySelector(selector, text);
  }

  for (const [selector, text] of Object.entries(uiBundle.inputLabels)) {
    setInputLabelText(selector, text);
  }

  for (const [selector, text] of Object.entries(uiBundle.placeholders)) {
    setPlaceholderBySelector(selector, text);
  }

  for (const [selectId, optionMap] of Object.entries(uiBundle.options)) {
    for (const [optionValue, optionLabel] of Object.entries(optionMap)) {
      setSelectOptionLabel(selectId, optionValue, optionLabel);
    }
  }

  if (uiBundle.dynamic && uiBundle.dynamic.budgetLabel) {
    setTextBySelector("label[for='budget-amount']", `${uiBundle.dynamic.budgetLabel} (${currencyCode})`);
    setPlaceholderBySelector("#category-budget-amount", `${uiBundle.dynamic.budgetLabel} (${currencyCode})`);
  }

  syncExpenseEditorLanguage(uiBundle);
}

function setNavButtonLabel(button, label) {
  if (!button || !label) {
    return;
  }

  const icon = button.querySelector(".nav-icon");

  if (!icon) {
    button.textContent = label;
    return;
  }

  const textNode = Array.from(button.childNodes).find((node) => {
    return node.nodeType === Node.TEXT_NODE && String(node.textContent || "").trim().length > 0;
  });

  if (textNode) {
    textNode.textContent = label;
    return;
  }

  button.appendChild(document.createTextNode(label));
}

function renderWelcomeText() {
  if (!state.currentUser || !elements.welcomeText) {
    return;
  }

  const profilePreview = getLiveProfilePreview();
  const previewName = profilePreview ? String(profilePreview.name || "").trim() : "";
  const displayName = previewName || state.currentUser.name;
  const settings = getCurrentUserSettings();
  const languagePack = getLanguagePack(settings.language);
  const roleLabel = languagePack.roles[state.currentUser.role] || state.currentUser.role;
  const todayLabel = formatDate(formatDateKey(new Date()));

  elements.welcomeText.textContent = `${languagePack.signedInAs} ${displayName} (${roleLabel}) · ${todayLabel}`;
}

function updateViewHeaderText(viewName) {
  const settings = getCurrentUserSettings();
  const languagePack = getLanguagePack(settings.language);

  elements.viewTitle.textContent = languagePack.viewTitles[viewName] || languagePack.viewTitles.overview;

  if (elements.viewSubtitle) {
    elements.viewSubtitle.textContent = languagePack.viewSubtitles[viewName] || languagePack.viewSubtitles.overview;
  }
}

function applyLanguageSettings() {
  if (!state.currentUser) {
    return;
  }

  const settings = getCurrentUserSettings();
  const languagePack = getLanguagePack(settings.language);

  if (document.documentElement) {
    document.documentElement.lang = settings.language;
  }

  for (const button of elements.navButtons) {
    const viewName = button.dataset.view;

    if (viewName && languagePack.nav[viewName]) {
      setNavButtonLabel(button, languagePack.nav[viewName]);
    }
  }

  if (elements.logoutBtn) {
    elements.logoutBtn.textContent = languagePack.logout;
  }

  const dashboardLabel = document.querySelector(".content-header .label");
  if (dashboardLabel) {
    dashboardLabel.textContent = languagePack.dashboard;
  }

  const filterLabel = document.querySelector("label[for='date-range']");
  if (filterLabel) {
    filterLabel.textContent = languagePack.filterPeriod;
  }

  applyComprehensiveUiTranslations(settings.language, settings.currency);

  renderWelcomeText();
  updateViewHeaderText(state.activeView);
}

function switchView(viewName) {
  if (!state.currentUser) {
    return;
  }

  const views = ["overview", "expenses", "reports", "settings", "admin"];
  if (!views.includes(viewName)) {
    viewName = "overview";
  }

  const previousView = state.activeView;

  if (viewName === "admin" && state.currentUser.role !== "admin") {
    viewName = "overview";
  }

  const shouldResetLivePreview = previousView === "settings" && viewName !== "settings" && hasAnyLiveSettingsPreview();

  if (viewName === previousView && !shouldResetLivePreview) {
    return;
  }

  if (shouldResetLivePreview) {
    clearLiveSettingsPreview();
    const settings = getCurrentUserSettings();
    state.dateRange = isSupportedDateRange(settings.defaultRange)
      ? settings.defaultRange
      : DEFAULT_USER_SETTINGS.defaultRange;
    syncDateRangeControls();
  }

  state.activeView = viewName;

  for (const button of elements.navButtons) {
    button.classList.toggle("is-active", button.dataset.view === viewName);
  }

  for (const name of views) {
    const section = document.getElementById(`${name}-view`);
    if (section) {
      const shouldShow = name === viewName;
      const wasHidden = section.classList.contains("hidden");
      section.classList.toggle("hidden", !shouldShow);

      if (shouldShow && (name !== previousView || wasHidden)) {
        animateViewEntry(section);
      }
    }
  }

  updateViewHeaderText(viewName);

  // Re-trigger shimmer after navigation so hidden/show cycles never leave it frozen.
  window.requestAnimationFrame(() => {
    restartProgressShimmerAnimation();
  });

  if (shouldResetLivePreview) {
    applyAppearanceSettings();
    applyLanguageSettings();
    renderAll();
  }
}

function animateViewEntry(section) {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  if (typeof section._viewEnterTimeoutId === "number") {
    window.clearTimeout(section._viewEnterTimeoutId);
    section._viewEnterTimeoutId = null;
  }

  if (typeof section._viewEnterFrameId === "number") {
    window.cancelAnimationFrame(section._viewEnterFrameId);
    section._viewEnterFrameId = null;
  }

  section.classList.remove("view-enter");

  section._viewEnterFrameId = window.requestAnimationFrame(() => {
    section.classList.add("view-enter");

    section._viewEnterTimeoutId = window.setTimeout(() => {
      section.classList.remove("view-enter");
      section._viewEnterTimeoutId = null;
      section._viewEnterFrameId = null;
    }, 250);
  });
}

function restartProgressShimmerAnimation() {
  const targets = [];

  if (elements.budgetProgressFill) {
    targets.push(elements.budgetProgressFill);
  }

  const categoryBars = document.querySelectorAll(".bar-fill");
  for (const bar of categoryBars) {
    targets.push(bar);
  }

  for (const target of targets) {
    target.classList.add("shimmer-reset");
    void target.offsetWidth;
    target.classList.remove("shimmer-reset");
  }
}

async function handleExpenseSubmit(event) {
  event.preventDefault();

  if (!state.currentUser) {
    return;
  }

  const amount = Number(elements.expenseAmount.value);
  const date = elements.expenseDate.value;
  const category = elements.expenseCategory.value;
  const description = elements.expenseDescription.value.trim();
  const expenseId = elements.expenseId.value;
  const parsedTags = [];
  const availableCategories = getAvailableCategories();

  if (!Number.isFinite(amount) || amount <= 0) {
    showFeedback(elements.expenseFeedback, "Amount must be greater than zero.", "error");
    return;
  }

  if (!date) {
    showFeedback(elements.expenseFeedback, "Date is required.", "error");
    return;
  }

  if (!availableCategories.includes(category)) {
    showFeedback(elements.expenseFeedback, "Please select a valid category.", "error");
    return;
  }

  const existingExpense = state.expenses.find(
    (expense) => expense.id === expenseId && expense.userId === state.currentUser.id
  );

  if (existingExpense) {
    if (!assertMonthEditable(existingExpense.date, elements.expenseFeedback, "Editing existing record")) {
      return;
    }

    if (!assertMonthEditable(date, elements.expenseFeedback, "Moving record to target month")) {
      return;
    }
  } else if (!assertMonthEditable(date, elements.expenseFeedback, "Adding expense to locked month")) {
    return;
  }

  const receiptResult = await readReceiptInput();
  if (receiptResult.error) {
    showFeedback(elements.expenseFeedback, receiptResult.error, "error");
    return;
  }

  if (!existingExpense) {
    const duplicate = findPotentialDuplicate({
      date,
      amount,
      category,
      description,
      tags: parsedTags
    });

    if (duplicate) {
      const duplicatePrompt = `Possible duplicate found on ${formatDate(duplicate.date)} for ${formatMoney(duplicate.amount)} in ${duplicate.category}. Save anyway?`;
      if (!window.confirm(duplicatePrompt)) {
        showFeedback(elements.expenseFeedback, "Duplicate prevention cancelled the save.", "error");
        return;
      }
    }
  }

  const nowIso = new Date().toISOString();

  if (existingExpense) {
    setUndoAction(
      {
        type: "restore-expense",
        expense: { ...existingExpense }
      },
      "Expense updated. Undo available for 20 seconds."
    );

    const updatedExpense = {
      ...existingExpense,
      amount: Number(amount.toFixed(2)),
      date,
      category,
      tags: parsedTags,
      description,
      updatedAt: nowIso
    };

    delete updatedExpense.recurringRuleId;
    delete updatedExpense.recurringMonth;

    if (elements.expenseRemoveReceipt.checked) {
      delete updatedExpense.receiptName;
      delete updatedExpense.receiptMimeType;
      delete updatedExpense.receiptDataUrl;
    } else if (receiptResult.dataUrl) {
      updatedExpense.receiptName = receiptResult.name;
      updatedExpense.receiptMimeType = receiptResult.mimeType;
      updatedExpense.receiptDataUrl = receiptResult.dataUrl;
    }

    const existingIndex = state.expenses.findIndex((entry) => entry.id === existingExpense.id);
    state.expenses[existingIndex] = updatedExpense;

    logAudit("expense.update", "expense", updatedExpense.id, `Updated ${updatedExpense.category} ${formatMoney(updatedExpense.amount)}.`);
    showFeedback(elements.expenseFeedback, "Expense updated successfully.", "success");
  } else {
    const newExpense = {
      id: createId(),
      userId: state.currentUser.id,
      amount: Number(amount.toFixed(2)),
      date,
      category,
      tags: parsedTags,
      description,
      createdAt: nowIso,
      updatedAt: nowIso
    };

    if (receiptResult.dataUrl) {
      newExpense.receiptName = receiptResult.name;
      newExpense.receiptMimeType = receiptResult.mimeType;
      newExpense.receiptDataUrl = receiptResult.dataUrl;
    }

    state.expenses.push(newExpense);
    logAudit("expense.create", "expense", newExpense.id, `Added ${newExpense.category} ${formatMoney(newExpense.amount)}.`);
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

  if (targetButton.dataset.action === "receipt") {
    downloadExpenseReceipt(expense);
    return;
  }

  if (targetButton.dataset.action === "edit") {
    if (!assertMonthEditable(expense.date, elements.expenseFeedback, "Editing a locked month")) {
      return;
    }

    elements.expenseId.value = expense.id;
    elements.expenseAmount.value = String(expense.amount);
    elements.expenseDate.value = expense.date;
    elements.expenseCategory.value = expense.category;
    elements.expenseDescription.value = expense.description;
    elements.expenseRemoveReceipt.checked = false;
    elements.expenseReceipt.value = "";

    const uiBundle = getUiTranslationBundle(getCurrentUserSettings().language);

    elements.expenseFormTitle.textContent = uiBundle.dynamic.expenseEditTitle;
    elements.expenseSubmitBtn.textContent = uiBundle.dynamic.expenseUpdateButton;
    elements.expenseCancelBtn.textContent = uiBundle.dynamic.expenseCancelButton;
    elements.expenseCancelBtn.classList.remove("hidden");
    showFeedback(elements.expenseFeedback, uiBundle.dynamic.expenseEditingFeedback, "success");
    switchView("expenses");
    return;
  }

  if (targetButton.dataset.action === "delete") {
    if (!assertMonthEditable(expense.date, elements.expenseFeedback, "Deleting expense from locked month")) {
      return;
    }

    const isConfirmed = window.confirm("Delete this expense?");

    if (!isConfirmed) {
      return;
    }

    setUndoAction(
      {
        type: "restore-expense",
        expense: { ...expense }
      },
      "Expense deleted. Undo available for 20 seconds."
    );

    state.expenses = state.expenses.filter((entry) => entry.id !== expense.id);
    persistExpenses();
    resetExpenseEditor();
    renderAll();
    logAudit("expense.delete", "expense", expense.id, `Deleted ${expense.category} ${formatMoney(expense.amount)}.`);
    showFeedback(elements.expenseFeedback, "Expense deleted.", "success");
  }
}

function resetExpenseEditor() {
  elements.expenseForm.reset();
  elements.expenseId.value = "";
  const uiBundle = getUiTranslationBundle(getCurrentUserSettings().language);
  elements.expenseFormTitle.textContent = uiBundle.dynamic.expenseAddTitle;
  elements.expenseSubmitBtn.textContent = uiBundle.dynamic.expenseSaveButton;
  elements.expenseCancelBtn.textContent = uiBundle.dynamic.expenseCancelButton;
  elements.expenseCancelBtn.classList.add("hidden");
  elements.expenseRemoveReceipt.checked = false;
  elements.expenseReceipt.value = "";
  elements.expenseDate.value = formatDateKey(new Date());
}

function handleCategoryBudgetSubmit(event) {
  event.preventDefault();

  if (!state.currentUser) {
    return;
  }

  const category = elements.categoryBudgetSelect.value;
  const amount = Number(elements.categoryBudgetAmount.value);
  const availableCategories = getAvailableCategories();

  if (!availableCategories.includes(category)) {
    showFeedback(elements.categoryBudgetFeedback, "Please choose a valid category.", "error");
    return;
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    showFeedback(elements.categoryBudgetFeedback, "Category budget must be greater than zero.", "error");
    return;
  }

  const userBudgetMap = ensureCurrentUserCategoryBudgetMap();
  userBudgetMap[category] = Number(amount.toFixed(2));
  persistCategoryBudgets();
  renderCategoryBudgetTable();
  elements.categoryBudgetAmount.value = "";
  logAudit("category-budget.save", "category-budget", category, `${category} budget set to ${formatMoney(amount)}.`);
  showFeedback(elements.categoryBudgetFeedback, `${category} budget saved.`, "success");
}

function handleCategoryBudgetClear() {
  if (!state.currentUser) {
    return;
  }

  const category = elements.categoryBudgetSelect.value;
  const userBudgetMap = ensureCurrentUserCategoryBudgetMap();

  if (!Object.prototype.hasOwnProperty.call(userBudgetMap, category)) {
    showFeedback(elements.categoryBudgetFeedback, "No budget is set for this category.", "error");
    return;
  }

  setUndoAction(
    {
      type: "restore-category-budget",
      category,
      amount: Number(userBudgetMap[category])
    },
    "Category budget cleared. Undo available for 20 seconds."
  );

  delete userBudgetMap[category];
  persistCategoryBudgets();
  elements.categoryBudgetAmount.value = "";
  renderCategoryBudgetTable();
  logAudit("category-budget.clear", "category-budget", category, `${category} budget cleared.`);
  showFeedback(elements.categoryBudgetFeedback, `${category} budget cleared.`, "success");
}

function syncCategoryBudgetInput() {
  if (!state.currentUser) {
    return;
  }

  const category = elements.categoryBudgetSelect.value;
  const userBudgetMap = getCurrentUserCategoryBudgets();
  const amount = Number(userBudgetMap[category]);

  elements.categoryBudgetAmount.value = Number.isFinite(amount) && amount > 0 ? String(amount) : "";
}

function renderCategoryBudgetTable() {
  const currentUserExpenses = getCurrentMonthExpenses(getCurrentUserExpenses());
  const categories = getAvailableCategories();
  const totalsByCategory = new Map(categories.map((category) => [category, 0]));

  for (const expense of currentUserExpenses) {
    totalsByCategory.set(expense.category, (totalsByCategory.get(expense.category) || 0) + expense.amount);
  }

  const userBudgetMap = getCurrentUserCategoryBudgets();
  const categoriesToShow = categories.filter((category) => {
    const budget = Number(userBudgetMap[category]) || 0;
    const spent = totalsByCategory.get(category) || 0;
    return budget > 0 || spent > 0;
  });

  if (categoriesToShow.length === 0) {
    elements.categoryBudgetBody.innerHTML = '<tr><td colspan="6" class="empty">No category budget data for this month yet.</td></tr>';
    syncCategoryBudgetInput();
    return;
  }

  elements.categoryBudgetBody.innerHTML = categoriesToShow
    .map((category) => {
      const spent = totalsByCategory.get(category) || 0;
      const budget = Number(userBudgetMap[category]) || 0;
      const usagePercent = budget > 0 ? Math.round((spent / budget) * 100) : 0;
      const remaining = budget > 0 ? budget - spent : null;

      let statusClass = "neutral";
      let statusText = "No budget";

      if (budget > 0 && usagePercent >= 100) {
        statusClass = "danger";
        statusText = "Over budget";
      } else if (budget > 0 && usagePercent >= 80) {
        statusClass = "warning";
        statusText = "Near limit";
      } else if (budget > 0) {
        statusClass = "safe";
        statusText = "On track";
      }

      return `<tr>
        <td>${escapeHtml(category)}</td>
        <td>${budget > 0 ? formatMoney(budget) : '<span class="cell-muted">Not set</span>'}</td>
        <td>${formatMoney(spent)}</td>
        <td>${remaining === null ? '<span class="cell-muted">-</span>' : formatMoney(remaining)}</td>
        <td>${budget > 0 ? `${usagePercent}%` : '<span class="cell-muted">-</span>'}</td>
        <td><span class="status-pill ${statusClass}">${statusText}</span></td>
      </tr>`;
    })
    .join("");

  syncCategoryBudgetInput();
}

function handleBillReminderSubmit(event) {
  event.preventDefault();

  if (!state.currentUser) {
    return;
  }

  const title = String(elements.billTitle.value || "").trim();
  const category = String(elements.billCategory.value || "Other").trim();
  const amount = Number(elements.billAmount.value);
  const dueDate = String(elements.billDueDate.value || "").trim();
  const parsedDueDate = parseDateInput(dueDate);
  const dueDay = parsedDueDate ? parsedDueDate.getDate() : Number.NaN;
  const startMonth = dueDate.slice(0, 7);

  if (!title) {
    showFeedback(elements.billReminderFeedback, "Please provide a bill title.", "error");
    return;
  }

  if (!Number.isFinite(amount) || amount <= 0) {
    showFeedback(elements.billReminderFeedback, "Bill amount must be greater than zero.", "error");
    return;
  }

  if (!parsedDueDate || !/^\d{4}-\d{2}$/.test(startMonth) || !Number.isInteger(dueDay) || dueDay < 1 || dueDay > 31) {
    showFeedback(elements.billReminderFeedback, "Please select a valid due date.", "error");
    return;
  }

  const nowIso = new Date().toISOString();
  state.billReminders.push({
    id: createId(),
    userId: state.currentUser.id,
    title: title.slice(0, 40),
    category: category.slice(0, 20) || "Other",
    amount: Number(amount.toFixed(2)),
    dueDate,
    dueDay,
    startMonth,
    isActive: true,
    createdAt: nowIso,
    updatedAt: nowIso
  });

  persistBillReminders();
  elements.billReminderForm.reset();
  setDefaultControlValues();
  renderAll();
  logAudit("bill-reminder.create", "bill-reminder", title, `Added bill reminder ${title}.`);
  showFeedback(elements.billReminderFeedback, "Bill reminder added.", "success");
}

function handleBillReminderTableActions(event) {
  const button = event.target.closest("button[data-action][data-reminder-id]");

  if (!button || !state.currentUser) {
    return;
  }

  const reminderId = button.dataset.reminderId;
  const reminder = state.billReminders.find((entry) => entry.id === reminderId && entry.userId === state.currentUser.id);

  if (!reminder) {
    return;
  }

  if (button.dataset.action === "toggle-bill") {
    reminder.isActive = !reminder.isActive;
    reminder.updatedAt = new Date().toISOString();
    persistBillReminders();
    renderAll();
    logAudit("bill-reminder.toggle", "bill-reminder", reminder.id, `${reminder.title} marked ${reminder.isActive ? "active" : "paused"}.`);
    showFeedback(elements.billReminderFeedback, reminder.isActive ? "Bill reminder activated." : "Bill reminder paused.", "success");
    return;
  }

  if (button.dataset.action === "delete-bill") {
    const isConfirmed = window.confirm(`Delete bill reminder \"${reminder.title}\"?`);

    if (!isConfirmed) {
      return;
    }

    state.billReminders = state.billReminders.filter((entry) => entry.id !== reminder.id);
    persistBillReminders();
    renderAll();
    logAudit("bill-reminder.delete", "bill-reminder", reminder.id, `Deleted bill reminder ${reminder.title}.`);
    showFeedback(elements.billReminderFeedback, "Bill reminder deleted.", "success");
  }
}

function renderBillReminderCalendar() {
  if (!elements.billReminderBody || !elements.billAlertNote || !state.currentUser) {
    return;
  }

  const reminders = getCurrentUserBillReminders();

  if (reminders.length === 0) {
    elements.billReminderBody.innerHTML = '<tr><td colspan="6" class="empty">No bill reminders yet.</td></tr>';
    elements.billAlertNote.textContent = "Add bills to see upcoming due-date alerts.";
    return;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const sorted = [...reminders].sort((a, b) => {
    if (a.isActive !== b.isActive) {
      return a.isActive ? -1 : 1;
    }

    const dueA = getBillReminderNextDueDate(a, today);
    const dueB = getBillReminderNextDueDate(b, today);
    return dueA.getTime() - dueB.getTime();
  });

  elements.billReminderBody.innerHTML = sorted
    .map((reminder) => {
      const dueDate = getBillReminderNextDueDate(reminder, today);
      const daysLeft = getDateDaysDifference(today, dueDate);

      let statusClass = "safe";
      let statusText = `Due in ${daysLeft}d`;

      if (!reminder.isActive) {
        statusClass = "neutral";
        statusText = "Paused";
      } else if (daysLeft === 0) {
        statusClass = "danger";
        statusText = "Due today";
      } else if (daysLeft <= 3) {
        statusClass = "warning";
        statusText = `Due in ${daysLeft}d`;
      }

      return `<tr>
        <td>${formatDate(formatDateKey(dueDate))}</td>
        <td>${escapeHtml(reminder.title)}</td>
        <td>${escapeHtml(reminder.category || "Other")}</td>
        <td>${formatMoney(reminder.amount)}</td>
        <td><span class="status-pill ${statusClass}">${statusText}</span></td>
        <td>
          <div class="table-actions">
            <button type="button" class="btn small ghost" data-action="toggle-bill" data-reminder-id="${reminder.id}">${reminder.isActive ? "Pause" : "Activate"}</button>
            <button type="button" class="btn small secondary" data-action="delete-bill" data-reminder-id="${reminder.id}">Delete</button>
          </div>
        </td>
      </tr>`;
    })
    .join("");

  const upcoming = getUpcomingBillOccurrences(reminders.filter((reminder) => reminder.isActive), 7);

  if (upcoming.length === 0) {
    elements.billAlertNote.textContent = "No active bill is due in the next 7 days.";
    return;
  }

  const preview = upcoming.slice(0, 3).map((entry) => `${entry.title} (${formatDate(entry.dueDate)})`).join(", ");
  elements.billAlertNote.textContent = upcoming.length > 3
    ? `Alert: ${preview} and ${upcoming.length - 3} more due soon.`
    : `Alert: ${preview}.`;
}

function getBillReminderNextDueDate(reminder, fromDate = new Date()) {
  const dueDay = Math.min(31, Math.max(1, Number(reminder.dueDay) || 1));
  const baseline = fromDate instanceof Date ? new Date(fromDate) : new Date(fromDate);
  baseline.setHours(0, 0, 0, 0);

  let monthCursor = /^\d{4}-\d{2}$/.test(String(reminder.startMonth || ""))
    ? reminder.startMonth
    : monthKeyFromDate(baseline);

  for (let index = 0; index < 120; index += 1) {
    const monthDate = parseDateInput(`${monthCursor}-01`);

    if (!monthDate) {
      break;
    }

    const candidate = resolveRecurringDate(monthDate.getFullYear(), monthDate.getMonth(), dueDay);

    if (candidate >= baseline) {
      return candidate;
    }

    monthCursor = shiftMonthKey(monthCursor, 1);
  }

  return baseline;
}

function getUpcomingBillOccurrences(reminders, daysWindow) {
  const list = Array.isArray(reminders) ? reminders : [];
  const horizonDays = Math.max(1, Number(daysWindow) || 30);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const horizonDate = new Date(today);
  horizonDate.setDate(horizonDate.getDate() + horizonDays);

  const occurrences = [];

  for (const reminder of list) {
    const dueDay = Math.min(31, Math.max(1, Number(reminder.dueDay) || 1));
    let dueDate = getBillReminderNextDueDate(reminder, today);

    for (let index = 0; index < 24 && dueDate <= horizonDate; index += 1) {
      occurrences.push({
        reminderId: reminder.id,
        title: String(reminder.title || "Bill"),
        category: String(reminder.category || "Other"),
        amount: Number(reminder.amount) || 0,
        dueDate: formatDateKey(dueDate),
        daysLeft: getDateDaysDifference(today, dueDate)
      });

      dueDate = resolveRecurringDate(dueDate.getFullYear(), dueDate.getMonth() + 1, dueDay);
    }
  }

  return occurrences.sort((a, b) => a.dueDate.localeCompare(b.dueDate));
}

function getDateDaysDifference(fromDate, toDate) {
  const from = fromDate instanceof Date ? fromDate : new Date(fromDate);
  const to = toDate instanceof Date ? toDate : new Date(toDate);
  const dayMs = 24 * 60 * 60 * 1000;
  return Math.round((to.getTime() - from.getTime()) / dayMs);
}

function handleBudgetSubmit(event) {
  event.preventDefault();

  if (!state.currentUser) {
    return;
  }

  const amount = Number(elements.budgetAmount.value);

  if (!Number.isFinite(amount) || amount <= 0) {
    showFeedback(elements.budgetFeedback, "Budget must be greater than zero.", "error");
    return;
  }

  state.budgets[state.currentUser.id] = Number(amount.toFixed(2));
  persistBudgets();
  renderOverview();
  elements.budgetAmount.value = "";
  logAudit("budget.save", "budget", state.currentUser.id, `Monthly budget set to ${formatMoney(amount)}.`);
  showFeedback(elements.budgetFeedback, "Monthly budget saved.", "success");
}

function handleBudgetClear() {
  if (!state.currentUser) {
    return;
  }

  const userId = state.currentUser.id;

  if (!Object.prototype.hasOwnProperty.call(state.budgets, userId)) {
    showFeedback(elements.budgetFeedback, "No budget is set for this account yet.", "error");
    return;
  }

  setUndoAction(
    {
      type: "restore-budget",
      amount: Number(state.budgets[userId])
    },
    "Monthly budget cleared. Undo available for 20 seconds."
  );

  delete state.budgets[userId];
  persistBudgets();
  elements.budgetForm.reset();
  renderOverview();
  logAudit("budget.clear", "budget", userId, "Monthly budget cleared.");
  showFeedback(elements.budgetFeedback, "Monthly budget cleared.", "success");
}

function renderAll() {
  refreshCategorySelectors();
  renderCustomCategoryList();
  renderSavedViews();
  renderOverview();
  renderInsightStrip();
  renderExpenseTable();
  renderReports();
  renderCategoryBudgetTable();
  renderBillReminderCalendar();
  renderAdmin();
  renderSettingsView();
  renderAuditTables();
  renderUndoBanner();
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

  renderBudgetSummary(monthTotal);
  renderForecast(monthTotal);
  renderRecentExpenses(expenses);
  renderCategoryBars(elements.overviewCategoryBars, expenses);
}

function renderForecast(monthTotal) {
  const uiBundle = getUiTranslationBundle(getCurrentUserSettings().language);
  const dynamicText = uiBundle.dynamic;
  const today = new Date();
  const dayOfMonth = today.getDate();
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const dailyAverage = dayOfMonth > 0 ? monthTotal / dayOfMonth : 0;
  const projectedTotal = dailyAverage * daysInMonth;
  const budget = getCurrentUserBudget();
  const projectedGap = budget > 0 ? projectedTotal - budget : 0;
  const upcomingBillAmount = getUpcomingBillOccurrences(
    getCurrentUserBillReminders().filter((reminder) => reminder.isActive),
    30
  ).reduce((sum, reminder) => sum + reminder.amount, 0);

  elements.forecastCards.innerHTML = `
    <p><span>${dynamicText.dailyPace}</span><strong>${formatMoney(dailyAverage)}</strong></p>
    <p><span>${dynamicText.projectedMonthEnd}</span><strong>${formatMoney(projectedTotal)}</strong></p>
    <p><span>${dynamicText.billsDue30d}</span><strong>${formatMoney(upcomingBillAmount)}</strong></p>
    <p><span>${dynamicText.budgetVariance}</span><strong>${budget > 0 ? formatMoney(projectedGap) : dynamicText.notSet}</strong></p>
  `;

  if (budget <= 0) {
    elements.forecastNote.textContent = dynamicText.setBudgetForProjection;
    return;
  }

  if (projectedGap > 0) {
    elements.forecastNote.textContent = `${dynamicText.forecastOverBudgetPrefix} ${formatMoney(projectedGap)}. ${dynamicText.forecastOverBudgetSuffix}`;
    return;
  }

  elements.forecastNote.textContent = `${dynamicText.forecastHealthyPrefix} ${formatMoney(Math.abs(projectedGap))}.`;
}

function renderInsightStrip() {
  if (!elements.insightStrip || !state.currentUser) {
    return;
  }

  const uiBundle = getUiTranslationBundle(getCurrentUserSettings().language);
  const dynamicText = uiBundle.dynamic;

  const userExpenses = getCurrentUserExpenses();
  const monthExpenses = getCurrentMonthExpenses(userExpenses);
  const monthTotal = monthExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  const daysElapsed = Math.max(1, new Date().getDate());
  const dailyAverage = monthTotal / daysElapsed;
  const highestExpense = monthExpenses.reduce((max, expense) => Math.max(max, expense.amount), 0);
  const budget = getCurrentUserBudget();
  const budgetUsage = budget > 0 ? Math.max(0, Math.round((monthTotal / budget) * 100)) : 0;
  const budgetText = budget > 0 ? `${budgetUsage}${dynamicText.percentUsedSuffix}` : dynamicText.notSet;
  const activeBillReminders = getCurrentUserBillReminders().filter((reminder) => reminder.isActive);
  const dueSoonBills = getUpcomingBillOccurrences(activeBillReminders, 7);
  const dueSoonBillText = dueSoonBills.length > 0 ? `${dueSoonBills.length} ${dynamicText.dueSuffix}` : dynamicText.none;
  const trackedBills = activeBillReminders.length;
  const nextBill = getUpcomingBillOccurrences(activeBillReminders, 30)[0] || null;
  const nextBillText = nextBill
    ? `${escapeHtml(nextBill.title)} ${dynamicText.onWord} ${formatDate(nextBill.dueDate)}`
    : dynamicText.none;

  elements.insightStrip.innerHTML = `
    <span class="insight-pill">${dynamicText.dailyAverageLabel} <strong>${formatMoney(dailyAverage)}</strong></span>
    <span class="insight-pill">${dynamicText.highestLabel} <strong>${formatMoney(highestExpense)}</strong></span>
    <span class="insight-pill">${dynamicText.budgetLabel} <strong>${budgetText}</strong></span>
    <span class="insight-pill">${dynamicText.billsTrackedLabel} <strong>${trackedBills}</strong></span>
    <span class="insight-pill">${dynamicText.billsSoonLabel} <strong>${dueSoonBillText}</strong></span>
    <span class="insight-pill">${dynamicText.nextBillLabel} <strong>${nextBillText}</strong></span>
  `;
}

function renderBudgetSummary(monthTotal) {
  const uiBundle = getUiTranslationBundle(getCurrentUserSettings().language);
  const dynamicText = uiBundle.dynamic;
  const budget = getCurrentUserBudget();

  elements.budgetSpent.textContent = formatMoney(monthTotal);

  if (!Number.isFinite(budget) || budget <= 0) {
    elements.budgetAmount.value = "";
    elements.budgetTotal.textContent = dynamicText.notSet;
    elements.budgetRemaining.textContent = dynamicText.notSet;
    elements.budgetProgressFill.style.width = "0%";
    elements.budgetProgress.setAttribute("aria-valuenow", "0");
    elements.budgetStatus.textContent = dynamicText.budgetStatusSetPrompt;
    elements.budgetStatus.classList.remove("is-safe", "is-warning", "is-danger");
    elements.budgetProgress.classList.remove("is-safe", "is-warning", "is-danger");
    restartProgressShimmerAnimation();
    return;
  }

  const ratio = monthTotal / budget;
  const displayPercent = Math.max(0, Math.round(ratio * 100));
  const barPercent = Math.max(0, Math.min(displayPercent, 100));
  const remaining = budget - monthTotal;

  elements.budgetTotal.textContent = formatMoney(budget);
  elements.budgetRemaining.textContent = formatMoney(remaining);
  elements.budgetProgressFill.style.width = `${barPercent}%`;
  elements.budgetProgress.setAttribute("aria-valuenow", String(barPercent));
  elements.budgetStatus.classList.remove("is-safe", "is-warning", "is-danger");
  elements.budgetProgress.classList.remove("is-safe", "is-warning", "is-danger");

  if (ratio >= 1) {
    const overBy = monthTotal - budget;
    elements.budgetStatus.textContent = `${dynamicText.budgetStatusOverPrefix} ${formatMoney(overBy)}. ${dynamicText.budgetStatusOverSuffix}`;
    elements.budgetStatus.classList.add("is-danger");
    elements.budgetProgress.classList.add("is-danger");
    return;
  }

  if (ratio >= 0.9) {
    elements.budgetStatus.textContent = `${dynamicText.budgetStatusNinetyPrefix} ${displayPercent}% ${dynamicText.budgetStatusNinetySuffix}`;
    elements.budgetStatus.classList.add("is-danger");
    elements.budgetProgress.classList.add("is-danger");
    return;
  }

  if (ratio >= 0.7) {
    elements.budgetStatus.textContent = `${dynamicText.budgetStatusSeventyPrefix} ${displayPercent}% ${dynamicText.budgetStatusSeventySuffix}`;
    elements.budgetStatus.classList.add("is-warning");
    elements.budgetProgress.classList.add("is-warning");
    return;
  }

  elements.budgetStatus.textContent = `${dynamicText.budgetStatusOnTrackPrefix} ${displayPercent}% ${dynamicText.budgetStatusOnTrackSuffix}`;
  elements.budgetStatus.classList.add("is-safe");
  elements.budgetProgress.classList.add("is-safe");
  restartProgressShimmerAnimation();
}

function renderRecentExpenses(expenses) {
  const uiBundle = getUiTranslationBundle(getCurrentUserSettings().language);
  const dynamicText = uiBundle.dynamic;
  const sorted = [...expenses].sort(compareByDateDesc).slice(0, 6);

  if (sorted.length === 0) {
    elements.recentExpenses.innerHTML = `<li class="empty">${escapeHtml(dynamicText.recentExpensesEmpty)}</li>`;
    return;
  }

  elements.recentExpenses.innerHTML = sorted
    .map((expense) => {
      const badge = getCategoryAbbreviation(expense.category);

      return `<li class="recent-item">
        <div class="recent-main">
          <span class="recent-badge">${escapeHtml(badge)}</span>
          <div class="recent-copy">
            <strong>${escapeHtml(expense.category)}</strong>
            <span class="recent-meta">${formatDate(expense.date)}${expense.description ? ` · ${escapeHtml(expense.description)}` : ""}</span>
          </div>
        </div>
        <div class="recent-amount">
          <strong>${formatMoney(expense.amount)}</strong>
          <span class="recent-kind">${escapeHtml(dynamicText.expenseKindLabel)}</span>
        </div>
      </li>`;
    })
    .join("");
}

function getCategoryAbbreviation(category) {
  const safeCategory = String(category || "").trim();

  if (!safeCategory) {
    return "NA";
  }

  const parts = safeCategory.split(/\s+/).filter(Boolean);

  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }

  return safeCategory.slice(0, 2).toUpperCase();
}

function renderExpenseTable() {
  const uiBundle = getUiTranslationBundle(getCurrentUserSettings().language);
  const dynamicText = uiBundle.dynamic;
  const expenses = getFilteredExpenseRecords();

  if (expenses.length === 0) {
    elements.expenseTableBody.innerHTML = `<tr><td colspan="6" class="empty">${escapeHtml(dynamicText.expenseTableEmpty)}</td></tr>`;
    return;
  }

  elements.expenseTableBody.innerHTML = expenses
    .map((expense) => {
      const receiptMarkup = expense.receiptDataUrl
        ? `<button type="button" class="btn small ghost" data-action="receipt" data-expense-id="${expense.id}">${escapeHtml(dynamicText.viewReceiptButton)}</button>`
        : `<span class="cell-muted">${escapeHtml(dynamicText.none)}</span>`;

      return `<tr>
        <td>${formatDate(expense.date)}</td>
        <td>${escapeHtml(expense.category)}</td>
        <td>${formatMoney(expense.amount)}</td>
        <td>${receiptMarkup}</td>
        <td class="description">${expense.description ? escapeHtml(expense.description) : "-"}</td>
        <td>
          <div class="table-actions">
            <button type="button" class="btn small ghost" data-action="edit" data-expense-id="${expense.id}">${escapeHtml(dynamicText.editButton)}</button>
            <button type="button" class="btn small secondary" data-action="delete" data-expense-id="${expense.id}">${escapeHtml(dynamicText.deleteButton)}</button>
          </div>
        </td>
      </tr>`;
    })
    .join("");
}

function getFilteredExpenseRecords() {
  const currentUserExpenses = getCurrentUserExpenses();
  const byDateRange = getDateFilteredExpenses(currentUserExpenses);
  return byDateRange.sort(compareByDateDesc);
}

function renderReports() {
  const expenses = getDateFilteredExpenses(getCurrentUserExpenses());
  renderReportPieChart(expenses);
  renderReportBuilder();
}

function renderReportPieChart(expenses) {
  if (!elements.reportPieChart || !elements.reportPieLegend || !elements.reportPieTotal || !elements.reportPieEmpty) {
    return;
  }

  const uiBundle = getUiTranslationBundle(getCurrentUserSettings().language);
  const dynamicText = uiBundle.dynamic;

  const rows = [];
  const totals = new Map();

  for (const expense of expenses) {
    totals.set(expense.category, (totals.get(expense.category) || 0) + expense.amount);
  }

  for (const [category, total] of totals.entries()) {
    if (total > 0) {
      rows.push({ category, total });
    }
  }

  rows.sort((a, b) => b.total - a.total);

  const chartContext = elements.reportPieChart.getContext("2d");
  if (!chartContext) {
    return;
  }

  const cssWidth = Math.max(280, Math.round(elements.reportPieChart.clientWidth || 380));
  const cssHeight = Math.max(240, Math.round(cssWidth * 0.75));
  const pixelRatio = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  const renderWidth = Math.round(cssWidth * pixelRatio);
  const renderHeight = Math.round(cssHeight * pixelRatio);

  if (elements.reportPieChart.width !== renderWidth || elements.reportPieChart.height !== renderHeight) {
    elements.reportPieChart.width = renderWidth;
    elements.reportPieChart.height = renderHeight;
  }

  chartContext.setTransform(1, 0, 0, 1, 0, 0);
  chartContext.scale(pixelRatio, pixelRatio);
  chartContext.clearRect(0, 0, cssWidth, cssHeight);

  const chartWrap = elements.reportPieChart.closest(".pie-canvas-wrap");
  let tooltipElement = chartWrap ? chartWrap.querySelector(".chart-tooltip") : null;

  if (chartWrap && !tooltipElement) {
    tooltipElement = document.createElement("div");
    tooltipElement.className = "chart-tooltip";
    chartWrap.appendChild(tooltipElement);
  }

  const hideTooltip = () => {
    if (!tooltipElement) {
      return;
    }

    tooltipElement.classList.remove("is-visible");
  };

  if (typeof elements.reportPieChart._hoverAnimationFrameId === "number") {
    window.cancelAnimationFrame(elements.reportPieChart._hoverAnimationFrameId);
    elements.reportPieChart._hoverAnimationFrameId = null;
  }

  hideTooltip();

  const updateTooltip = (x, y, segment) => {
    if (!tooltipElement || !chartWrap || !segment) {
      return;
    }

    const rightOffset = 16;
    const topOffset = 16;
    tooltipElement.innerHTML = `
      <p class="chart-tooltip-title">${escapeHtml(segment.category)}</p>
      <p class="chart-tooltip-meta">${segment.percent}% · ${formatMoney(segment.total)}</p>
    `;

    const maxX = chartWrap.clientWidth - tooltipElement.offsetWidth - 8;
    const maxY = chartWrap.clientHeight - tooltipElement.offsetHeight - 8;
    const left = Math.max(8, Math.min(maxX, x + rightOffset));
    const top = Math.max(8, Math.min(maxY, y + topOffset));

    tooltipElement.style.left = `${left}px`;
    tooltipElement.style.top = `${top}px`;
    tooltipElement.classList.add("is-visible");
  };

  if (rows.length === 0) {
    elements.reportPieLegend.innerHTML = "";
    elements.reportPieTotal.textContent = dynamicText.pieNoExpenses;
    elements.reportPieEmpty.classList.remove("hidden");
    elements.reportPieChart.setAttribute("aria-label", dynamicText.pieNoDataAria);
    elements.reportPieChart.onmousemove = null;
    elements.reportPieChart.onmouseleave = null;
    hideTooltip();

    if (typeof elements.reportPieChart._animationFrameId === "number") {
      window.cancelAnimationFrame(elements.reportPieChart._animationFrameId);
      elements.reportPieChart._animationFrameId = null;
    }

    if (typeof elements.reportPieChart._hoverAnimationFrameId === "number") {
      window.cancelAnimationFrame(elements.reportPieChart._hoverAnimationFrameId);
      elements.reportPieChart._hoverAnimationFrameId = null;
    }

    return;
  }

  elements.reportPieEmpty.classList.add("hidden");

  const totalAmount = rows.reduce((sum, row) => sum + row.total, 0);
  const isLightTheme = Boolean(document.body && document.body.classList.contains("theme-light"));
  const colorPairs = isLightTheme
    ? [
      ["#3b82f6", "#6366f1"],
      ["#2563eb", "#4f46e5"],
      ["#0ea5e9", "#3b82f6"],
      ["#10b981", "#14b8a6"],
      ["#f59e0b", "#f97316"],
      ["#8b5cf6", "#6366f1"],
      ["#334155", "#475569"],
      ["#64748b", "#94a3b8"],
      ["#1d4ed8", "#3b82f6"],
      ["#7c3aed", "#8b5cf6"]
    ]
    : [
      ["#f59e0b", "#fbbf24"],
      ["#d97706", "#f59e0b"],
      ["#64748b", "#94a3b8"],
      ["#475569", "#64748b"],
      ["#334155", "#475569"],
      ["#1f2937", "#374151"],
      ["#4b5563", "#6b7280"],
      ["#374151", "#4b5563"],
      ["#52525b", "#71717a"],
      ["#3f3f46", "#52525b"]
    ];
  const trackStrokeColor = isLightTheme ? "rgba(15, 23, 42, 0.1)" : "rgba(255, 255, 255, 0.07)";
  const centerFillColor = isLightTheme ? "#ffffff" : "#111827";
  const centerStrokeColor = isLightTheme ? "rgba(15, 23, 42, 0.1)" : "rgba(255, 255, 255, 0.08)";
  const centerLabelColor = isLightTheme ? "#64748b" : "#9ca3af";
  const centerValueColor = isLightTheme ? "#0f172a" : "#e5e7eb";
  const hoverGlowColor = isLightTheme ? "rgba(59, 130, 246, 0.32)" : "rgba(245, 158, 11, 0.3)";

  const cx = cssWidth / 2;
  const cy = cssHeight / 2;
  const ringRadius = Math.min(cssWidth, cssHeight) * 0.36;
  const ringWidth = Math.max(38, Math.min(56, Math.round(ringRadius * 0.44)));
  const innerRadius = ringRadius - ringWidth / 2 - 6;
  const fullArc = Math.PI * 2;
  const startAngle = -Math.PI / 2;
  const gapAngle = Math.min(0.055, fullArc / (rows.length * 18));
  let cursorAngle = startAngle;

  const segments = rows.map((row, index) => {
    const ratio = row.total / totalAmount;
    const sliceArc = ratio * fullArc;
    const segmentStart = cursorAngle + gapAngle / 2;
    const segmentEnd = cursorAngle + sliceArc - gapAngle / 2;
    const [baseColor, hoverColor] = colorPairs[index % colorPairs.length];

    cursorAngle += sliceArc;

    return {
      index,
      category: row.category,
      total: row.total,
      percent: Math.round(ratio * 100),
      ratio,
      start: segmentStart,
      end: Math.max(segmentStart + 0.001, segmentEnd),
      baseColor,
      hoverColor
    };
  });

  let hoveredSegmentIndex = -1;
  let renderProgress = 0;
  const hoverStrengthBySegment = segments.map(() => 0);

  const getHoverStrength = (segmentIndex) => {
    const level = hoverStrengthBySegment[segmentIndex];
    return Number.isFinite(level) ? level : 0;
  };

  const updateLegendHighlight = () => {
    const legendItems = elements.reportPieLegend.querySelectorAll("li[data-chart-index]");

    for (const item of legendItems) {
      const isActive = Number(item.dataset.chartIndex) === hoveredSegmentIndex;
      item.classList.toggle("is-active", isActive);
    }
  };

  const normalizeAngle = (value) => {
    let angle = value;

    while (angle < startAngle) {
      angle += fullArc;
    }

    while (angle >= startAngle + fullArc) {
      angle -= fullArc;
    }

    return angle;
  };

  const findSegmentAtPoint = (x, y) => {
    const dx = x - cx;
    const dy = y - cy;
    const distance = Math.sqrt((dx * dx) + (dy * dy));

    for (const segment of segments) {
      const isHovered = segment.index === hoveredSegmentIndex;
      const activeRadius = isHovered ? ringRadius + 3 : ringRadius;
      const activeWidth = isHovered ? ringWidth + 6 : ringWidth;
      const innerBound = activeRadius - (activeWidth / 2) - 3;
      const outerBound = activeRadius + (activeWidth / 2) + 3;

      if (distance < innerBound || distance > outerBound) {
        continue;
      }

      const angle = normalizeAngle(Math.atan2(dy, dx));
      if (angle >= segment.start && angle <= segment.end) {
        return segment.index;
      }
    }

    return -1;
  };

  const updateHoverStrength = () => {
    let requiresAnotherFrame = false;

    for (const segment of segments) {
      const targetStrength = segment.index === hoveredSegmentIndex ? 1 : 0;
      const currentStrength = getHoverStrength(segment.index);
      const nextStrength = currentStrength + ((targetStrength - currentStrength) * 0.28);

      if (Math.abs(targetStrength - nextStrength) < 0.02) {
        hoverStrengthBySegment[segment.index] = targetStrength;
      } else {
        hoverStrengthBySegment[segment.index] = nextStrength;
        requiresAnotherFrame = true;
      }
    }

    return requiresAnotherFrame;
  };

  const startHoverAnimation = () => {
    if (renderProgress < 1) {
      return;
    }

    if (typeof elements.reportPieChart._hoverAnimationFrameId === "number") {
      return;
    }

    const runHoverAnimation = () => {
      const keepAnimating = updateHoverStrength();
      drawChartFrame(renderProgress);
      updateLegendHighlight();

      if (keepAnimating) {
        elements.reportPieChart._hoverAnimationFrameId = window.requestAnimationFrame(runHoverAnimation);
        return;
      }

      elements.reportPieChart._hoverAnimationFrameId = null;
    };

    elements.reportPieChart._hoverAnimationFrameId = window.requestAnimationFrame(runHoverAnimation);
  };

  const drawChartFrame = (progress) => {
    chartContext.clearRect(0, 0, cssWidth, cssHeight);

    chartContext.beginPath();
    chartContext.arc(cx, cy, ringRadius, 0, Math.PI * 2);
    chartContext.strokeStyle = trackStrokeColor;
    chartContext.lineWidth = ringWidth;
    chartContext.lineCap = "round";
    chartContext.stroke();

    const maxVisibleAngle = startAngle + (fullArc * progress);

    for (const segment of segments) {
      if (maxVisibleAngle <= segment.start) {
        continue;
      }

      const visibleEnd = Math.min(segment.end, maxVisibleAngle);
      if (visibleEnd <= segment.start) {
        continue;
      }

      const hoverStrength = progress >= 1 ? getHoverStrength(segment.index) : 0;
      const drawRadius = ringRadius + (3 * hoverStrength);
      const drawWidth = ringWidth + (6 * hoverStrength);
      const gradient = chartContext.createLinearGradient(
        cx + Math.cos(segment.start) * drawRadius,
        cy + Math.sin(segment.start) * drawRadius,
        cx + Math.cos(visibleEnd) * drawRadius,
        cy + Math.sin(visibleEnd) * drawRadius
      );

      gradient.addColorStop(0, segment.baseColor);
      gradient.addColorStop(1, hoverStrength > 0.08 ? segment.hoverColor : segment.baseColor);

      chartContext.beginPath();
      chartContext.arc(cx, cy, drawRadius, segment.start, visibleEnd);
      chartContext.strokeStyle = gradient;
      chartContext.lineWidth = drawWidth;
      chartContext.lineCap = "round";
      chartContext.shadowBlur = 10 * hoverStrength;
      chartContext.shadowColor = hoverStrength > 0 ? hoverGlowColor : "transparent";
      chartContext.stroke();
      chartContext.shadowBlur = 0;
    }

    chartContext.beginPath();
    chartContext.arc(cx, cy, innerRadius, 0, Math.PI * 2);
    chartContext.fillStyle = centerFillColor;
    chartContext.fill();
    chartContext.lineWidth = 1;
    chartContext.strokeStyle = centerStrokeColor;
    chartContext.stroke();

    chartContext.textAlign = "center";
    chartContext.textBaseline = "middle";
    chartContext.fillStyle = centerLabelColor;
    chartContext.font = "600 12px 'Inter', 'Plus Jakarta Sans', sans-serif";
    chartContext.fillText(dynamicText.pieTotalLabel, cx, cy - 16);
    chartContext.fillStyle = centerValueColor;
    chartContext.font = "800 18px 'Poppins', 'Inter', sans-serif";
    chartContext.fillText(formatMoney(totalAmount), cx, cy + 2);
    chartContext.fillStyle = centerLabelColor;
    chartContext.font = "600 11px 'Inter', sans-serif";
    chartContext.fillText(`${rows.length} ${dynamicText.pieCategoriesLabel}`, cx, cy + 20);
  };

  const legendRows = rows
    .map((row, index) => {
      const [baseColor, highlightColor] = colorPairs[index % colorPairs.length];

      return `<li data-chart-index="${index}" style="--pie-color:${baseColor};--pie-soft:${highlightColor}">
        <span class="pie-swatch" style="background:linear-gradient(135deg, ${baseColor}, ${highlightColor})"></span>
        <span class="pie-label">${escapeHtml(row.category)}</span>
        <span class="pie-value"><strong>${Math.round((row.total / totalAmount) * 100)}%</strong> · ${formatMoney(row.total)}</span>
      </li>`;
    })
    .join("");

  elements.reportPieLegend.innerHTML = legendRows;
  elements.reportPieTotal.textContent = `${rows.length} ${dynamicText.pieCategoriesLabel} · ${dynamicText.pieTotalLabel} ${formatMoney(totalAmount)}`;
  elements.reportPieChart.setAttribute(
    "aria-label",
    `${dynamicText.pieChartAriaPrefix} ${rows.length} ${dynamicText.pieCategoriesLabel}. ${dynamicText.pieTotalLabel} ${formatMoney(totalAmount)}.`
  );

  const legendItems = Array.from(elements.reportPieLegend.querySelectorAll("li[data-chart-index]"));
  for (const item of legendItems) {
    const itemIndex = Number(item.dataset.chartIndex);
    item.tabIndex = 0;
    item.onmouseenter = () => {
      hoveredSegmentIndex = itemIndex;
      updateLegendHighlight();
      startHoverAnimation();
      hideTooltip();
    };
    item.onmouseleave = () => {
      hoveredSegmentIndex = -1;
      updateLegendHighlight();
      startHoverAnimation();
      hideTooltip();
    };
    item.onfocus = item.onmouseenter;
    item.onblur = item.onmouseleave;
  }

  elements.reportPieChart.onmousemove = (event) => {
    if (renderProgress < 1) {
      return;
    }

    const rect = elements.reportPieChart.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const nextHoveredIndex = findSegmentAtPoint(x, y);

    if (nextHoveredIndex !== hoveredSegmentIndex) {
      hoveredSegmentIndex = nextHoveredIndex;
      updateLegendHighlight();
      startHoverAnimation();
    }

    if (hoveredSegmentIndex >= 0) {
      updateTooltip(x, y, segments[hoveredSegmentIndex]);
      return;
    }

    hideTooltip();
  };

  elements.reportPieChart.onmouseleave = () => {
    hoveredSegmentIndex = -1;
    updateLegendHighlight();
    startHoverAnimation();
    hideTooltip();
  };

  if (typeof elements.reportPieChart._animationFrameId === "number") {
    window.cancelAnimationFrame(elements.reportPieChart._animationFrameId);
    elements.reportPieChart._animationFrameId = null;
  }

  const animationDurationMs = 720;
  const animationStartTime = performance.now();
  const easeOutCubic = (value) => 1 - ((1 - value) ** 3);

  const runAnimation = (now) => {
    const elapsed = now - animationStartTime;
    const rawProgress = Math.min(1, elapsed / animationDurationMs);
    renderProgress = easeOutCubic(rawProgress);

    drawChartFrame(renderProgress);
    updateLegendHighlight();

    if (rawProgress < 1) {
      elements.reportPieChart._animationFrameId = window.requestAnimationFrame(runAnimation);
      return;
    }

    elements.reportPieChart._animationFrameId = null;
    renderProgress = 1;
    drawChartFrame(renderProgress);
    startHoverAnimation();
  };

  elements.reportPieChart._animationFrameId = window.requestAnimationFrame(runAnimation);
}

function renderMonthlySummaryTable(expenses) {
  const uiBundle = getUiTranslationBundle(getCurrentUserSettings().language);
  const dynamicText = uiBundle.dynamic;
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
    elements.monthlyTableBody.innerHTML = `<tr><td colspan="3" class="empty">${escapeHtml(dynamicText.monthlyTableEmpty)}</td></tr>`;
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

function renderReportBuilder() {
  if (!state.currentUser || !elements.reportBuilderOutput) {
    return;
  }

  syncReportBuilderControlVisibility();
  const config = getReportBuilderConfig();

  if (!config.ok) {
    elements.reportBuilderOutput.innerHTML = `<p class="hint">${escapeHtml(config.message)}</p>`;
    return;
  }

  const userExpenses = getCurrentUserExpenses();
  const currentExpenses = filterExpensesByDateWindow(userExpenses, config.startDate, config.endDate);
  const previousWindow = getPreviousDateWindow(config.startDate, config.endDate);
  const previousExpenses = filterExpensesByDateWindow(userExpenses, previousWindow.startDate, previousWindow.endDate);

  const currentSummary = summarizeReportWindow(currentExpenses, config.breakdown, config.startDate, config.endDate);
  const previousSummary = summarizeReportWindow(previousExpenses, config.breakdown, previousWindow.startDate, previousWindow.endDate);
  const delta = currentSummary.total - previousSummary.total;

  const rowsMarkup = currentSummary.rows.length === 0
    ? '<tr><td colspan="3" class="empty">No entries in this report period.</td></tr>'
    : currentSummary.rows
      .map((row) => `<tr><td>${escapeHtml(row.label)}</td><td>${row.count}</td><td>${formatMoney(row.total)}</td></tr>`)
      .join("");

  elements.reportBuilderOutput.innerHTML = `
    <div class="builder-cards">
      <p><span>Period</span><strong>${escapeHtml(config.periodLabel)}</strong></p>
      <p><span>Total spend</span><strong>${formatMoney(currentSummary.total)}</strong></p>
      <p><span>Transactions</span><strong>${currentSummary.count}</strong></p>
      <p><span>Avg / transaction</span><strong>${formatMoney(currentSummary.average)}</strong></p>
      <p><span>Top category</span><strong>${escapeHtml(currentSummary.topCategory || "-")}</strong></p>
      <p><span>Vs previous period</span><strong>${formatMoney(delta)}</strong></p>
    </div>
      <table>
        <thead>
          <tr>
            <th>${escapeHtml(config.columnLabel)}</th>
            <th>Transactions</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>${rowsMarkup}</tbody>
      </table>
    </div>
  `;
}

function syncReportBuilderControlVisibility() {
  if (!elements.reportBuilderType) {
    return;
  }

  const type = elements.reportBuilderType.value || "monthly";

  if (elements.reportBuilderMonth) {
    elements.reportBuilderMonth.classList.toggle("hidden", type !== "monthly");
  }

  if (elements.reportBuilderWeekDate) {
    elements.reportBuilderWeekDate.classList.toggle("hidden", type !== "weekly");
  }

  if (elements.reportBuilderYear) {
    elements.reportBuilderYear.classList.toggle("hidden", type !== "yearly");
  }

  const showCustom = type === "custom";
  if (elements.reportBuilderFrom) {
    elements.reportBuilderFrom.classList.toggle("hidden", !showCustom);
  }
  if (elements.reportBuilderTo) {
    elements.reportBuilderTo.classList.toggle("hidden", !showCustom);
  }
}

function getReportBuilderConfig() {
  const type = String(elements.reportBuilderType.value || "monthly");
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (type === "weekly") {
    const weekDateValue = String(elements.reportBuilderWeekDate && elements.reportBuilderWeekDate.value
      ? elements.reportBuilderWeekDate.value
      : formatDateKey(today));
    const anchorDate = parseDateInput(weekDateValue);

    if (!anchorDate) {
      return { ok: false, message: "Select a valid week date." };
    }

    const weekStartIndex = getWeekStartIndex(getCurrentUserSettings().weekStart);
    const startDate = getWeekStartDate(anchorDate, weekStartIndex);
    const endDate = addDays(startDate, 6);

    return {
      ok: true,
      startDate,
      endDate,
      periodLabel: `${formatDate(formatDateKey(startDate))} - ${formatDate(formatDateKey(endDate))}`,
      breakdown: "day",
      columnLabel: "Date"
    };
  }

  if (type === "yearly") {
    const rawYear = Number(elements.reportBuilderYear && elements.reportBuilderYear.value
      ? elements.reportBuilderYear.value
      : today.getFullYear());

    if (!Number.isInteger(rawYear) || rawYear < 1900 || rawYear > 2100) {
      return { ok: false, message: "Select a valid year." };
    }

    const startDate = new Date(rawYear, 0, 1);
    const endDate = new Date(rawYear, 11, 31);

    return {
      ok: true,
      startDate,
      endDate,
      periodLabel: String(rawYear),
      breakdown: "month",
      columnLabel: "Month"
    };
  }

  if (type === "latest2years") {
    const endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const startDate = new Date(today.getFullYear(), today.getMonth() - 23, 1);

    return {
      ok: true,
      startDate,
      endDate,
      periodLabel: `${formatMonth(monthKeyFromDate(startDate))} - ${formatMonth(monthKeyFromDate(endDate))}`,
      breakdown: "month",
      columnLabel: "Month"
    };
  }

  if (type === "custom") {
    const fromDate = parseDateInput(elements.reportBuilderFrom ? elements.reportBuilderFrom.value : "");
    const toDate = parseDateInput(elements.reportBuilderTo ? elements.reportBuilderTo.value : "");

    if (!fromDate || !toDate) {
      return { ok: false, message: "Select both From and To dates for custom report." };
    }

    if (fromDate > toDate) {
      return { ok: false, message: "Custom range is invalid. From date must be before To date." };
    }

    const daySpan = getDateDaysDifference(fromDate, toDate) + 1;
    const breakdown = daySpan <= 62 ? "day" : "month";

    return {
      ok: true,
      startDate: fromDate,
      endDate: toDate,
      periodLabel: `${formatDate(formatDateKey(fromDate))} - ${formatDate(formatDateKey(toDate))}`,
      breakdown,
      columnLabel: breakdown === "day" ? "Date" : "Month"
    };
  }

  const monthKey = String(elements.reportBuilderMonth && elements.reportBuilderMonth.value
    ? elements.reportBuilderMonth.value
    : monthKeyFromDate(today));
  const monthDate = parseDateInput(`${monthKey}-01`);

  if (!monthDate) {
    return { ok: false, message: "Select a valid month." };
  }

  const startDate = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const endDate = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0);

  return {
    ok: true,
    startDate,
    endDate,
    periodLabel: formatMonth(monthKey),
    breakdown: "day",
    columnLabel: "Date"
  };
}

function filterExpensesByDateWindow(expenses, startDate, endDate) {
  const startKey = formatDateKey(startDate);
  const endKey = formatDateKey(endDate);

  return expenses.filter((expense) => expense.date >= startKey && expense.date <= endKey);
}

function getPreviousDateWindow(startDate, endDate) {
  const spanDays = Math.max(1, getDateDaysDifference(startDate, endDate) + 1);
  const previousEnd = addDays(startDate, -1);
  const previousStart = addDays(previousEnd, -(spanDays - 1));

  return {
    startDate: previousStart,
    endDate: previousEnd
  };
}

function summarizeReportWindow(expenses, breakdown, startDate, endDate) {
  const rows = buildReportBuilderRows(expenses, breakdown, startDate, endDate);
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const count = expenses.length;
  const average = count > 0 ? total / count : 0;
  const topCategory = getTopCategory(expenses);

  return {
    total,
    count,
    average,
    topCategory,
    rows
  };
}

function buildReportBuilderRows(expenses, breakdown, startDate, endDate) {
  const rowsByKey = new Map();

  if (breakdown === "day") {
    let cursor = new Date(startDate);
    cursor.setHours(0, 0, 0, 0);
    const finalDay = new Date(endDate);
    finalDay.setHours(0, 0, 0, 0);

    while (cursor <= finalDay) {
      const key = formatDateKey(cursor);
      rowsByKey.set(key, {
        key,
        label: formatDate(key),
        count: 0,
        total: 0
      });
      cursor = addDays(cursor, 1);
    }

    for (const expense of expenses) {
      const row = rowsByKey.get(expense.date);

      if (!row) {
        continue;
      }

      row.count += 1;
      row.total += expense.amount;
    }

    return Array.from(rowsByKey.values()).sort((a, b) => a.key.localeCompare(b.key));
  }

  let monthCursor = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
  const finalMonth = new Date(endDate.getFullYear(), endDate.getMonth(), 1);

  while (monthCursor <= finalMonth) {
    const monthKey = monthKeyFromDate(monthCursor);
    rowsByKey.set(monthKey, {
      key: monthKey,
      label: formatMonth(monthKey),
      count: 0,
      total: 0
    });

    monthCursor = new Date(monthCursor.getFullYear(), monthCursor.getMonth() + 1, 1);
  }

  for (const expense of expenses) {
    const monthKey = expense.date.slice(0, 7);
    const row = rowsByKey.get(monthKey);

    if (!row) {
      continue;
    }

    row.count += 1;
    row.total += expense.amount;
  }

  return Array.from(rowsByKey.values()).sort((a, b) => a.key.localeCompare(b.key));
}

function addDays(dateValue, days) {
  const date = dateValue instanceof Date ? new Date(dateValue) : new Date(dateValue);
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + days);
  return date;
}

function getWeekStartDate(dateValue, weekStartIndex) {
  const date = dateValue instanceof Date ? new Date(dateValue) : new Date(dateValue);
  date.setHours(0, 0, 0, 0);
  const dayIndex = date.getDay();
  const offset = (dayIndex - weekStartIndex + 7) % 7;
  date.setDate(date.getDate() - offset);
  return date;
}

function getWeekStartIndex(value) {
  const normalized = String(value || "").trim().toLowerCase();
  const indexByDay = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6
  };

  if (Object.prototype.hasOwnProperty.call(indexByDay, normalized)) {
    return indexByDay[normalized];
  }

  return indexByDay[DEFAULT_USER_SETTINGS.weekStart] || 1;
}

function renderCategoryBars(container, expenses) {
  const categories = getAvailableCategories();
  const totals = new Map(categories.map((category) => [category, 0]));

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

  restartProgressShimmerAnimation();
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

  logAudit("user.toggle-status", "user", user.id, message);
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
  const stamp = formatDateKey(new Date());

  anchor.href = url;
  anchor.download = `expense-report-${stamp}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);

  logAudit("report.download-json", "report", stamp, "Downloaded JSON report.");
  showFeedback(elements.reportFeedback, "Report downloaded successfully.", "success");
}

function handleDownloadCsv() {
  if (!state.currentUser) {
    return;
  }

  const expenses = getDateFilteredExpenses(getCurrentUserExpenses());

  if (expenses.length === 0) {
    showFeedback(elements.reportFeedback, "No expenses available to export as CSV.", "error");
    return;
  }

  const headers = ["Date", "Category", "Amount", "Tags", "Description", "ReceiptName"];
  const lines = [headers.join(",")];

  for (const expense of expenses) {
    lines.push(
      [
        expense.date,
        expense.category,
        Number(expense.amount).toFixed(2),
        Array.isArray(expense.tags) ? expense.tags.join("|") : "",
        expense.description || "",
        expense.receiptName || ""
      ].map(escapeCsvValue).join(",")
    );
  }

  const csvContent = lines.join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  const stamp = formatDateKey(new Date());

  anchor.href = url;
  anchor.download = `expense-report-${stamp}.csv`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);

  logAudit("report.download-csv", "report", stamp, "Exported CSV report.");
  showFeedback(elements.reportFeedback, "CSV exported successfully.", "success");
}

async function handleImportCsv(event) {
  if (!state.currentUser) {
    return;
  }

  const file = event.target.files && event.target.files[0];

  if (!file) {
    return;
  }

  try {
    const fileText = await file.text();
    const rows = parseCsvRows(fileText);

    if (rows.length < 2) {
      showFeedback(elements.reportFeedback, "CSV must include a header and at least one row.", "error");
      return;
    }

    const headerRow = rows[0].map((header) => normalizeCsvHeader(header));
    const dateIndex = findCsvHeaderIndex(headerRow, ["date", "transactiondate"]);
    const categoryIndex = findCsvHeaderIndex(headerRow, ["category"]);
    const amountIndex = findCsvHeaderIndex(headerRow, ["amount", "value"]);
    const descriptionIndex = findCsvHeaderIndex(headerRow, ["description", "note", "notes", "details"]);
    const tagsIndex = findCsvHeaderIndex(headerRow, ["tags", "tag"]);

    if (dateIndex < 0 || categoryIndex < 0 || amountIndex < 0) {
      showFeedback(
        elements.reportFeedback,
        "CSV headers must include Date, Category, and Amount columns.",
        "error"
      );
      return;
    }

    let importedCount = 0;
    let skippedCount = 0;

    for (let index = 1; index < rows.length; index += 1) {
      const row = rows[index];
      const normalizedDate = normalizeImportedDate(row[dateIndex]);
      const normalizedCategory = normalizeImportedCategory(row[categoryIndex]);
      const amount = Number(row[amountIndex]);
      const description = descriptionIndex >= 0 ? String(row[descriptionIndex] || "").trim().slice(0, 180) : "";
      const tags = tagsIndex >= 0 ? parseTagInput(String(row[tagsIndex] || "").replaceAll("|", ",")) : [];

      if (!normalizedDate || !Number.isFinite(amount) || amount <= 0) {
        skippedCount += 1;
        continue;
      }

      const duplicate = state.expenses.some((expense) => {
        return (
          expense.userId === state.currentUser.id
          && expense.date === normalizedDate
          && expense.category === normalizedCategory
          && Number(expense.amount) === Number(amount.toFixed(2))
          && (expense.description || "") === description
        );
      });

      if (duplicate) {
        skippedCount += 1;
        continue;
      }

      const nowIso = new Date().toISOString();
      const newExpense = {
        id: createId(),
        userId: state.currentUser.id,
        amount: Number(amount.toFixed(2)),
        date: normalizedDate,
        category: normalizedCategory,
        tags,
        description,
        createdAt: nowIso,
        updatedAt: nowIso
      };

      state.expenses.push(newExpense);
      importedCount += 1;
    }

    if (importedCount > 0) {
      persistExpenses();
      renderAll();
    }

    logAudit("csv.import", "report", file.name, `CSV import complete: ${importedCount} added, ${skippedCount} skipped.`);
    showFeedback(
      elements.reportFeedback,
      `CSV import complete: ${importedCount} added, ${skippedCount} skipped.`,
      importedCount > 0 ? "success" : "error"
    );
  } catch (error) {
    console.error(error);
    showFeedback(elements.reportFeedback, "Failed to import CSV file.", "error");
  } finally {
    elements.importCsvInput.value = "";
  }
}

function getCurrentUserExpenses() {
  if (!state.currentUser) {
    return [];
  }

  return state.expenses.filter((expense) => expense.userId === state.currentUser.id);
}

function getCurrentUserBillReminders() {
  if (!state.currentUser) {
    return [];
  }

  return state.billReminders.filter((reminder) => reminder.userId === state.currentUser.id);
}

function getCurrentUserCategoryBudgets() {
  if (!state.currentUser) {
    return {};
  }

  const userBudgetMap = state.categoryBudgets[state.currentUser.id];

  if (!isPlainObject(userBudgetMap)) {
    return {};
  }

  return userBudgetMap;
}

function ensureCurrentUserCategoryBudgetMap() {
  if (!state.currentUser) {
    return {};
  }

  if (!isPlainObject(state.categoryBudgets[state.currentUser.id])) {
    state.categoryBudgets[state.currentUser.id] = {};
  }

  return state.categoryBudgets[state.currentUser.id];
}

function getCurrentUserCustomCategories() {
  if (!state.currentUser) {
    return [];
  }

  const entries = state.customCategories[state.currentUser.id];
  if (!Array.isArray(entries)) {
    return [];
  }

  return entries.filter((entry) => typeof entry === "string" && entry.trim()).map((entry) => entry.trim());
}

function ensureCurrentUserCustomCategoryList() {
  if (!state.currentUser) {
    return [];
  }

  if (!Array.isArray(state.customCategories[state.currentUser.id])) {
    state.customCategories[state.currentUser.id] = [];
  }

  return state.customCategories[state.currentUser.id];
}

function getAvailableCategories() {
  const categories = new Set(BASE_CATEGORY_LIST);

  for (const customCategory of getCurrentUserCustomCategories()) {
    categories.add(customCategory);
  }

  for (const expense of getCurrentUserExpenses()) {
    if (expense.category) {
      categories.add(expense.category);
    }
  }

  return Array.from(categories).sort((a, b) => a.localeCompare(b));
}

function refreshCategorySelectors() {
  const categories = getAvailableCategories();

  const selectedExpenseCategory = elements.expenseCategory.value;
  const selectedCategoryBudget = elements.categoryBudgetSelect.value;
  const selectedFilterCategory = state.expenseFilters.category || "all";

  setSelectOptions(elements.expenseCategory, categories, selectedExpenseCategory, null);
  setSelectOptions(elements.categoryBudgetSelect, categories, selectedCategoryBudget, null);
  setSelectOptions(elements.filterCategory, categories, selectedFilterCategory, "All categories");
}

function setSelectOptions(selectElement, categories, selectedValue, allLabel) {
  if (!selectElement) {
    return;
  }

  const options = [];

  if (allLabel) {
    options.push(`<option value="all">${escapeHtml(allLabel)}</option>`);
  }

  for (const category of categories) {
    options.push(`<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`);
  }

  selectElement.innerHTML = options.join("");

  const normalizedSelected = selectedValue && categories.includes(selectedValue)
    ? selectedValue
    : (allLabel ? "all" : (categories[0] || ""));

  selectElement.value = normalizedSelected;
}

function handleAddCustomCategory() {
  if (!state.currentUser) {
    return;
  }

  const rawValue = String(elements.customCategoryInput.value || "").trim().replaceAll(/\s+/g, " ");

  if (!rawValue) {
    showFeedback(elements.customCategoryFeedback, "Enter a category name first.", "error");
    return;
  }

  const cleanValue = rawValue.slice(0, 30);
  const availableCategories = getAvailableCategories();

  if (availableCategories.some((entry) => entry.toLowerCase() === cleanValue.toLowerCase())) {
    showFeedback(elements.customCategoryFeedback, "Category already exists.", "error");
    return;
  }

  const customList = ensureCurrentUserCustomCategoryList();
  customList.push(cleanValue);

  persistCustomCategories();
  elements.customCategoryInput.value = "";
  refreshCategorySelectors();
  renderCustomCategoryList();
  logAudit("category.custom-add", "category", cleanValue, `Added custom category ${cleanValue}.`);
  showFeedback(elements.customCategoryFeedback, `${cleanValue} added to category list.`, "success");
}

function handleCustomCategoryListActions(event) {
  const button = event.target.closest("button[data-action='remove-category']");

  if (!button || !state.currentUser) {
    return;
  }

  const categoryName = button.dataset.category;

  if (!categoryName) {
    return;
  }

  const customList = ensureCurrentUserCustomCategoryList();
  const targetIndex = customList.findIndex((entry) => entry === categoryName);

  if (targetIndex < 0) {
    return;
  }

  const isConfirmed = window.confirm(`Remove custom category "${categoryName}" from selectors? Existing expenses will keep their values.`);

  if (!isConfirmed) {
    return;
  }

  customList.splice(targetIndex, 1);
  persistCustomCategories();
  refreshCategorySelectors();
  renderCustomCategoryList();
  logAudit("category.custom-remove", "category", categoryName, `Removed custom category ${categoryName}.`);
  showFeedback(elements.customCategoryFeedback, `${categoryName} removed from custom categories.`, "success");
}

function renderCustomCategoryList() {
  if (!elements.customCategoryList) {
    return;
  }

  const customList = getCurrentUserCustomCategories();

  if (customList.length === 0) {
    elements.customCategoryList.innerHTML = '<p class="hint">No custom categories yet.</p>';
    return;
  }

  elements.customCategoryList.innerHTML = customList
    .map((category) => {
      return `<span class="category-chip">
        ${escapeHtml(category)}
        <button type="button" data-action="remove-category" data-category="${escapeHtml(category)}" aria-label="Remove ${escapeHtml(category)}">x</button>
      </span>`;
    })
    .join("");
}

function syncExpenseFiltersFromForm() {
  state.expenseFilters = {
    fromDate: String(elements.filterFromDate.value || ""),
    toDate: String(elements.filterToDate.value || ""),
    category: String(elements.filterCategory.value || "all"),
    minAmount: String(elements.filterMinAmount.value || ""),
    maxAmount: String(elements.filterMaxAmount.value || ""),
    tag: String(elements.filterTag.value || "").trim().toLowerCase()
  };

  refreshAdvancedFilterUi();
}

function clearAdvancedFilters() {
  state.expenseFilters = { ...DEFAULT_EXPENSE_FILTERS };

  elements.filterFromDate.value = "";
  elements.filterToDate.value = "";
  elements.filterCategory.value = "all";
  elements.filterMinAmount.value = "";
  elements.filterMaxAmount.value = "";
  elements.filterTag.value = "";
  renderExpenseTable();
  showFeedback(elements.filterFeedback, "Advanced filters cleared.", "success");
}

function applyAdvancedExpenseFilters(expenses) {
  const filters = state.expenseFilters;
  const minAmount = Number(filters.minAmount);
  const maxAmount = Number(filters.maxAmount);

  return expenses.filter((expense) => {
    if (filters.fromDate && expense.date < filters.fromDate) {
      return false;
    }

    if (filters.toDate && expense.date > filters.toDate) {
      return false;
    }

    if (filters.category !== "all" && expense.category !== filters.category) {
      return false;
    }

    if (Number.isFinite(minAmount) && expense.amount < minAmount) {
      return false;
    }

    if (Number.isFinite(maxAmount) && expense.amount > maxAmount) {
      return false;
    }

    if (filters.tag) {
      const tags = Array.isArray(expense.tags) ? expense.tags.join(" ").toLowerCase() : "";
      if (!tags.includes(filters.tag)) {
        return false;
      }
    }

    return true;
  });
}

function handleSaveFilterView() {
  if (!state.currentUser) {
    return;
  }

  syncExpenseFiltersFromForm();

  if (state.dateRange === "custom") {
    ensureCustomDateRangeValues();
  }

  const viewName = String(elements.savedViewName.value || "").trim();

  if (!viewName) {
    showFeedback(elements.filterFeedback, "Provide a name for this saved view.", "error");
    return;
  }

  const userViews = ensureCurrentUserSavedViews();

  userViews.push({
    id: createId(),
    name: viewName.slice(0, 40),
    filters: { ...state.expenseFilters },
    searchTerm: state.searchTerm,
    dateRange: state.dateRange,
    customDateRange: { ...state.customDateRange },
    createdAt: new Date().toISOString()
  });

  persistSavedViews();
  elements.savedViewName.value = "";
  renderSavedViews();
  logAudit("filters.save-view", "filters", viewName, `Saved filter view ${viewName}.`);
  showFeedback(elements.filterFeedback, `Saved view "${viewName}" created.`, "success");
}

function handleLoadFilterView() {
  if (!state.currentUser) {
    return;
  }

  const selectedId = String(elements.savedFilterViewSelect.value || "");

  if (!selectedId) {
    showFeedback(elements.filterFeedback, "Select a saved view to load.", "error");
    return;
  }

  const userViews = getCurrentUserSavedViews();
  const selectedView = userViews.find((view) => view.id === selectedId);

  if (!selectedView) {
    showFeedback(elements.filterFeedback, "Saved view not found.", "error");
    return;
  }

  state.expenseFilters = {
    ...DEFAULT_EXPENSE_FILTERS,
    ...(isPlainObject(selectedView.filters) ? selectedView.filters : {})
  };

  state.searchTerm = String(selectedView.searchTerm || "");
  state.dateRange = isSupportedDateRange(selectedView.dateRange)
    ? selectedView.dateRange
    : state.dateRange;

  if (isPlainObject(selectedView.customDateRange)) {
    state.customDateRange = {
      fromDate: String(selectedView.customDateRange.fromDate || ""),
      toDate: String(selectedView.customDateRange.toDate || "")
    };
  }

  elements.searchExpense.value = state.searchTerm;
  syncDateRangeControls();
  applyFiltersToUi();

  if (elements.advancedFilterPanel && getActiveAdvancedFilterCount() > 0) {
    elements.advancedFilterPanel.classList.remove("hidden");
  }

  refreshAdvancedFilterUi();
  renderAll();
  showFeedback(elements.filterFeedback, `Loaded view "${selectedView.name}".`, "success");
}

function handleDeleteFilterView() {
  if (!state.currentUser) {
    return;
  }

  const selectedId = String(elements.savedFilterViewSelect.value || "");

  if (!selectedId) {
    showFeedback(elements.filterFeedback, "Select a saved view to delete.", "error");
    return;
  }

  const userViews = ensureCurrentUserSavedViews();
  const selectedView = userViews.find((view) => view.id === selectedId);

  if (!selectedView) {
    showFeedback(elements.filterFeedback, "Saved view not found.", "error");
    return;
  }

  const isConfirmed = window.confirm(`Delete saved view "${selectedView.name}"?`);

  if (!isConfirmed) {
    return;
  }

  state.savedViews[state.currentUser.id] = userViews.filter((view) => view.id !== selectedId);
  persistSavedViews();
  renderSavedViews();
  showFeedback(elements.filterFeedback, `Saved view "${selectedView.name}" deleted.`, "success");
}

function renderSavedViews() {
  if (!state.currentUser || !elements.savedFilterViewSelect) {
    return;
  }

  const userViews = getCurrentUserSavedViews();

  if (userViews.length === 0) {
    elements.savedFilterViewSelect.innerHTML = '<option value="">No saved views</option>';
    return;
  }

  elements.savedFilterViewSelect.innerHTML = ['<option value="">Select saved view</option>']
    .concat(
      userViews.map((view) => `<option value="${view.id}">${escapeHtml(view.name)}</option>`)
    )
    .join("");
}

function applyFiltersToUi() {
  elements.filterFromDate.value = state.expenseFilters.fromDate || "";
  elements.filterToDate.value = state.expenseFilters.toDate || "";
  elements.filterCategory.value = state.expenseFilters.category || "all";
  elements.filterMinAmount.value = state.expenseFilters.minAmount || "";
  elements.filterMaxAmount.value = state.expenseFilters.maxAmount || "";
  elements.filterTag.value = state.expenseFilters.tag || "";
  refreshAdvancedFilterUi();
}

function handleToggleAdvancedFilters() {
  if (!elements.advancedFilterPanel) {
    return;
  }

  elements.advancedFilterPanel.classList.toggle("hidden");
  refreshAdvancedFilterUi();

  if (!elements.advancedFilterPanel.classList.contains("hidden")) {
    elements.filterFromDate.focus();
  }
}

function getActiveAdvancedFilterCount() {
  const filters = state.expenseFilters;
  let count = 0;

  if (filters.fromDate) {
    count += 1;
  }

  if (filters.toDate) {
    count += 1;
  }

  if (filters.category && filters.category !== "all") {
    count += 1;
  }

  if (filters.minAmount) {
    count += 1;
  }

  if (filters.maxAmount) {
    count += 1;
  }

  if (filters.tag) {
    count += 1;
  }

  return count;
}

function refreshAdvancedFilterUi() {
  if (!elements.toggleAdvancedFiltersBtn || !elements.advancedFilterPanel) {
    return;
  }

  const isOpen = !elements.advancedFilterPanel.classList.contains("hidden");
  const activeCount = getActiveAdvancedFilterCount();
  const countText = activeCount > 0 ? ` (${activeCount})` : "";

  elements.toggleAdvancedFiltersBtn.textContent = `${isOpen ? "Hide Filters" : "Advanced Filters"}${countText}`;
  elements.toggleAdvancedFiltersBtn.setAttribute("aria-expanded", String(isOpen));
  elements.toggleAdvancedFiltersBtn.classList.toggle("is-active-filter", activeCount > 0);
}

function getCurrentUserSavedViews() {
  if (!state.currentUser) {
    return [];
  }

  const views = state.savedViews[state.currentUser.id];
  return Array.isArray(views) ? views : [];
}

function ensureCurrentUserSavedViews() {
  if (!state.currentUser) {
    return [];
  }

  if (!Array.isArray(state.savedViews[state.currentUser.id])) {
    state.savedViews[state.currentUser.id] = [];
  }

  return state.savedViews[state.currentUser.id];
}

function hasAnyLiveSettingsPreview() {
  return Boolean(
    isPlainObject(state.liveSettingsPreview)
    && (
      isPlainObject(state.liveSettingsPreview.profile)
      || isPlainObject(state.liveSettingsPreview.preferences)
      || isPlainObject(state.liveSettingsPreview.appearance)
    )
  );
}

function clearLiveSettingsPreview() {
  if (!isPlainObject(state.liveSettingsPreview)) {
    state.liveSettingsPreview = {
      profile: null,
      preferences: null,
      appearance: null
    };
  } else {
    state.liveSettingsPreview.profile = null;
    state.liveSettingsPreview.preferences = null;
    state.liveSettingsPreview.appearance = null;
  }

  formatterCache.clear();
}

function getLiveProfilePreview() {
  return isPlainObject(state.liveSettingsPreview) && isPlainObject(state.liveSettingsPreview.profile)
    ? state.liveSettingsPreview.profile
    : null;
}

function getLivePreferencesPreview() {
  return isPlainObject(state.liveSettingsPreview) && isPlainObject(state.liveSettingsPreview.preferences)
    ? state.liveSettingsPreview.preferences
    : null;
}

function getLiveAppearancePreview() {
  return isPlainObject(state.liveSettingsPreview) && isPlainObject(state.liveSettingsPreview.appearance)
    ? state.liveSettingsPreview.appearance
    : null;
}

function normalizePreferenceSettings(rawSettings, baseSettings) {
  const source = isPlainObject(rawSettings) ? rawSettings : {};
  const base = isPlainObject(baseSettings)
    ? baseSettings
    : {
      ...DEFAULT_USER_SETTINGS,
      privacy: { ...DEFAULT_PRIVACY_SETTINGS }
    };

  const normalized = {
    currency: String(source.currency || DEFAULT_USER_SETTINGS.currency).trim().toUpperCase(),
    language: String(source.language || DEFAULT_USER_SETTINGS.language).trim().toLowerCase(),
    dateLocale: String(source.dateLocale || DEFAULT_USER_SETTINGS.dateLocale).trim(),
    timezone: String(source.timezone || DEFAULT_USER_SETTINGS.timezone).trim(),
    weekStart: String(source.weekStart || DEFAULT_USER_SETTINGS.weekStart).trim().toLowerCase(),
    defaultRange: String(source.defaultRange || DEFAULT_USER_SETTINGS.defaultRange).trim().toLowerCase(),
    privacy: base.privacy
  };

  if (!SUPPORTED_CURRENCIES.includes(normalized.currency)) {
    normalized.currency = DEFAULT_USER_SETTINGS.currency;
  }

  if (!SUPPORTED_LANGUAGES.includes(normalized.language)) {
    normalized.language = DEFAULT_USER_SETTINGS.language;
  }

  if (!SUPPORTED_DATE_LOCALES.includes(normalized.dateLocale)) {
    normalized.dateLocale = DEFAULT_USER_SETTINGS.dateLocale;
  }

  if (!SUPPORTED_TIMEZONES.includes(normalized.timezone)) {
    normalized.timezone = DEFAULT_USER_SETTINGS.timezone;
  }

  if (!SUPPORTED_WEEK_STARTS.includes(normalized.weekStart)) {
    normalized.weekStart = DEFAULT_USER_SETTINGS.weekStart;
  }

  if (!isSupportedDateRange(normalized.defaultRange)) {
    normalized.defaultRange = DEFAULT_USER_SETTINGS.defaultRange;
  }

  return normalized;
}

function normalizeAppearanceSettings(rawAppearance) {
  const source = isPlainObject(rawAppearance) ? rawAppearance : {};
  const widgets = isPlainObject(source.widgets) ? source.widgets : {};
  const appearance = {
    themeMode: String(source.themeMode || DEFAULT_APPEARANCE_SETTINGS.themeMode),
    themeColor: String(source.themeColor || DEFAULT_APPEARANCE_SETTINGS.themeColor),
    fontSize: String(source.fontSize || DEFAULT_APPEARANCE_SETTINGS.fontSize),
    widgets: {
      insights: typeof widgets.insights === "boolean"
        ? widgets.insights
        : DEFAULT_APPEARANCE_SETTINGS.widgets.insights,
      forecast: typeof widgets.forecast === "boolean"
        ? widgets.forecast
        : DEFAULT_APPEARANCE_SETTINGS.widgets.forecast,
      recent: typeof widgets.recent === "boolean"
        ? widgets.recent
        : DEFAULT_APPEARANCE_SETTINGS.widgets.recent,
      categories: typeof widgets.categories === "boolean"
        ? widgets.categories
        : DEFAULT_APPEARANCE_SETTINGS.widgets.categories
    }
  };

  if (!["dark", "light"].includes(appearance.themeMode)) {
    appearance.themeMode = DEFAULT_APPEARANCE_SETTINGS.themeMode;
  }

  if (!SUPPORTED_THEME_COLORS.includes(appearance.themeColor)) {
    appearance.themeColor = DEFAULT_APPEARANCE_SETTINGS.themeColor;
  }

  if (!["small", "medium", "large"].includes(appearance.fontSize)) {
    appearance.fontSize = DEFAULT_APPEARANCE_SETTINGS.fontSize;
  }

  return appearance;
}

function handlePreferencesLivePreviewChange() {
  if (!state.currentUser) {
    return;
  }

  const currentSettings = getCurrentUserSettings();
  const previewSettings = normalizePreferenceSettings(
    {
      currency: elements.settingCurrency ? elements.settingCurrency.value : currentSettings.currency,
      language: elements.settingLanguage ? elements.settingLanguage.value : currentSettings.language,
      dateLocale: elements.settingDateFormat ? elements.settingDateFormat.value : currentSettings.dateLocale,
      timezone: elements.settingTimezone ? elements.settingTimezone.value : currentSettings.timezone,
      weekStart: elements.settingWeekStart ? elements.settingWeekStart.value : currentSettings.weekStart,
      defaultRange: elements.settingDefaultRange ? elements.settingDefaultRange.value : currentSettings.defaultRange
    },
    currentSettings
  );

  state.liveSettingsPreview.preferences = {
    currency: previewSettings.currency,
    language: previewSettings.language,
    dateLocale: previewSettings.dateLocale,
    timezone: previewSettings.timezone,
    weekStart: previewSettings.weekStart,
    defaultRange: previewSettings.defaultRange
  };

  formatterCache.clear();
  state.dateRange = previewSettings.defaultRange;
  syncDateRangeControls();
  renderAll();
  applyLanguageSettings();
}

function handleAppearanceLivePreviewChange() {
  if (!state.currentUser) {
    return;
  }

  const previewAppearance = normalizeAppearanceSettings({
    themeMode: elements.settingThemeMode ? elements.settingThemeMode.value : DEFAULT_APPEARANCE_SETTINGS.themeMode,
    themeColor: elements.settingThemeColor ? elements.settingThemeColor.value : DEFAULT_APPEARANCE_SETTINGS.themeColor,
    fontSize: elements.settingFontSize ? elements.settingFontSize.value : DEFAULT_APPEARANCE_SETTINGS.fontSize,
    widgets: {
      insights: Boolean(elements.settingWidgetInsights && elements.settingWidgetInsights.checked),
      forecast: Boolean(elements.settingWidgetForecast && elements.settingWidgetForecast.checked),
      recent: Boolean(elements.settingWidgetRecent && elements.settingWidgetRecent.checked),
      categories: Boolean(elements.settingWidgetCategories && elements.settingWidgetCategories.checked)
    }
  });

  state.liveSettingsPreview.appearance = previewAppearance;
  applyAppearanceSettings();
  renderAll();
}

function buildProfilePreviewFromInputs() {
  const existingPreview = getLiveProfilePreview();
  const basePictureData = existingPreview && typeof existingPreview.pictureDataUrl === "string"
    ? existingPreview.pictureDataUrl
    : String((state.currentUser && state.currentUser.profilePictureDataUrl) || "");
  const basePictureName = existingPreview && typeof existingPreview.pictureName === "string"
    ? existingPreview.pictureName
    : String((state.currentUser && state.currentUser.profilePictureName) || "");

  return {
    name: String(elements.settingProfileName ? elements.settingProfileName.value : (state.currentUser && state.currentUser.name) || ""),
    email: String(elements.settingProfileEmail ? elements.settingProfileEmail.value : (state.currentUser && state.currentUser.email) || ""),
    removePicture: Boolean(elements.settingRemoveProfilePicture && elements.settingRemoveProfilePicture.checked),
    pictureDataUrl: basePictureData,
    pictureName: basePictureName
  };
}

function applyProfileLivePreviewVisuals() {
  if (!state.currentUser) {
    return;
  }

  const preview = getLiveProfilePreview();

  if (!preview || preview.removePicture) {
    updateProfilePicturePreview("", "");
  } else {
    const pictureData = String(preview.pictureDataUrl || state.currentUser.profilePictureDataUrl || "");
    const pictureName = String(preview.pictureName || state.currentUser.profilePictureName || "");
    updateProfilePicturePreview(pictureData, pictureName);
  }

  renderWelcomeText();
}

function handleProfileLivePreviewInputChange() {
  if (!state.currentUser) {
    return;
  }

  state.liveSettingsPreview.profile = buildProfilePreviewFromInputs();
  applyProfileLivePreviewVisuals();
}

async function handleProfilePicturePreviewChange() {
  if (!state.currentUser) {
    return;
  }

  const pictureResult = await readProfilePictureInput();

  if (pictureResult.error) {
    showFeedback(elements.profileSettingsFeedback, pictureResult.error, "error");
    if (elements.settingProfilePicture) {
      elements.settingProfilePicture.value = "";
    }
    return;
  }

  const preview = buildProfilePreviewFromInputs();

  if (pictureResult.dataUrl) {
    preview.pictureDataUrl = pictureResult.dataUrl;
    preview.pictureName = pictureResult.name;
  }

  state.liveSettingsPreview.profile = preview;
  showFeedback(elements.profileSettingsFeedback, "");
  applyProfileLivePreviewVisuals();
}

function renderSettingsView() {
  if (!state.currentUser) {
    return;
  }

  const settings = getCurrentUserSettings();
  const privacy = getCurrentUserPrivacySettings();
  const appearance = getCurrentUserAppearanceSettings();
  const profilePreview = getLiveProfilePreview();

  if (elements.settingProfileName) {
    elements.settingProfileName.value = profilePreview
      ? String(profilePreview.name || "")
      : (state.currentUser.name || "");
  }
  if (elements.settingProfileEmail) {
    elements.settingProfileEmail.value = profilePreview
      ? String(profilePreview.email || "")
      : (state.currentUser.email || "");
  }
  if (elements.settingRemoveProfilePicture) {
    elements.settingRemoveProfilePicture.checked = Boolean(profilePreview && profilePreview.removePicture);
  }

  if (profilePreview && profilePreview.removePicture) {
    updateProfilePicturePreview("", "");
  } else {
    const pictureData = profilePreview
      ? String(profilePreview.pictureDataUrl || state.currentUser.profilePictureDataUrl || "")
      : String(state.currentUser.profilePictureDataUrl || "");
    const pictureName = profilePreview
      ? String(profilePreview.pictureName || state.currentUser.profilePictureName || "")
      : String(state.currentUser.profilePictureName || "");
    updateProfilePicturePreview(pictureData, pictureName);
  }

  if (elements.settingCurrency) {
    elements.settingCurrency.value = settings.currency;
  }
  if (elements.settingLanguage) {
    elements.settingLanguage.value = settings.language;
  }
  if (elements.settingDateFormat) {
    elements.settingDateFormat.value = settings.dateLocale;
  }
  if (elements.settingTimezone) {
    elements.settingTimezone.value = settings.timezone;
  }
  if (elements.settingWeekStart) {
    elements.settingWeekStart.value = settings.weekStart;
  }
  if (elements.settingDefaultRange) {
    elements.settingDefaultRange.value = settings.defaultRange;
  }

  if (elements.settingAppLockEnabled) {
    elements.settingAppLockEnabled.checked = privacy.appLockEnabled;
  }
  if (elements.settingAppLockPin) {
    elements.settingAppLockPin.value = "";
  }
  if (elements.settingAppLockPinConfirm) {
    elements.settingAppLockPinConfirm.value = "";
  }
  if (elements.settingBiometricEnabled) {
    elements.settingBiometricEnabled.checked = privacy.biometricEnabled;
  }
  if (elements.settingTwoFactorEnabled) {
    elements.settingTwoFactorEnabled.checked = privacy.twoFactorEnabled;
  }
  if (elements.settingPermissionNotifications) {
    elements.settingPermissionNotifications.checked = privacy.permissions.notifications;
  }
  if (elements.settingPermissionAnalytics) {
    elements.settingPermissionAnalytics.checked = privacy.permissions.analytics;
  }
  if (elements.settingPermissionSupport) {
    elements.settingPermissionSupport.checked = privacy.permissions.supportContact;
  }
  if (elements.settingPermissionExport) {
    elements.settingPermissionExport.checked = privacy.permissions.dataExport;
  }

  if (elements.settingThemeMode) {
    elements.settingThemeMode.value = appearance.themeMode;
  }
  if (elements.settingThemeColor) {
    elements.settingThemeColor.value = appearance.themeColor;
  }
  if (elements.settingFontSize) {
    elements.settingFontSize.value = appearance.fontSize;
  }
  if (elements.settingWidgetInsights) {
    elements.settingWidgetInsights.checked = appearance.widgets.insights;
  }
  if (elements.settingWidgetForecast) {
    elements.settingWidgetForecast.checked = appearance.widgets.forecast;
  }
  if (elements.settingWidgetRecent) {
    elements.settingWidgetRecent.checked = appearance.widgets.recent;
  }
  if (elements.settingWidgetCategories) {
    elements.settingWidgetCategories.checked = appearance.widgets.categories;
  }
}

function getCurrentUserRecord() {
  if (!state.currentUser) {
    return null;
  }

  return state.users.find((user) => user.id === state.currentUser.id) || null;
}

async function handleProfileSettingsSubmit(event) {
  event.preventDefault();

  if (!state.currentUser) {
    return;
  }

  const user = getCurrentUserRecord();
  if (!user) {
    showFeedback(elements.profileSettingsFeedback, "Unable to find account details.", "error");
    return;
  }

  const fullName = String(elements.settingProfileName ? elements.settingProfileName.value : "").trim();
  const email = String(elements.settingProfileEmail ? elements.settingProfileEmail.value : "").trim().toLowerCase();

  if (!fullName || fullName.length < 2) {
    showFeedback(elements.profileSettingsFeedback, "Name must be at least 2 characters.", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showFeedback(elements.profileSettingsFeedback, "Please enter a valid email address.", "error");
    return;
  }

  const duplicateEmailOwner = state.users.find((entry) => entry.email === email && entry.id !== user.id);
  if (duplicateEmailOwner) {
    showFeedback(elements.profileSettingsFeedback, "This email is already used by another account.", "error");
    return;
  }

  const pictureResult = await readProfilePictureInput();
  if (pictureResult.error) {
    showFeedback(elements.profileSettingsFeedback, pictureResult.error, "error");
    return;
  }

  user.name = fullName.slice(0, 80);
  user.email = email;
  user.updatedAt = new Date().toISOString();

  if (elements.settingRemoveProfilePicture && elements.settingRemoveProfilePicture.checked) {
    delete user.profilePictureDataUrl;
    delete user.profilePictureName;
  } else if (pictureResult.dataUrl) {
    user.profilePictureDataUrl = pictureResult.dataUrl;
    user.profilePictureName = pictureResult.name;
  }

  state.currentUser.name = user.name;
  state.currentUser.email = user.email;
  state.currentUser.profilePictureDataUrl = user.profilePictureDataUrl;
  state.currentUser.profilePictureName = user.profilePictureName;
  state.liveSettingsPreview.profile = null;

  persistUsers();
  writeStorage(STORAGE_KEYS.currentUser, state.currentUser);
  if (elements.settingProfilePicture) {
    elements.settingProfilePicture.value = "";
  }
  if (elements.settingRemoveProfilePicture) {
    elements.settingRemoveProfilePicture.checked = false;
  }
  renderWelcomeText();
  renderAll();
  logAudit("profile.update", "profile", user.id, "Updated profile details.");
  showFeedback(elements.profileSettingsFeedback, "Profile updated successfully.", "success");
}

function handlePreferencesSettingsSubmit(event) {
  event.preventDefault();

  if (!state.currentUser) {
    return;
  }

  const existingSettings = getCurrentUserSettings();
  const settings = normalizePreferenceSettings(
    {
      currency: elements.settingCurrency ? elements.settingCurrency.value : DEFAULT_USER_SETTINGS.currency,
      language: elements.settingLanguage ? elements.settingLanguage.value : DEFAULT_USER_SETTINGS.language,
      dateLocale: elements.settingDateFormat ? elements.settingDateFormat.value : DEFAULT_USER_SETTINGS.dateLocale,
      timezone: elements.settingTimezone ? elements.settingTimezone.value : DEFAULT_USER_SETTINGS.timezone,
      weekStart: elements.settingWeekStart ? elements.settingWeekStart.value : DEFAULT_USER_SETTINGS.weekStart,
      defaultRange: elements.settingDefaultRange ? elements.settingDefaultRange.value : DEFAULT_USER_SETTINGS.defaultRange
    },
    existingSettings
  );

  state.userPreferences[state.currentUser.id] = settings;
  state.liveSettingsPreview.preferences = null;
  persistUserPreferences();
  formatterCache.clear();

  state.dateRange = settings.defaultRange;
  syncDateRangeControls();

  renderAll();
  applyLanguageSettings();
  logAudit("preferences.update", "settings", state.currentUser.id, "Updated app preferences.");
  showFeedback(elements.preferencesSettingsFeedback, "Preferences saved.", "success");
}

async function handlePrivacySecuritySubmit(event) {
  event.preventDefault();

  if (!state.currentUser) {
    return;
  }

  const currentSettings = getCurrentUserSettings();
  const appLockEnabled = Boolean(elements.settingAppLockEnabled && elements.settingAppLockEnabled.checked);
  const pin = String(elements.settingAppLockPin ? elements.settingAppLockPin.value : "").trim();
  const pinConfirm = String(elements.settingAppLockPinConfirm ? elements.settingAppLockPinConfirm.value : "").trim();

  const privacy = {
    appLockEnabled,
    appLockPinHash: currentSettings.privacy.appLockPinHash,
    biometricEnabled: Boolean(elements.settingBiometricEnabled && elements.settingBiometricEnabled.checked),
    twoFactorEnabled: Boolean(elements.settingTwoFactorEnabled && elements.settingTwoFactorEnabled.checked),
    permissions: {
      notifications: Boolean(elements.settingPermissionNotifications && elements.settingPermissionNotifications.checked),
      analytics: Boolean(elements.settingPermissionAnalytics && elements.settingPermissionAnalytics.checked),
      supportContact: Boolean(elements.settingPermissionSupport && elements.settingPermissionSupport.checked),
      dataExport: Boolean(elements.settingPermissionExport && elements.settingPermissionExport.checked)
    }
  };

  if (pin || pinConfirm) {
    if (!/^\d{4,8}$/.test(pin)) {
      showFeedback(elements.privacySecurityFeedback, "PIN must be 4 to 8 digits.", "error");
      return;
    }

    if (pin !== pinConfirm) {
      showFeedback(elements.privacySecurityFeedback, "PIN and confirm PIN do not match.", "error");
      return;
    }

    privacy.appLockPinHash = await hashPassword(`pin:${pin}`);
    privacy.appLockEnabled = true;
  }

  if (privacy.appLockEnabled && !privacy.appLockPinHash) {
    showFeedback(elements.privacySecurityFeedback, "Set a PIN before enabling app lock.", "error");
    return;
  }

  state.userPreferences[state.currentUser.id] = {
    ...currentSettings,
    privacy
  };

  persistUserPreferences();
  renderSettingsView();
  logAudit("settings.privacy", "settings", state.currentUser.id, "Updated privacy and security settings.");
  showFeedback(elements.privacySecurityFeedback, "Privacy and security settings saved.", "success");
}

function handleClearPin() {
  if (!state.currentUser) {
    return;
  }

  const currentSettings = getCurrentUserSettings();
  const privacy = {
    ...currentSettings.privacy,
    appLockEnabled: false,
    appLockPinHash: ""
  };

  state.userPreferences[state.currentUser.id] = {
    ...currentSettings,
    privacy
  };

  persistUserPreferences();

  if (elements.settingAppLockPin) {
    elements.settingAppLockPin.value = "";
  }
  if (elements.settingAppLockPinConfirm) {
    elements.settingAppLockPinConfirm.value = "";
  }

  renderSettingsView();
  showFeedback(elements.privacySecurityFeedback, "PIN removed and app lock disabled.", "success");
}

function handleAppearanceSettingsSubmit(event) {
  event.preventDefault();

  if (!state.currentUser) {
    return;
  }

  const appearance = normalizeAppearanceSettings({
    themeMode: elements.settingThemeMode ? elements.settingThemeMode.value : DEFAULT_APPEARANCE_SETTINGS.themeMode,
    themeColor: elements.settingThemeColor ? elements.settingThemeColor.value : DEFAULT_APPEARANCE_SETTINGS.themeColor,
    fontSize: elements.settingFontSize ? elements.settingFontSize.value : DEFAULT_APPEARANCE_SETTINGS.fontSize,
    widgets: {
      insights: Boolean(elements.settingWidgetInsights && elements.settingWidgetInsights.checked),
      forecast: Boolean(elements.settingWidgetForecast && elements.settingWidgetForecast.checked),
      recent: Boolean(elements.settingWidgetRecent && elements.settingWidgetRecent.checked),
      categories: Boolean(elements.settingWidgetCategories && elements.settingWidgetCategories.checked)
    }
  });

  state.appearanceSettings[state.currentUser.id] = appearance;
  state.liveSettingsPreview.appearance = null;
  persistAppearanceSettings();
  applyAppearanceSettings();
  renderAll();
  logAudit("settings.appearance", "settings", state.currentUser.id, "Updated appearance settings.");
  showFeedback(elements.appearanceSettingsFeedback, "Appearance preferences saved.", "success");
}

async function handleFeedbackSubmit(event) {
  event.preventDefault();

  if (!state.currentUser) {
    return;
  }

  const topic = String(elements.feedbackTopic ? elements.feedbackTopic.value : "general");
  const message = String(elements.feedbackMessage ? elements.feedbackMessage.value : "").trim();

  if (!message) {
    showFeedback(elements.feedbackSubmitFeedback, "Feedback message cannot be empty.", "error");
    return;
  }

  const payload = {
    id: createId(),
    userId: state.currentUser.id,
    userEmail: state.currentUser.email,
    topic,
    message: message.slice(0, 500),
    submittedAt: new Date().toISOString()
  };

  const synced = await pushToFirebasePath(`feedback/${state.currentUser.id}`, payload);
  queueSupportItem("feedback", payload);

  if (elements.feedbackForm) {
    elements.feedbackForm.reset();
  }

  logAudit("support.feedback", "support", payload.id, `Submitted feedback topic ${topic}.`);

  showFeedback(
    elements.feedbackSubmitFeedback,
    synced ? "Feedback submitted." : "Feedback saved locally (Firebase unavailable).",
    "success"
  );
}

async function handleBugReportSubmit(event) {
  event.preventDefault();

  if (!state.currentUser) {
    return;
  }

  const severity = String(elements.bugSeverity ? elements.bugSeverity.value : "medium");
  const message = String(elements.bugMessage ? elements.bugMessage.value : "").trim();

  if (!message) {
    showFeedback(elements.bugReportFeedback, "Bug details cannot be empty.", "error");
    return;
  }

  const payload = {
    id: createId(),
    userId: state.currentUser.id,
    userEmail: state.currentUser.email,
    severity,
    message: message.slice(0, 700),
    submittedAt: new Date().toISOString()
  };

  const synced = await pushToFirebasePath(`bugReports/${state.currentUser.id}`, payload);
  queueSupportItem("bugReports", payload);

  if (elements.bugReportForm) {
    elements.bugReportForm.reset();
  }

  logAudit("support.bug", "support", payload.id, `Submitted ${severity} bug report.`);

  showFeedback(
    elements.bugReportFeedback,
    synced ? "Bug report submitted." : "Bug report saved locally (Firebase unavailable).",
    "success"
  );
}

async function handleDeleteAccountData() {
  if (!state.currentUser) {
    return;
  }

  const isConfirmed = window.confirm("Delete your account data from this app? This cannot be undone.");

  if (!isConfirmed) {
    return;
  }

  const userId = state.currentUser.id;
  const email = state.currentUser.email;

  const deletionRequest = {
    id: createId(),
    userId,
    userEmail: email,
    requestedAt: new Date().toISOString()
  };

  const firebaseCleared = await removeFirebasePath(`users/${userId}`);
  queueSupportItem("deletionRequests", {
    ...deletionRequest,
    firebaseCleared
  });

  state.users = state.users.filter((user) => user.id !== userId);
  state.expenses = state.expenses.filter((expense) => expense.userId !== userId);
  state.billReminders = state.billReminders.filter((reminder) => reminder.userId !== userId);
  state.auditLogs = state.auditLogs.filter((entry) => entry.actorId !== userId);

  delete state.budgets[userId];
  delete state.categoryBudgets[userId];
  delete state.customCategories[userId];
  delete state.savedViews[userId];
  delete state.userPreferences[userId];
  delete state.appearanceSettings[userId];

  persistUsers();
  persistExpenses();
  persistBillReminders();
  persistAuditLogs();
  persistBudgets();
  persistCategoryBudgets();
  persistCustomCategories();
  persistSavedViews();
  persistUserPreferences();
  persistAppearanceSettings();

  state.currentUser = null;
  writeStorage(STORAGE_KEYS.currentUser, null);

  showAuth();
  showFeedback(
    elements.authFeedback,
    firebaseCleared
      ? "Account data deleted and Firebase user node cleared."
      : "Account data deleted locally; Firebase node will clear when bridge is available.",
    "success"
  );
}

async function handlePasswordSettingsSubmit(event) {
  event.preventDefault();

  if (!state.currentUser) {
    return;
  }

  const user = getCurrentUserRecord();
  if (!user) {
    showFeedback(elements.passwordSettingsFeedback, "Unable to find account details.", "error");
    return;
  }

  const currentPassword = String(elements.settingCurrentPassword ? elements.settingCurrentPassword.value : "");
  const newPassword = String(elements.settingNewPassword ? elements.settingNewPassword.value : "");
  const confirmPassword = String(elements.settingConfirmPassword ? elements.settingConfirmPassword.value : "");

  if (!currentPassword || !newPassword || !confirmPassword) {
    showFeedback(elements.passwordSettingsFeedback, "Please complete all password fields.", "error");
    return;
  }

  if (newPassword !== confirmPassword) {
    showFeedback(elements.passwordSettingsFeedback, "New password and confirm password do not match.", "error");
    return;
  }

  if (!isStrongPassword(newPassword)) {
    showFeedback(elements.passwordSettingsFeedback, "New password must be at least 8 chars with letters and numbers.", "error");
    return;
  }

  if (newPassword === currentPassword) {
    showFeedback(elements.passwordSettingsFeedback, "New password must be different from current password.", "error");
    return;
  }

  const currentHash = await hashPassword(currentPassword);
  if (currentHash !== user.passwordHash) {
    showFeedback(elements.passwordSettingsFeedback, "Current password is incorrect.", "error");
    return;
  }

  user.passwordHash = await hashPassword(newPassword);
  user.updatedAt = new Date().toISOString();
  persistUsers();

  if (elements.passwordSettingsForm) {
    elements.passwordSettingsForm.reset();
  }

  logAudit("profile.password-change", "profile", user.id, "Changed account password.");
  showFeedback(elements.passwordSettingsFeedback, "Password updated successfully.", "success");
}

function handleBackupExport() {
  if (!state.currentUser) {
    return;
  }

  const payload = {
    version: APP_BACKUP_VERSION,
    exportedAt: new Date().toISOString(),
    data: {
      users: state.users,
      expenses: state.expenses,
      currentUser: state.currentUser,
      budgets: state.budgets,
      categoryBudgets: state.categoryBudgets,
      customCategories: state.customCategories,
      savedViews: state.savedViews,
      billReminders: state.billReminders,
      auditLogs: state.auditLogs,
      userPreferences: state.userPreferences,
      appearanceSettings: state.appearanceSettings,
      supportQueue: state.supportQueue
    }
  };

  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  const stamp = formatDateKey(new Date());

  anchor.href = url;
  anchor.download = `expense-backup-v${APP_BACKUP_VERSION}-${stamp}.json`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);

  logAudit("backup.export", "backup", stamp, "Exported full backup.");
  showFeedback(elements.backupFeedback, "Backup exported successfully.", "success");
}

async function handleBackupImport(event) {
  const file = event.target.files && event.target.files[0];

  if (!file) {
    return;
  }

  try {
    const rawText = await file.text();
    const payload = JSON.parse(rawText);

    const validation = validateBackupPayload(payload);
    if (!validation.ok) {
      showFeedback(elements.backupFeedback, validation.message, "error");
      return;
    }

    const data = payload.data;

    writeStorage(STORAGE_KEYS.users, data.users);
    writeStorage(STORAGE_KEYS.expenses, data.expenses);
    writeStorage(STORAGE_KEYS.currentUser, data.currentUser || null);
    writeStorage(STORAGE_KEYS.budgets, data.budgets);
    writeStorage(STORAGE_KEYS.categoryBudgets, data.categoryBudgets);
    writeStorage(STORAGE_KEYS.customCategories, data.customCategories);
    writeStorage(STORAGE_KEYS.savedViews, data.savedViews);
    writeStorage(STORAGE_KEYS.billReminders, Array.isArray(data.billReminders) ? data.billReminders : []);
    writeStorage(STORAGE_KEYS.auditLogs, data.auditLogs);
    writeStorage(STORAGE_KEYS.userPreferences, isPlainObject(data.userPreferences) ? data.userPreferences : {});
    writeStorage(STORAGE_KEYS.appearanceSettings, isPlainObject(data.appearanceSettings) ? data.appearanceSettings : {});
    writeStorage(STORAGE_KEYS.supportQueue, isPlainObject(data.supportQueue) ? data.supportQueue : { ...DEFAULT_SUPPORT_QUEUE });

    dismissUndoAction();
    loadState();
    formatterCache.clear();

    if (state.currentUser) {
      showApp();
      showFeedback(elements.backupFeedback, "Backup restored successfully.", "success");
      logAudit("backup.restore", "backup", file.name, "Restored backup JSON.");
    } else {
      showAuth();
      showFeedback(elements.authFeedback, "Backup restored. Please login.", "success");
    }
  } catch (error) {
    console.error(error);
    showFeedback(elements.backupFeedback, "Restore failed: invalid backup file.", "error");
  } finally {
    elements.backupImportInput.value = "";
  }
}

function validateBackupPayload(payload) {
  if (!payload || typeof payload !== "object") {
    return { ok: false, message: "Invalid backup format." };
  }

  if (payload.version !== APP_BACKUP_VERSION) {
    return { ok: false, message: `Unsupported backup version. Expected v${APP_BACKUP_VERSION}.` };
  }

  if (!payload.data || typeof payload.data !== "object") {
    return { ok: false, message: "Backup data section is missing." };
  }

  const requiredKeys = [
    "users",
    "expenses",
    "budgets",
    "categoryBudgets",
    "customCategories",
    "savedViews",
    "auditLogs",
    "appearanceSettings",
    "supportQueue"
  ];

  for (const key of requiredKeys) {
    if (!(key in payload.data)) {
      return { ok: false, message: `Backup is missing ${key}.` };
    }
  }

  if (!Array.isArray(payload.data.users) || !Array.isArray(payload.data.expenses)) {
    return { ok: false, message: "Backup array sections are malformed." };
  }

  if ("billReminders" in payload.data && !Array.isArray(payload.data.billReminders)) {
    return { ok: false, message: "Backup bill reminders section is malformed." };
  }

  if ("userPreferences" in payload.data && !isPlainObject(payload.data.userPreferences)) {
    return { ok: false, message: "Backup user preferences section is malformed." };
  }

  if ("appearanceSettings" in payload.data && !isPlainObject(payload.data.appearanceSettings)) {
    return { ok: false, message: "Backup appearance settings section is malformed." };
  }

  if ("supportQueue" in payload.data && !isPlainObject(payload.data.supportQueue)) {
    return { ok: false, message: "Backup support queue section is malformed." };
  }

  if (!Array.isArray(payload.data.auditLogs) || !isPlainObject(payload.data.budgets) || !isPlainObject(payload.data.categoryBudgets)) {
    return { ok: false, message: "Backup object sections are malformed." };
  }

  return { ok: true };
}

function renderAuditTables() {
  renderAdminAuditTable();
  renderUserAuditTable();
}

function renderAdminAuditTable() {
  if (!elements.auditLogBody) {
    return;
  }

  const logs = state.currentUser && state.currentUser.role === "admin"
    ? state.auditLogs.slice(0, 80)
    : [];

  if (logs.length === 0) {
    elements.auditLogBody.innerHTML = '<tr><td colspan="5" class="empty">No audit activity yet.</td></tr>';
    return;
  }

  elements.auditLogBody.innerHTML = logs
    .map((log) => {
      return `<tr>
        <td>${formatDateTime(log.at)}</td>
        <td>${escapeHtml(log.actorEmail || "-")}</td>
        <td>${escapeHtml(log.action)}</td>
        <td>${escapeHtml(`${log.targetType}:${log.targetId}`)}</td>
        <td>${escapeHtml(log.details || "-")}</td>
      </tr>`;
    })
    .join("");
}

function renderUserAuditTable() {
  if (!elements.userAuditBody || !state.currentUser) {
    return;
  }

  const logs = state.auditLogs
    .filter((log) => log.actorId === state.currentUser.id)
    .slice(0, 50);

  if (logs.length === 0) {
    elements.userAuditBody.innerHTML = '<tr><td colspan="4" class="empty">No personal audit activity yet.</td></tr>';
    return;
  }

  elements.userAuditBody.innerHTML = logs
    .map((log) => {
      return `<tr>
        <td>${formatDateTime(log.at)}</td>
        <td>${escapeHtml(log.action)}</td>
        <td>${escapeHtml(`${log.targetType}:${log.targetId}`)}</td>
        <td>${escapeHtml(log.details || "-")}</td>
      </tr>`;
    })
    .join("");
}

function logAudit(action, targetType, targetId, details) {
  if (!state.currentUser) {
    return;
  }

  const entry = {
    id: createId(),
    actorId: state.currentUser.id,
    actorEmail: state.currentUser.email,
    action,
    targetType,
    targetId: String(targetId || "-"),
    details: String(details || ""),
    at: new Date().toISOString()
  };

  state.auditLogs.unshift(entry);

  if (state.auditLogs.length > 1000) {
    state.auditLogs = state.auditLogs.slice(0, 1000);
  }

  persistAuditLogs();
}

function setUndoAction(payload, message) {
  state.undoAction = {
    payload,
    message,
    expiresAt: Date.now() + 20000
  };

  if (state.undoTimerId) {
    clearTimeout(state.undoTimerId);
  }

  state.undoTimerId = window.setTimeout(() => {
    dismissUndoAction();
  }, 20000);

  renderUndoBanner();
}

function handleUndoAction() {
  if (!state.undoAction || !state.currentUser) {
    return;
  }

  const payload = state.undoAction.payload;

  if (!payload || !payload.type) {
    dismissUndoAction();
    return;
  }

  if (payload.type === "restore-expense" && payload.expense) {
    const existingIndex = state.expenses.findIndex((entry) => entry.id === payload.expense.id);

    if (existingIndex >= 0) {
      state.expenses[existingIndex] = { ...payload.expense };
    } else {
      state.expenses.push({ ...payload.expense });
    }

    persistExpenses();
    logAudit("undo.expense", "expense", payload.expense.id, "Undo restored expense state.");
  }

  if (payload.type === "restore-budget") {
    state.budgets[state.currentUser.id] = Number(payload.amount || 0);
    persistBudgets();
    logAudit("undo.budget", "budget", state.currentUser.id, "Undo restored monthly budget.");
  }

  if (payload.type === "restore-category-budget") {
    const budgetMap = ensureCurrentUserCategoryBudgetMap();
    budgetMap[payload.category] = Number(payload.amount || 0);
    persistCategoryBudgets();
    logAudit("undo.category-budget", "category-budget", payload.category, "Undo restored category budget.");
  }

  dismissUndoAction();
  renderAll();
}

function dismissUndoAction() {
  state.undoAction = null;

  if (state.undoTimerId) {
    clearTimeout(state.undoTimerId);
    state.undoTimerId = null;
  }

  renderUndoBanner();
}

function renderUndoBanner() {
  if (!elements.undoBanner || !elements.undoMessage) {
    return;
  }

  if (!state.undoAction || Date.now() > state.undoAction.expiresAt) {
    elements.undoBanner.classList.add("hidden");
    return;
  }

  elements.undoMessage.textContent = state.undoAction.message || "Last action can be undone.";
  elements.undoBanner.classList.remove("hidden");
}

function assertMonthEditable(dateString, feedbackTarget, operationLabel) {
  return Boolean(state.currentUser);
}

function findPotentialDuplicate(candidate) {
  if (!state.currentUser) {
    return null;
  }

  const targetTags = Array.isArray(candidate.tags) ? candidate.tags.map((tag) => tag.toLowerCase()) : [];

  return getCurrentUserExpenses().find((expense) => {
    if (expense.date !== candidate.date) {
      return false;
    }

    if (expense.category !== candidate.category) {
      return false;
    }

    if (Number(expense.amount) !== Number(candidate.amount.toFixed(2))) {
      return false;
    }

    const existingDesc = String(expense.description || "").trim().toLowerCase();
    const newDesc = String(candidate.description || "").trim().toLowerCase();

    if (existingDesc && newDesc && existingDesc !== newDesc) {
      return false;
    }

    const existingTags = Array.isArray(expense.tags) ? expense.tags.map((tag) => tag.toLowerCase()) : [];
    return existingTags.join("|") === targetTags.join("|");
  }) || null;
}

function parseTagInput(value) {
  const seen = new Set();
  const tags = [];

  for (const token of String(value || "").split(",")) {
    const clean = token.trim().replaceAll(/\s+/g, " ").slice(0, 20);

    if (!clean) {
      continue;
    }

    const key = clean.toLowerCase();

    if (seen.has(key)) {
      continue;
    }

    seen.add(key);
    tags.push(clean);

    if (tags.length >= 8) {
      break;
    }
  }

  return tags;
}

async function readReceiptInput() {
  const file = elements.expenseReceipt.files && elements.expenseReceipt.files[0];

  if (!file) {
    return { dataUrl: "" };
  }

  const allowedTypes = ["application/pdf"];
  const isImage = file.type.startsWith("image/");

  if (!isImage && !allowedTypes.includes(file.type)) {
    return { error: "Receipt must be an image or PDF file." };
  }

  if (file.size > 1_500_000) {
    return { error: "Receipt file is too large. Keep it under 1.5 MB." };
  }

  const dataUrl = await fileToDataUrl(file);

  return {
    name: file.name,
    mimeType: file.type || "application/octet-stream",
    dataUrl
  };
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(String(reader.result || ""));
    };

    reader.onerror = () => {
      reject(new Error("Failed to read file."));
    };

    reader.readAsDataURL(file);
  });
}

function downloadExpenseReceipt(expense) {
  if (!expense || !expense.receiptDataUrl) {
    return;
  }

  const anchor = document.createElement("a");
  anchor.href = expense.receiptDataUrl;
  anchor.download = expense.receiptName || `receipt-${expense.id}`;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

function resolveRecurringDate(year, monthIndex, dayOfMonth) {
  const date = new Date(year, monthIndex, 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const safeDay = Math.min(Math.max(1, Number(dayOfMonth) || 1), lastDay);
  return new Date(date.getFullYear(), date.getMonth(), safeDay);
}

function parseDateInput(value) {
  const parsed = new Date(`${String(value)}T00:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatDateKey(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function monthKeyFromDate(dateValue) {
  const date = dateValue instanceof Date ? dateValue : new Date(dateValue);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function shiftMonthKey(monthKey, monthDelta) {
  const parsed = parseDateInput(`${monthKey}-01`);

  if (!parsed) {
    return monthKey;
  }

  parsed.setMonth(parsed.getMonth() + monthDelta);
  return monthKeyFromDate(parsed);
}

function getCurrentUserBudget() {
  if (!state.currentUser) {
    return 0;
  }

  const budget = Number(state.budgets[state.currentUser.id]);
  return Number.isFinite(budget) && budget > 0 ? budget : 0;
}

function getDateFilteredExpenses(expenses) {
  if (state.dateRange === "all") {
    return expenses;
  }

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  if (state.dateRange === "month") {
    const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return filterExpensesByDateWindow(expenses, startDate, endDate);
  }

  if (state.dateRange === "last30") {
    const startDate = addDays(now, -29);
    return filterExpensesByDateWindow(expenses, startDate, now);
  }

  if (state.dateRange === "last7") {
    const startDate = addDays(now, -6);
    return filterExpensesByDateWindow(expenses, startDate, now);
  }

  if (state.dateRange === "last1") {
    return filterExpensesByDateWindow(expenses, now, now);
  }

  if (state.dateRange === "yearly") {
    const startDate = new Date(now.getFullYear(), 0, 1);
    const endDate = new Date(now.getFullYear(), 11, 31);
    return filterExpensesByDateWindow(expenses, startDate, endDate);
  }

  if (state.dateRange === "custom") {
    const { fromDate, toDate } = ensureCustomDateRangeValues();
    const startDate = parseDateInput(fromDate);
    const endDate = parseDateInput(toDate);

    if (!startDate || !endDate) {
      return expenses;
    }

    return filterExpensesByDateWindow(expenses, startDate, endDate);
  }

  return expenses;
}

function getSearchFilteredExpenses(expenses) {
  const search = state.searchTerm.toLowerCase();

  if (!search) {
    return expenses;
  }

  return expenses.filter((expense) => {
    const tags = Array.isArray(expense.tags) ? expense.tags.join(" ") : "";
    const combined = `${expense.category} ${expense.date} ${expense.amount} ${expense.description} ${tags}`.toLowerCase();
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
    return String(b.updatedAt || "").localeCompare(String(a.updatedAt || ""));
  }

  return b.date.localeCompare(a.date);
}

function persistUsers() {
  writeStorage(STORAGE_KEYS.users, state.users);
}

function persistExpenses() {
  writeStorage(STORAGE_KEYS.expenses, state.expenses);
}

function persistBudgets() {
  writeStorage(STORAGE_KEYS.budgets, state.budgets);
}

function persistCategoryBudgets() {
  writeStorage(STORAGE_KEYS.categoryBudgets, state.categoryBudgets);
}

function persistCustomCategories() {
  writeStorage(STORAGE_KEYS.customCategories, state.customCategories);
}

function persistSavedViews() {
  writeStorage(STORAGE_KEYS.savedViews, state.savedViews);
}

function persistBillReminders() {
  writeStorage(STORAGE_KEYS.billReminders, state.billReminders);
}

function persistAuditLogs() {
  writeStorage(STORAGE_KEYS.auditLogs, state.auditLogs);
}

function persistUserPreferences() {
  writeStorage(STORAGE_KEYS.userPreferences, state.userPreferences);
}

function persistAppearanceSettings() {
  writeStorage(STORAGE_KEYS.appearanceSettings, state.appearanceSettings);
}

function persistSupportQueue() {
  writeStorage(STORAGE_KEYS.supportQueue, state.supportQueue);
}

function getCurrentUserAppearanceSettings() {
  if (!state.currentUser) {
    return { ...DEFAULT_APPEARANCE_SETTINGS };
  }

  const configured = state.appearanceSettings[state.currentUser.id];
  const baseAppearance = normalizeAppearanceSettings(isPlainObject(configured) ? configured : DEFAULT_APPEARANCE_SETTINGS);
  const appearancePreview = getLiveAppearancePreview();

  if (!isPlainObject(appearancePreview)) {
    return baseAppearance;
  }

  return normalizeAppearanceSettings({
    ...baseAppearance,
    ...appearancePreview,
    widgets: {
      ...baseAppearance.widgets,
      ...(isPlainObject(appearancePreview.widgets) ? appearancePreview.widgets : {})
    }
  });
}

function getCurrentUserPrivacySettings() {
  const settings = getCurrentUserSettings();
  const configured = isPlainObject(settings.privacy) ? settings.privacy : {};
  const permissionConfig = isPlainObject(configured.permissions) ? configured.permissions : {};

  return {
    appLockEnabled: Boolean(configured.appLockEnabled),
    appLockPinHash: typeof configured.appLockPinHash === "string" ? configured.appLockPinHash : "",
    biometricEnabled: Boolean(configured.biometricEnabled),
    twoFactorEnabled: Boolean(configured.twoFactorEnabled),
    permissions: {
      notifications: typeof permissionConfig.notifications === "boolean"
        ? permissionConfig.notifications
        : DEFAULT_PRIVACY_SETTINGS.permissions.notifications,
      analytics: typeof permissionConfig.analytics === "boolean"
        ? permissionConfig.analytics
        : DEFAULT_PRIVACY_SETTINGS.permissions.analytics,
      supportContact: typeof permissionConfig.supportContact === "boolean"
        ? permissionConfig.supportContact
        : DEFAULT_PRIVACY_SETTINGS.permissions.supportContact,
      dataExport: typeof permissionConfig.dataExport === "boolean"
        ? permissionConfig.dataExport
        : DEFAULT_PRIVACY_SETTINGS.permissions.dataExport
    }
  };
}

function applyAppearanceSettings() {
  const settings = getCurrentUserAppearanceSettings();
  const body = document.body;
  const root = document.documentElement;

  if (!body) {
    return;
  }

  body.classList.toggle("theme-light", settings.themeMode === "light");
  body.classList.toggle("theme-dark", settings.themeMode !== "light");

  body.classList.remove(...getThemeColorClassNames());
  body.classList.add(`theme-color-${settings.themeColor}`);

  body.classList.remove("font-small", "font-medium", "font-large");
  body.classList.add(`font-${settings.fontSize}`);

  if (root) {
    root.classList.remove("font-small", "font-medium", "font-large");
    root.classList.add(`font-${settings.fontSize}`);
  }

  if (elements.insightStrip) {
    elements.insightStrip.classList.toggle("hidden", !settings.widgets.insights);
  }

  if (elements.overviewForecastPanel) {
    elements.overviewForecastPanel.classList.toggle("hidden", !settings.widgets.forecast);
  }

  if (elements.overviewRecentPanel) {
    elements.overviewRecentPanel.classList.toggle("hidden", !settings.widgets.recent);
  }

  if (elements.overviewCategoryPanel) {
    elements.overviewCategoryPanel.classList.toggle("hidden", !settings.widgets.categories);
  }
}

function updateProfilePicturePreview(dataUrl, fileName) {
  if (!elements.settingProfilePicturePreview || !elements.settingProfilePictureName) {
    return;
  }

  const settings = getCurrentUserSettings();
  const uiBundle = getUiTranslationBundle(settings.language);

  if (dataUrl) {
    elements.settingProfilePicturePreview.src = dataUrl;
    elements.settingProfilePicturePreview.classList.remove("hidden");
    elements.settingProfilePictureName.textContent = fileName || uiBundle.dynamic.currentProfilePicture;
    return;
  }

  elements.settingProfilePicturePreview.removeAttribute("src");
  elements.settingProfilePicturePreview.classList.add("hidden");
  elements.settingProfilePictureName.textContent = uiBundle.dynamic.noProfilePicture;
}

async function readProfilePictureInput() {
  if (!elements.settingProfilePicture || !elements.settingProfilePicture.files) {
    return { dataUrl: "" };
  }

  const file = elements.settingProfilePicture.files[0];

  if (!file) {
    return { dataUrl: "" };
  }

  if (!String(file.type || "").startsWith("image/")) {
    return { error: "Profile picture must be an image file." };
  }

  if (file.size > 1_000_000) {
    return { error: "Profile picture must be under 1 MB." };
  }

  const dataUrl = await fileToDataUrl(file);
  return {
    name: file.name,
    dataUrl
  };
}

function getFirebaseBridge() {
  const bridge = window && window.firebaseBridge ? window.firebaseBridge : null;
  return bridge && typeof bridge === "object" ? bridge : null;
}

async function pushToFirebasePath(path, payload) {
  try {
    const bridge = getFirebaseBridge();

    if (!bridge || typeof bridge.push !== "function") {
      return false;
    }

    await bridge.push(path, payload);
    return true;
  } catch (error) {
    console.warn("Firebase push skipped:", error);
    return false;
  }
}

async function removeFirebasePath(path) {
  try {
    const bridge = getFirebaseBridge();

    if (!bridge || typeof bridge.remove !== "function") {
      return false;
    }

    await bridge.remove(path);
    return true;
  } catch (error) {
    console.warn("Firebase remove skipped:", error);
    return false;
  }
}

function queueSupportItem(type, payload) {
  if (!["feedback", "bugReports", "deletionRequests"].includes(type)) {
    return;
  }

  if (!Array.isArray(state.supportQueue[type])) {
    state.supportQueue[type] = [];
  }

  state.supportQueue[type].unshift(payload);

  if (state.supportQueue[type].length > 300) {
    state.supportQueue[type] = state.supportQueue[type].slice(0, 300);
  }

  persistSupportQueue();
}

function parseCsvRows(csvText) {
  const rows = [];
  let currentRow = [];
  let currentCell = "";
  let inQuotes = false;

  for (let index = 0; index < csvText.length; index += 1) {
    const char = csvText[index];
    const nextChar = csvText[index + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentCell += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      currentRow.push(currentCell);
      currentCell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && nextChar === "\n") {
        index += 1;
      }
      currentRow.push(currentCell);
      currentCell = "";

      if (currentRow.some((cell) => String(cell).trim() !== "")) {
        rows.push(currentRow);
      }

      currentRow = [];
      continue;
    }

    currentCell += char;
  }

  currentRow.push(currentCell);
  if (currentRow.some((cell) => String(cell).trim() !== "")) {
    rows.push(currentRow);
  }

  return rows;
}

function normalizeCsvHeader(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replaceAll(/[^a-z0-9]/g, "");
}

function findCsvHeaderIndex(headers, aliases) {
  for (const alias of aliases) {
    const index = headers.indexOf(alias);
    if (index >= 0) {
      return index;
    }
  }
  return -1;
}

function escapeCsvValue(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) {
    return `"${text.replaceAll('"', '""')}"`;
  }
  return text;
}

function normalizeImportedDate(value) {
  const rawDate = String(value || "").trim();

  if (!rawDate) {
    return "";
  }

  if (/^\d{4}-\d{2}-\d{2}$/.test(rawDate)) {
    return rawDate;
  }

  const parsedDate = new Date(rawDate);
  if (Number.isNaN(parsedDate.getTime())) {
    return "";
  }

  return formatDateKey(parsedDate);
}

function normalizeImportedCategory(value) {
  const rawCategory = String(value || "").trim();

  if (!rawCategory) {
    return "Other";
  }

  const availableCategories = getAvailableCategories();
  const matched = availableCategories.find((category) => category.toLowerCase() === rawCategory.toLowerCase());

  if (matched) {
    return matched;
  }

  return rawCategory.slice(0, 30);
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

function getCurrentUserSettings() {
  if (!state.currentUser) {
    return {
      ...DEFAULT_USER_SETTINGS,
      privacy: { ...DEFAULT_PRIVACY_SETTINGS }
    };
  }

  const configured = isPlainObject(state.userPreferences[state.currentUser.id])
    ? state.userPreferences[state.currentUser.id]
    : {};
  const configuredPrivacy = isPlainObject(configured.privacy)
    ? configured.privacy
    : { ...DEFAULT_PRIVACY_SETTINGS };
  const baseSettings = normalizePreferenceSettings(
    {
      currency: configured.currency,
      language: configured.language,
      dateLocale: configured.dateLocale,
      timezone: configured.timezone,
      weekStart: configured.weekStart,
      defaultRange: configured.defaultRange
    },
    {
      ...DEFAULT_USER_SETTINGS,
      privacy: configuredPrivacy
    }
  );

  const privacy = isPlainObject(configuredPrivacy) ? configuredPrivacy : DEFAULT_PRIVACY_SETTINGS;
  const permissions = isPlainObject(privacy.permissions) ? privacy.permissions : DEFAULT_PRIVACY_SETTINGS.permissions;

  const settings = {
    ...baseSettings,
    privacy: {
      appLockEnabled: Boolean(privacy.appLockEnabled),
      appLockPinHash: typeof privacy.appLockPinHash === "string" ? privacy.appLockPinHash : "",
      biometricEnabled: Boolean(privacy.biometricEnabled),
      twoFactorEnabled: Boolean(privacy.twoFactorEnabled),
      permissions: {
        notifications: typeof permissions.notifications === "boolean"
          ? permissions.notifications
          : DEFAULT_PRIVACY_SETTINGS.permissions.notifications,
        analytics: typeof permissions.analytics === "boolean"
          ? permissions.analytics
          : DEFAULT_PRIVACY_SETTINGS.permissions.analytics,
        supportContact: typeof permissions.supportContact === "boolean"
          ? permissions.supportContact
          : DEFAULT_PRIVACY_SETTINGS.permissions.supportContact,
        dataExport: typeof permissions.dataExport === "boolean"
          ? permissions.dataExport
          : DEFAULT_PRIVACY_SETTINGS.permissions.dataExport
      }
    }
  };

  const preferencePreview = getLivePreferencesPreview();

  if (!isPlainObject(preferencePreview)) {
    return settings;
  }

  const previewSettings = normalizePreferenceSettings(
    {
      currency: preferencePreview.currency,
      language: preferencePreview.language,
      dateLocale: preferencePreview.dateLocale,
      timezone: preferencePreview.timezone,
      weekStart: preferencePreview.weekStart,
      defaultRange: preferencePreview.defaultRange
    },
    settings
  );

  return {
    ...previewSettings,
    privacy: settings.privacy
  };
}

function formatMoney(amount) {
  const value = Number.isFinite(Number(amount)) ? Number(amount) : 0;
  const settings = getCurrentUserSettings();
  const cacheKey = `${settings.currency}::${settings.dateLocale}`;

  if (!formatterCache.has(cacheKey)) {
    formatterCache.set(
      cacheKey,
      new Intl.NumberFormat(settings.dateLocale, {
        style: "currency",
        currency: settings.currency,
        maximumFractionDigits: 2
      })
    );
  }

  return formatterCache.get(cacheKey).format(value);
}

function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  const settings = getCurrentUserSettings();

  return date.toLocaleDateString(settings.dateLocale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: settings.timezone
  });
}

function formatMonth(monthKey) {
  const date = new Date(`${monthKey}-01T00:00:00`);
  const settings = getCurrentUserSettings();

  return date.toLocaleDateString(settings.dateLocale, {
    month: "short",
    year: "numeric",
    timeZone: settings.timezone
  });
}

function formatDateTime(isoTimestamp) {
  const date = new Date(isoTimestamp);
  const settings = getCurrentUserSettings();

  return date.toLocaleString(settings.dateLocale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: settings.timezone
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

function showToast(message, type) {
  if (!elements.toastStack || !message) {
    return;
  }

  const safeType = ["success", "error", "info"].includes(type) ? type : "info";
  const toast = document.createElement("div");
  toast.className = `toast ${safeType}`;
  toast.textContent = message;

  elements.toastStack.appendChild(toast);

  while (elements.toastStack.children.length > 4) {
    elements.toastStack.removeChild(elements.toastStack.firstElementChild);
  }

  window.setTimeout(() => {
    toast.remove();
  }, 3000);
}

function showFeedback(target, message, type) {
  if (!target) {
    return;
  }

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

function isPlainObject(value) {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}
