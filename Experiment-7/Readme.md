# Data Analytics Hub: RBAC Implementation (Experiment 7) 🔐

This project demonstrates the implementation of Role-Based Access Control (RBAC) for a Data Analytics application using Spring Boot Security. It ensures that system resources are accessed strictly based on user privileges.

## 🚀 Key Implementations
* **Dynamic Role Allocation:** Configured `ROLE_USER` for standard analytics access and `ROLE_ADMIN` for system-level settings.
* **Tiered API Protection:**
    * `/api/open/**` -> Publicly accessible endpoints.
    * `/api/standard/**` -> Available to all authenticated personnel (Users & Admins).
    * `/api/system/**` -> Strictly locked for Admin usage only.
* **Database & Seeding:** Utilized an In-Memory H2 database mapped with JPA Entities (`AppUser`). A `CommandLineRunner` automatically seeds test profiles (`charu` as USER, `riya` as ADMIN) on startup.
* **Authentication:** Stateless API testing powered by Spring Security HTTP Basic Auth.

## 🛠️ Stack & Configuration
* **Core:** Spring Boot 3.2.4
* **Security Layer:** Spring Security with BCrypt Password Encoding
* **Persistence:** Spring Data JPA & H2 Database

## 📸 API Verification (Postman)
Extensive Postman testing was conducted to verify security rules. Screenshots are attached in the `/screenshots` folder:
1. Identifying unauthenticated access (`401 Unauthorized`).
2. Validating public route access.
3. Successful standard data retrieval by a `USER`.
4. Privilege escalation prevention: `USER` denied access to admin routes (`403 Forbidden`).
5. Successful system setting access by an `ADMIN`.