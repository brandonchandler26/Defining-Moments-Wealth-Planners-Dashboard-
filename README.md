# Financial Planning Dashboard

A comprehensive suite of financial planning tools designed for **Defining Moments Wealth Planners**. This standalone, browser-based dashboard provides advanced projections and calculators for tax planning, retirement strategies, cash flow management, and portfolio rebalancing.

## 🛠 Key Tools

### [Financial Planning Dashboard](index.html)
The central hub for accessing all standalone tools. Featuring a premium, responsive interface with a persistent sidebar for easy navigation.

---

### [Cash Flow Calculator](tools/cashflow-calculator.html)
A powerful tool for projecting annual income, expenses, savings, and tax liabilities with monthly granularity.
- **Monthly Detail Tracking**: Granular month-by-month breakdown of income, expenses, and savings.
- **Net Cash Metric**: Calculates Net Cash (Surplus - Savings) for a complete financial picture.
- **Dynamic Projections**: Real-time calculation of federal and state taxes.
- **401(k) Integration**: Per-spouse 401(k) contribution tracking with max-out indicators.
- **Detailed Insights**: Breakdowns for Social Security, Medicare, and self-employment taxes.
- **PDF Export**: Generate comprehensive reports with all monthly details.

---

### [RMD & Roth Tool](tools/rmd-roth-tool.html)
Advanced retirement planning tool specifically designed for joint spouse projections.
- **Dual-Spouse Projections**: Independent life expectancy and RMD factors for each spouse.
- **Strategy Modeling**: Compare pre-RMD withdrawal and Roth conversion strategies.
- **Joint Life Table Support**: Automatically selects between Uniform Lifetime (Table III) and Joint Life (Table II) based on beneficiary age gaps.
- **Stacked Area Chart**: Visual representation showing each spouse's impact independently.

---

### [Tax Calculator](tools/tax-calculator.html)
A high-precision tax estimation engine.
- **Comprehensive Scenarios**: Supports various filing statuses and tax years.
- **State-Specific Data**: Integration with state tax data for accurate local projections.
- **Full US State Coverage**: Complete list of all 50 states in client profile dropdown.

---

### [Tax-Aware Rebalancing Tool](tools/tax-aware-rebalancing-tool.html)
Intelligent portfolio rebalancing with tax impact optimization.
- **Tax Impact Analysis**: Identifies positions with lowest tax cost for selling.
- **Asset Class Optimization**: Groups trades by asset class with expandable sections.
- **Position Protection**: Mark positions as protected to exclude from rebalancing.
- **Trade Generation**: Generates buy/sell recommendations based on target allocations.
- **Export Options**: Excel and PDF export for trade execution and documentation.

---

### [Money Flow Builder](tools/money-flow.html)
A visual tool for mapping and documenting complex financial flows between accounts and entities.
- **Drag-and-Drop Interface**: Intuitive node-based flow creation.
- **PDF Export**: Generate visual flowcharts for client presentations.
- **Resizable Nodes**: Adjust node sizes for better clarity and screenshot quality.

---

## 💻 Technology Stack

- **Core**: HTML5, Vanilla JavaScript (ES6+), and CSS3.
- **Design System**: Premium HSL-based color palette (Defining Moments Branding), glassmorphism effects, and smooth micro-animations.
- **Typography**: [DM Sans](https://fonts.google.com/specimen/DM+Sans) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) via Google Fonts.
- **Libraries**: jsPDF for PDF generation, SheetJS for Excel export, html2pdf for visual exports.
- **Data Architecture**:
    - `constants.js`: Single source of truth for tax brackets, limits, and actuarial tables.
    - `state-manager.js`: Robust client-side state management for persistent sessions.
    - `state-tax-data.js`: Centralized repository for multi-state tax information.

---

## 🚀 Getting Started

This project is designed as a standalone "local-first" application. There are no server-side dependencies or build steps required.

1. **Clone/Download** the repository.
2. **Open `index.html`** in any modern web browser (Chrome, Edge, Safari).
3. **Set up Profile**: Use the "New Client" or "Edit Profile" feature to input base data that persists across all tools via `localStorage`.

---

## 🔒 Security & Privacy

All data entered into the dashboard is stored **locally** in your browser's `localStorage`. No financial information is transmitted to any external servers.

---

© 2026 Defining Moments Wealth Planners.

---



