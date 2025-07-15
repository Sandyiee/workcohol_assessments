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

## Base URL
`http://localhost:8000/api/`

##  Endpoint Summary

| Entity     | List & Create             | Detail (Retrieve, Update, Delete)     |
|------------|---------------------------|----------------------------------------|
| Clients    | `GET/POST /clients/`      | `GET/PUT/DELETE /clients/<id>/`        |
| Projects   | `GET/POST /projects/`     | `GET/PUT/DELETE /projects/<id>/`       |
| Managers   | `GET/POST /managers/`     | `GET/PUT/DELETE /managers/<id>/`       |
| Tech Team  | `GET/POST /techteam/`     | `GET/PUT/DELETE /techteam/<id>/`       |
| Feedback   | `GET/POST /feedback/`     | `GET/PUT/DELETE /feedback/<id>/`       |

---


##  Clients

### `GET /clients/` – List Clients

| Response Code | Description                            |
|---------------|----------------------------------------|
| 200 OK        | List retrieved successfully            |
| 202 Accepted  | Request accepted but processing later  |
| 203 Non-Authoritative | Partial info from another source |
| 500 Internal Server Error | Generic server error       |
| 502 Bad Gateway | Invalid response from upstream server |
| 503 Service Unavailable | Server temporarily unavailable |

```bash
curl -X GET http://localhost:8000/api/clients/
```

### `POST /clients/` – Create Clients

| Response Code | Description                            |
|---------------|----------------------------------------|
| 201 Created   | Resource created successfully          |
| 202 Accepted  | Request accepted but processing later  |
| 400 Bad Request | Invalid input                        |
| 500 Internal Server Error | Generic server error       |
| 502 Bad Gateway | Invalid response from upstream server |

```bash
curl -X POST http://localhost:8000/api/clients/ \
  -H "Content-Type: application/json" \
  -d '{
        "name": "Divya",
        "company": "Wonder Solutions",
        "email": "divya@gmail.com"
    }'
```

### `GET /clients/<id>/` – Retrieve Clients

| Response Code | Description                            |
|---------------|----------------------------------------|
| 200 OK        | Resource fetched successfully          |
| 203 Non-Authoritative | Partial data                   |
| 404 Not Found | Resource not found                     |
| 500 Internal Server Error | Generic server error       |

```bash
curl -X GET http://localhost:8000/api/clients/1/
```

### `PUT /clients/<id>/` – Update Clients

| Response Code | Description                            |
|---------------|----------------------------------------|
| 200 OK        | Resource updated successfully          |
| 204 No Content | Successfully processed with no content |
| 400 Bad Request | Invalid data                         |
| 500 Internal Server Error | Generic server error       |

```bash
curl -X PUT http://localhost:8000/api/clients/1/ \
  -H "Content-Type: application/json" \
  -d '{"name": "Divyabharathi"}'
```

### `DELETE /clients/<id>/` – Delete Clients

| Response Code | Description                            |
|---------------|----------------------------------------|
| 204 No Content | Resource deleted successfully         |
| 404 Not Found | Resource not found                     |
| 500 Internal Server Error | Generic server error       |

```bash
curl -X DELETE http://localhost:8000/api/clients/1/
```

---

##  Projects

### `GET /projects/` – List Projects

| Response Code | Description                            |
|---------------|----------------------------------------|
| 200 OK        | List retrieved successfully            |
| 202 Accepted  | Request accepted but processing later  |
| 203 Non-Authoritative | Partial info from another source |
| 500 Internal Server Error | Generic server error       |
| 502 Bad Gateway | Invalid response from upstream server |
| 503 Service Unavailable | Server temporarily unavailable |

```bash
curl -X GET http://localhost:8000/api/projects/
```

### `POST /projects/` – Create Projects

| Response Code | Description                            |
|---------------|----------------------------------------|
| 201 Created   | Resource created successfully          |
| 202 Accepted  | Request accepted but processing later  |
| 400 Bad Request | Invalid input                        |
| 500 Internal Server Error | Generic server error       |
| 502 Bad Gateway | Invalid response from upstream server |

