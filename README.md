# OrangeHRM Automation Framework

![CI Status](https://github.com/Yota18/automate-orange-hrm/actions/workflows/main.yml/badge.svg)

An End-to-End (E2E) automation framework for the OrangeHRM website using **Cypress**, **TypeScript**, and **Bun**, featuring advanced **Allure Reporting**.

## 🚀 Features

- **Page Object Model (POM)**: Modular and reusable code structure.
- **Advanced Reporting**: Integrated Allure Report with screenshots and videos.
- **TypeScript**: Type-safe and modern JavaScript features.
- **Bun Runtime**: Fast execution and dependency management.
- **CI/CD**: GitHub Actions workflow with **GitHub Pages deployment** for reports.
- **Auto-Clean**: Automatically cleans old reports before new runs.

## 🛠️ Prerequisites

- [Bun](https://bun.sh/) (v1.0.0 or higher)
- Node.js (v18 or higher recommended for best compatibility)

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Yota18/automate-orange-hrm.git
cd automate-orange-hrm
bun install
```

## 🏃‍♂️ Running Tests

### Run Headless (CLI)
Executes all tests in headless mode (Electron/Chrome).
```bash
bun run cy:run
```
*Note: This command automatically cleans `allure-results` before running.*

### Open Test Runner (GUI)
Opens the Cypress interactive runner.
```bash
bun run cy:open
```

## 📊 Reporting

### Generate & Open Report
After running tests, generate and view the Allure report locally:
```bash
bun run report:generate
bun run report:open
```

## 🏗️ CI/CD Pipeline

This project uses **GitHub Actions** for continuous integration.
- **Trigger**: Pushes to `main` branch.
- **Steps**:
    1. Checkout code.
    2. Setup Bun & Install dependencies.
    3. Run Cypress tests.
    4. Generate Allure Report.
    5. Upload artifacts.
    6. **Deploy**: Publishes the report to **GitHub Pages** (branch: `gh-pages`).

### 🔗 View Report
The latest Allure Report is automatically deployed to GitHub Pages:
[**View Latest Report**](https://yota18.github.io/automate-orange-hrm/)
