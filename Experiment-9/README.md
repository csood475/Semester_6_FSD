# Analytics Portal: RBAC Frontend (Experiment 9) 📊

This repository contains the React.js frontend tailored for an Analytics Portal, interfacing with the Role-Based Access Control (RBAC) Spring Boot API developed in Experiment 7.

## 🚀 Architectural Features
* **Enterprise UI:** Designed with Material UI (MUI) components (`AppBar`, `Paper`, `Container`) to differentiate user and administrative workspaces visually.
* **Role-Based Routing:** * `charu` (USER) is routed to the standard workspace.
  * `aman` (ADMIN) gains access to the elevated dark-themed system core.
* **Strict API Interfacing:**
  * Components automatically append HTTP Basic Authentication credentials stored in `sessionStorage` to Axios requests.
  * Explicit handling of `403 Forbidden` errors when users attempt unauthorized privilege escalation.

## 🛠️ Technology Stack
* **Frontend:** React 18, React Router DOM
* **Styling:** Material UI (MUI) & Bootstrap 5
* **Network & State:** Axios, Browser SessionStorage

## 📸 Compliance & Testing
A full suite of Postman and UI testing has been performed. Evidence is stored in `/screenshots`:
1. Modern Login Portal UI.
2. `USER` account successfully retrieving standard analytics.
3. `USER` account blocked (`403 Forbidden`) from accessing system settings.
4. `ADMIN` account successfully verifying system configurations.
5. Session Storage validation indicating correct role assignment.
6. Guarded route testing (forcing unauthenticated redirects).