```bash
curl -X POST http://localhost:8000/api/projects/ \
  -H "Content-Type: application/json" \
  -d '{ "title": "Mobile App Redesign",
        "description": "Redesign the UI/UX of the company app.",
        "status": "Completed",
        "start_date": "2025-01-10",
        "end_date": "2025-06-20",
        "client": 2,
        "manager": 2}'
```

### `GET /projects/<id>/` – Retrieve Projects

| Response Code | Description                            |
|---------------|----------------------------------------|
| 200 OK        | Resource fetched successfully          |
| 203 Non-Authoritative | Partial data                   |
| 404 Not Found | Resource not found                     |
| 500 Internal Server Error | Generic server error       |

```bash
curl -X GET http://localhost:8000/api/projects/1/
```

### `PUT /projects/<id>/` – Update Projects

| Response Code | Description                            |
|---------------|----------------------------------------|
| 200 OK        | Resource updated successfully          |
| 204 No Content | Successfully processed with no content |
| 400 Bad Request | Invalid data                         |
| 500 Internal Server Error | Generic server error       |

```bash
curl -X PUT http://localhost:8000/api/projects/1/ \
  -H "Content-Type: application/json" \
  -d '{"title": "Mobiles App Redesign"}'
```

### `DELETE /projects/<id>/` – Delete Projects

| Response Code | Description                            |
|---------------|----------------------------------------|
| 204 No Content | Resource deleted successfully         |
| 404 Not Found | Resource not found                     |
| 500 Internal Server Error | Generic server error       |

```bash
curl -X DELETE http://localhost:8000/api/projects/1/
```

---

##  Managers

### `GET /managers/` – List Managers

| Response Code | Description                            |
|---------------|----------------------------------------|
| 200 OK        | List retrieved successfully            |
| 202 Accepted  | Request accepted but processing later  |
| 203 Non-Authoritative | Partial info from another source |
| 500 Internal Server Error | Generic server error       |
| 502 Bad Gateway | Invalid response from upstream server |
| 503 Service Unavailable | Server temporarily unavailable |

```bash
curl -X GET http://localhost:8000/api/managers/
```

### `POST /managers/` – Create Managers

| Response Code | Description                            |
|---------------|----------------------------------------|
| 201 Created   | Resource created successfully          |
| 202 Accepted  | Request accepted but processing later  |
| 400 Bad Request | Invalid input                        |
| 500 Internal Server Error | Generic server error       |
| 502 Bad Gateway | Invalid response from upstream server |

```bash
curl -X POST http://localhost:8000/api/managers/ \
  -H "Content-Type: application/json" \
  -d '{ "name": "Alice",
        "email": "alice@gmail.com",
        "department": "Engineering"}'
```

### `GET /managers/<id>/` – Retrieve Managers

| Response Code | Description                            |
|---------------|----------------------------------------|
| 200 OK        | Resource fetched successfully          |
| 203 Non-Authoritative | Partial data                   |
| 404 Not Found | Resource not found                     |
| 500 Internal Server Error | Generic server error       |

```bash
curl -X GET http://localhost:8000/api/managers/1/
```

### `PUT /managers/<id>/` – Update Managers

| Response Code | Description                            |
|---------------|----------------------------------------|
| 200 OK        | Resource updated successfully          |
| 204 No Content | Successfully processed with no content |
| 400 Bad Request | Invalid data                         |
| 500 Internal Server Error | Generic server error       |

```bash
curl -X PUT http://localhost:8000/api/managers/1/ \
  -H "Content-Type: application/json" \
  -d '{  "department": "EEE"}'
```

### `DELETE /managers/<id>/` – Delete Managers

| Response Code | Description                            |
|---------------|----------------------------------------|
| 204 No Content | Resource deleted successfully         |
| 404 Not Found | Resource not found                     |
| 500 Internal Server Error | Generic server error       |

```bash
curl -X DELETE http://localhost:8000/api/managers/1/
```

---

##  Tech Team

### `GET /techteam/` – List Tech Team

| Response Code | Description                            |
|---------------|----------------------------------------|
| 200 OK        | List retrieved successfully            |
| 202 Accepted  | Request accepted but processing later  |
| 203 Non-Authoritative | Partial info from another source |
| 500 Internal Server Error | Generic server error       |
| 502 Bad Gateway | Invalid response from upstream server |
| 503 Service Unavailable | Server temporarily unavailable |

```bash
curl -X GET http://localhost:8000/api/techteam/
```

