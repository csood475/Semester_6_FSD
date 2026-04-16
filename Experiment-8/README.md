# Data Analytics Hub: React + JWT UI (Experiment 8) 🌐

This repository demonstrates the integration of a React.js frontend with a Spring Boot JSON Web Token (JWT) secured backend (from Experiment 6). 

## 🚀 Architectural Features
* **Stateless Authentication:** Processes user credentials and securely caches the generated `accessToken` within the browser's `sessionStorage`.
* **Component Guarding:** The `/hub` route is strictly protected. Navigation logic forcibly redirects unauthenticated users back to the auth portal.
* **Header Injections:** Utilizes Axios to intercept and append the `Authorization: Bearer <token>` header to outgoing API requests.
* **Modern UI:** Customized Material UI (MUI) components for an enterprise-grade analytics dashboard look.

## 🛠️ Technology Stack
* **Frontend Core:** React 18
* **Routing:** React Router DOM
* **Styling:** Material UI (MUI) & Bootstrap 5
* **Network:** Axios

## 📸 Validation & Testing
The complete authentication lifecycle was tested. Evidence is available in the `/screenshots` directory:
1. Customized Authentication Portal.
2. Successful caching of the JWT in `sessionStorage`.
3. Authorized data retrieval from the protected Spring Boot endpoint.
4. Interception of unauthorized navigation attempts.
5. Successful session termination and token destruction.