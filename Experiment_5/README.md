# 📊 Charu Sood – Data Analytics & Research Portfolio

This repository contains **Experiment 5**, an advanced iteration of my React-based Data Analytics portfolio. It demonstrates industry-standard state management, global context usage, and performance optimization techniques using modern React Hooks and Redux Toolkit.

---

## 🎯 Project Objective

The goal of this project is to create a clean, minimalist, and insight-focused portfolio that differs from traditional developer sites by emphasizing:

* Data Visualization using clean and structured layouts  
* Research Integrity through a chronological publication timeline  
* Impact Metrics with measurable efficiency gains and success rates  

---

## 👤 Developer Profile

* **Name:** Charu Sood  
* **Degree:** Bachelor of Engineering in Computer Science and Engineering  
* **University:** Chandigarh University  
* **UID:** 23BAI70044  
* **Current CGPA:** 7.6  
* **Summary:** Detail-oriented student with strong experience in data analytics, dashboard development, and application-based projects  

---

## 🚀 Experiment 5 Updates

* **Implemented Redux Toolkit:** Replaced `useReducer` with a robust Redux `store` and `savedSlice`. It manages actions like `saveProject`, `removeProject`, and `clearSaved` to handle the user's bookmarked data research seamlessly.
* **Implemented Context API:** Created a `ThemeContext` to handle a global **Dark/Light Mode Toggle**. The theme state is provided app-wide, instantly updating the Material-UI color palette without prop-drilling.
* **Added New Page:** `Reports.jsx` - A Data Insights Dashboard that acts as the central hub for analyzing bookmarked projects.
* **Added `useMemo` for Performance:** Used in the `Reports.jsx` page to dynamically calculate derived insights (e.g., total analyzed datasets, count of distinct tools used, and Python utilization focus) based on the Redux state, ensuring optimal rendering performance.
* **Added screenshots in** `/screenshots` folder showcasing the new Dark Mode, Redux integration, and the Reports dashboard.

---

## 🛠️ Tech Stack

* **Frontend:** React (via Vite)
* **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
* **Global State (Theme):** React Context API
* **Routing:** React Router DOM
* **UI Framework:** Material-UI (MUI) & MUI Icons (`@mui/icons-material`)

---

## ✨ Key Features

* Full-Screen Responsive Layout optimized for all devices  
* Interactive Research Publication Timeline  
* Analytics-Focused Project Cards with performance metrics  
* Professional Certification Showcase  
* Leadership & Community Engagement Section  

---

## 📊 Featured Projects

* **Library Management System**
  * 30% reduction in discrepancies using Python-Django

* **E-commerce Dashboard**
  * 32% improvement in actionable insights using Power BI

* **Coffee Shop Analysis**
  * 28% boost in data accuracy through Excel modeling

---

## 📜 Certifications Included

* Machine Learning – Duke University  
* Azure AI Fundamentals – Microsoft  
* SQL – University of Colorado Boulder  
* Excel with AI – Specialized Workshop  

---

## 📁 Project Structure

```bash
src/
├── components/        # Reusable UI elements (ProjectAnalytics, etc.)
├── context/           # ThemeContext.jsx (Global Theme Provider)
├── redux/             # store.js & slices/savedSlice.js
├── layout/            # Navbar.jsx (with Theme Toggle) & Footer.jsx
├── pages/             # Home, Projects, Research, Skills, Contact, Reports
├── App.jsx            # Main routing and Providers wrapper
└── index.css          # Base CSS reset
```
## 📦 Installation & Setup
1. Clone the Repository
    for example:
 ```bash
git clone https://github.com/charu-sood/data-analytics-portfolio.git
cd data-analytics-portfolio
```

2. Install Dependencies
```bash
npm install @mui/material @emotion/react @emotion/styled @mui/lab @mui/icons-material bootstrap
```
3. Run the Development Server
```bash
npm run dev
```

## 🚀 Highlights

* Metrics-driven portfolio design
* Research-oriented UI architecture
* Clean and minimalist interface
* Resume and recruiter friendly structure
* Scalable and maintainable codebase

## 📢 Conclusion

This portfolio represents Charu Sood’s academic and professional journey in data analytics and machine learning research. It demonstrates strong analytical thinking, technical proficiency, and the ability to translate data into actionable insights.

## 🤝 Credits

* **UI Components:** Material UI (MUI)
* **Framework:** React.js
* **Build Tool:** Vite
* **Styling:** Bootstrap 5 & Custom CSS
* **Data Tools:** Power BI, Tableau, Excel, SQL