### `POST /techteam/` – Create Tech Team

| Response Code | Description                            |
|---------------|----------------------------------------|
| 201 Created   | Resource created successfully          |
| 202 Accepted  | Request accepted but processing later  |
| 400 Bad Request | Invalid input                        |
| 500 Internal Server Error | Generic server error       |
| 502 Bad Gateway | Invalid response from upstream server |

```bash
curl -X POST http://localhost:8000/api/techteam/ \
  -H "Content-Type: application/json" \
  -d '{"name": "Sam",
        "roll": "Backend Developer",
        "email": "sam@gmail.com",
        "project": 2}'
```

### `GET /techteam/<id>/` – Retrieve Tech Team

| Response Code | Description                            |
|---------------|----------------------------------------|
| 200 OK        | Resource fetched successfully          |
| 203 Non-Authoritative | Partial data                   |
| 404 Not Found | Resource not found                     |
| 500 Internal Server Error | Generic server error       |

```bash
curl -X GET http://localhost:8000/api/techteam/1/
```

### `PUT /techteam/<id>/` – Update Tech Team

| Response Code | Description                            |
|---------------|----------------------------------------|
| 200 OK        | Resource updated successfully          |
| 204 No Content | Successfully processed with no content |
| 400 Bad Request | Invalid data                         |
| 500 Internal Server Error | Generic server error       |

```bash
curl -X PUT http://localhost:8000/api/techteam/1/ \
  -H "Content-Type: application/json" \
  -d '{ "project": 1}'
```

### `DELETE /techteam/<id>/` – Delete Tech Team

| Response Code | Description                            |
|---------------|----------------------------------------|
| 204 No Content | Resource deleted successfully         |
| 404 Not Found | Resource not found                     |
| 500 Internal Server Error | Generic server error       |

```bash
curl -X DELETE http://localhost:8000/api/techteam/1/
```

---

##  Feedback

### `GET /feedback/` – List Feedback

| Response Code | Description                            |
|---------------|----------------------------------------|
| 200 OK        | List retrieved successfully            |
| 202 Accepted  | Request accepted but processing later  |
| 203 Non-Authoritative | Partial info from another source |
| 500 Internal Server Error | Generic server error       |
| 502 Bad Gateway | Invalid response from upstream server |
| 503 Service Unavailable | Server temporarily unavailable |

```bash
curl -X GET http://localhost:8000/api/feedback/
```

### `POST /feedback/` – Create Feedback

| Response Code | Description                            |
|---------------|----------------------------------------|
| 201 Created   | Resource created successfully          |
| 202 Accepted  | Request accepted but processing later  |
| 400 Bad Request | Invalid input                        |
| 500 Internal Server Error | Generic server error       |
| 502 Bad Gateway | Invalid response from upstream server |

```bash
curl -X POST http://localhost:8000/api/feedback/ \
  -H "Content-Type: application/json" \
  -d '{"comments": "Great delivery and support team.",
        "ratings": 5,
        "project": 2,
        "client": 2}'
```

### `GET /feedback/<id>/` – Retrieve Feedback

| Response Code | Description                            |
|---------------|----------------------------------------|
| 200 OK        | Resource fetched successfully          |
| 203 Non-Authoritative | Partial data                   |
| 404 Not Found | Resource not found                     |
| 500 Internal Server Error | Generic server error       |

```bash
curl -X GET http://localhost:8000/api/feedback/1/
```

### `PUT /feedback/<id>/` – Update Feedback

| Response Code | Description                            |
|---------------|----------------------------------------|
| 200 OK        | Resource updated successfully          |
| 204 No Content | Successfully processed with no content |
| 400 Bad Request | Invalid data                         |
| 500 Internal Server Error | Generic server error       |

```bash
curl -X PUT http://localhost:8000/api/feedback/1/ \
  -H "Content-Type: application/json" \
  -d '{ "client": 1}'
```

### `DELETE /feedback/<id>/` – Delete Feedback

| Response Code | Description                            |
|---------------|----------------------------------------|
| 204 No Content | Resource deleted successfully         |
| 404 Not Found | Resource not found                     |
| 500 Internal Server Error | Generic server error       |

```bash
curl -X DELETE http://localhost:8000/api/feedback/1/
```