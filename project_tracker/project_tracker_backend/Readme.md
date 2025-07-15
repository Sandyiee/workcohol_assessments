#  Project Tracker – Backend

This is the backend for the **Project Tracker** application, built using **Django REST Framework**. It includes CRUD APIs for managing clients, projects, managers, techteam , and feedback.  
The backend supports **two authentication methods**:
-  Google Sign-In via Firebase
-  Username/Password login with JWT stored in cookies

---

## Tech Stack

- **Backend**: Django & Django REST Framework
- **Auth**:
  - Firebase Google Authentication
  - Username & Password (JWT Token with cookie)
- **Database**: MySQL
- **API Format**: JSON (RESTful)

---

##  Features

- JWT & Firebase Authentication
-  Secure cookie-based login
-  CRUD operations for:
     - Clients
    - Projects
   - Managers
   - Tech Team
   - Feedback
- Route protection using `IsAuthenticated`



---

## Authentication Methods

### 1. Google Login (via Firebase)
- Endpoint: `POST /api/verify-token/`
- Accepts: `{ token: "<firebase_id_token>" }`
- Sets a secure `access_token` in cookies.

### 2. Username/Password Login
- Endpoint: `POST /api/username-login/`
- Accepts: `{ username: "", password: "" }`
- Sets `access_token` cookie on success.

---

## API Endpoints

| Entity     | List & Create         | Detail (Retrieve, Update, Delete) |
|------------|------------------------|-----------------------------------|
| Clients    | `GET/POST /api/clients/` | `GET/PUT/DELETE /api/clients/<id>/` |
| Projects   | `GET/POST /api/projects/` | `GET/PUT/DELETE /api/projects/<id>/` |
| Managers   | `GET/POST /api/managers/` | `GET/PUT/DELETE /api/managers/<id>/` |
| Tech Team  | `GET/POST /api/techteam/` | `GET/PUT/DELETE /api/techteam/<id>/` |
| Feedback   | `GET/POST /api/feedback/` | `GET/PUT/DELETE /api/feedback/<id>/` |


