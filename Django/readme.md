# Todo API - Django REST Framework

A simple yet powerful Todo List API built using Django and Django REST Framework (DRF), supporting JWT authentication and CRUD operations.

---

## Features

- Token-based authentication (JWT)
- Create, read, update, and delete todos
- User registration endpoint
- Proper RESTful API structure
- Status codes and error handling

---

## API Endpoints

> Base URL: `http://127.0.0.1:8000/`

###  Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/token/` | Obtain JWT token (login) |
| `POST` | `/api/token/refresh/` | Refresh JWT access token |

###  User

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/user/` | Register a new user |

###  Todo

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/todo/` | List all todos *(requires token)* |
| `POST` | `/api/todo/` | Create a new todo |
| `GET` | `/api/todo/<id>` | Retrieve a single todo |
| `PUT` | `/api/todo/<id>` | Update a todo |
| `DELETE` | `/api/todo/<id>` | Delete a todo |

>  All `/api/todo/` endpoints require **JWT token** in header:
```http
Authorization: Bearer <your_token>
