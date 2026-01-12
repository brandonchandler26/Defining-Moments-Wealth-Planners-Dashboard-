# Defining Moments Financial Planning Dashboard

A comprehensive, client-facing financial planning toolkit designed for financial advisors. Built with React, Tailwind CSS, and vanilla JavaScript, this dashboard provides integrated tools for tax planning, retirement projections, cash flow analysis, and estate planning.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0-green.svg)
![Tax Year](https://img.shields.io/badge/tax%20year-2026-gold.svg)

## 🎯 Overview

The Defining Moments Dashboard is a unified financial planning platform that enables:

- **Comprehensive Tax Calculations** - Federal and all 50 state tax computations with OBBBA 2024 updates
- **Retirement Projections** - Monte Carlo simulations, Roth conversion analysis, RMD calculations
- **Cash Flow Analysis** - Income/expense tracking with multi-scenario comparisons
- **Estate Planning** - Wealth transfer strategies, gift tax, and estate tax projections
- **Client Data Sync** - Unified profile that flows across all tools automatically

## 📁 Project Structure

```
├── index.html                    # Main dashboard with tool navigation
├── tools/
│   ├── constants.js              # 🔧 Centralized 2026 financial constants
│   ├── state-manager.js          # 🔧 Global state & cross-tool sync
│   ├── state-tax-data.js         # 🔧 All 50 state tax configurations
│   ├── client-profile.html       # Client data hub
│   ├── tax-calculator.html       # Comprehensive tax estimator
│   ├── cashflow-calculator.html  # Income/expense analyzer
│   ├── retirement-projector.html # Monte Carlo retirement planning
│   ├── rmd-roth-tool.html        # RMD & Roth conversion optimizer
│   ├── money-flow.html           # Cash flow visualizer
│   ├── ss-portfolio-optimizer.html # Social Security optimization
│   └── estate-planning.html      # Estate & gift tax planning
```

## ✨ Key Features

### Tax Calculator
- **Federal Tax**: All 2026 brackets, AMT, NIIT, QBI deduction
- **State Tax**: Complete configurations for all 50 states + DC
- **FICA**: Social Security, Medicare, Additional Medicare Tax
- **Credits**: Child Tax Credit, education credits, retirement savers credit
- **Scenario Comparison**: Side-by-side comparison of two tax scenarios
- **PDF Export**: Generate professional tax summary reports

### Client Profile Hub
- Unified client data entry (names, DOB, filing status, state)
- Automatic age calculations from date of birth
- Data sync to all planning tools via GlobalStateManager
- Asset and liability tracking
- JSON export/import for data portability

### Retirement Projector
- Monte Carlo simulation (1,000+ scenarios)
- Social Security optimization
- Roth conversion laddering analysis
- Dynamic withdrawal rate calculations

### Cash Flow Calculator
- Income source categorization (W-2, 1099, K-1, etc.)
- Expense tracking by category
- Multi-year projections
- Integration with tax calculator

## 🔧 Architecture

### Centralized Constants (`constants.js`)

All 2026 tax numbers are maintained in a single source of truth:

```javascript
const FinancialConstants = {
    currentYear: 2026,
    federalBrackets: { single: [...], mfj: [...], ... },
    standardDeduction: { single: 16100, mfj: 32200, ... },
    capitalGainsBrackets: { ... },
    fica: { ssRate: 0.062, medicareRate: 0.0145, ... },
    retirementLimits: { elective401k: 24500, catchUp401k: 8000, ... },
    // ... 500+ lines of constants
};
```

**Benefits:**
- Update tax numbers in ONE place for annual changes
- Consistency across all tools
- Easy auditing and verification

### State Tax Data (`state-tax-data.js`)

All 50 state tax configurations in a dedicated file:

```javascript
const StateTaxData = {
    'CA': { name: 'California', type: 'graduated', brackets: [...] },
    'TX': { name: 'Texas', type: 'none' },
    'NY': { name: 'New York', type: 'graduated', ... },
    // ... all states
};
```

### Global State Manager (`state-manager.js`)

Cross-tool data synchronization:

```javascript
GlobalStateManager.init();
GlobalStateManager.setState({ client1: { name: 'John', dob: '1960-05-15' } });
GlobalStateManager.subscribe(callback); // React to changes
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely client-side

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/defining-moments-dashboard.git
cd defining-moments-dashboard
```

2. Open `index.html` in your browser, or serve locally:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .
```

3. Navigate to `http://localhost:8000`

### Quick Start

1. **Start with Client Profile** - Enter client names, DOB, filing status
2. **Enter Income** - Use Cash Flow Calculator for detailed income entry
3. **Run Tax Projections** - See federal + state tax estimates
4. **Plan Retirement** - Use projector for Monte Carlo analysis
5. **Compare Scenarios** - Toggle between scenarios for what-if analysis

## 📊 Annual Update Workflow

When tax laws change (typically each December/January):

1. **Update `constants.js`** - Federal brackets, limits, thresholds
2. **Update `state-tax-data.js`** - State-specific changes
3. **Verify calculations** - Run test scenarios against IRS publications
4. **Update version badge** - Increment tax year in README

### Key Constants to Update Annually

| Category | Location in `constants.js` |
|----------|---------------------------|
| Federal Tax Brackets | `federalBrackets` |
| Standard Deductions | `standardDeduction` |
| Capital Gains Brackets | `capitalGainsBrackets` |
| 401(k)/IRA Limits | `retirementLimits` |
| Social Security Wage Base | `fica.socialSecurityWageBase` |
| IRMAA Thresholds | `irmaa.thresholds` |
| AMT Exemptions | `amt` |
| Estate Tax Exclusion | (in estate-planning.html) |

## 🛠️ Technologies

- **React 18** - UI components (via CDN, no build required)
- **Tailwind CSS** - Styling (via CDN)
- **Babel** - JSX transformation (in-browser)
- **jsPDF** - PDF generation for reports
- **Chart.js** - Data visualizations
- **LocalStorage** - Client data persistence

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For questions or issues, please open a GitHub issue or contact the development team.

---

**Built with ❤️ for financial advisors who want to deliver exceptional client experiences.**
