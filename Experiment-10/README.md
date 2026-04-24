# Analytics Hub: Core Data API (Experiment 10) 📊

This repository features a standalone Node.js and Express.js REST API designed to handle core database CRUD operations for an Analytics Hub, integrated seamlessly with a MongoDB document database.

## 🚀 Architectural Blueprint
* **Controller-Route Pattern:** Express Router is utilized to maintain clean and decoupled endpoint definitions (`analystRoutes.js`).
* **Database Connectivity:** Mongoose ORM establishes a robust connection to a local MongoDB instance (`charuDB`).
* **Data Modeling:** Features a specialized `Analyst` schema tailored for corporate records, including fields for `primarySkill` and `experienceYears`, complete with automatic timestamping.
* **CRUD Capabilities:** * `POST /api/analysts` - Provision a new record.
  * `GET /api/analysts` - Retrieve the entire dataset.
  * `GET /api/analysts/:id` - Query a specific document.
  * `PUT /api/analysts/:id` - Mutate an existing document.
  * `DELETE /api/analysts/:id` - Permanently obliterate a record.

## 🛠️ Technological Foundation
* **Runtime:** Node.js
* **Web Framework:** Express.js
* **NoSQL Database:** MongoDB 
* **Object Data Modeling:** Mongoose
* **Client Testing:** Postman

## 📸 Endpoint Verification
Full lifecycle testing of the API has been executed. Evidence is documented in the `/screenshots` directory:
1. Console verification of database initialization.
2. Successful document creation (POST payload).
3. Retrieval of aggregated database records (GET request).
4. Confirmed modification of document fields (PUT request).
5. Deletion of a specific resource (DELETE request).
6. Administrative view of the MongoDB Compass `analysts` collection.