# sample-app

Express.js wrapper API for JSONPlaceholder with Swagger UI documentation.

## Description

This application provides a RESTful API wrapper around the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) service, which is a free fake API for testing and prototyping. The wrapper includes full Swagger/OpenAPI documentation accessible through a web interface.

## Features

- ✅ RESTful API endpoints for posts and comments
- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ Interactive Swagger UI documentation
- ✅ OpenAPI 3.0 specification
- ✅ Error handling

## Prerequisites

- Node.js (v14 or higher recommended) and npm (Node Package Manager)
- OR Docker and Docker Compose (for containerized deployment)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ajex13/sample-app.git
cd sample-app
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

Start the server:
```bash
npm start
```

The application will start on `http://localhost:3000` by default.

## Docker

### Using Docker Compose (Recommended)

The easiest way to run the application with Docker is using Docker Compose:

**Start the application:**
```bash
docker-compose up
```

**Start in detached mode (background):**
```bash
docker-compose up -d
```

**Stop the application:**
```bash
docker-compose down
```

**Rebuild and start:**
```bash
docker-compose up --build
```

**Run on a custom port:**
```bash
PORT=8080 docker-compose up
```

The application will be available at `http://localhost:3000` (or the port you specified).

### Using Docker Directly

**Build the Docker image:**
```bash
docker build -t sample-app .
```

**Run the container:**
```bash
docker run -p 3000:3000 sample-app
```

**Run on a different port (e.g., 8080):**
```bash
docker run -p 8080:3000 -e PORT=3000 sample-app
```

## API Endpoints

The following endpoints are available:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/posts` | Get all posts |
| GET | `/posts/:id` | Get a specific post by ID |
| GET | `/posts/:id/comments` | Get all comments for a specific post |
| GET | `/comments?postId=:id` | Get comments filtered by post ID |
| POST | `/posts` | Create a new post |
| PUT | `/posts/:id` | Update a post (full update) |
| PATCH | `/posts/:id` | Update a post (partial update) |
| DELETE | `/posts/:id` | Delete a post |

## Swagger Documentation

Once the server is running, access the interactive Swagger UI documentation at:

```
http://localhost:3000/api-docs
```

The Swagger UI provides:
- Interactive API testing
- Request/response schemas
- Example values
- Parameter descriptions

## Example Usage

### Get all posts
```bash
curl http://localhost:3000/posts
```

### Get a specific post
```bash
curl http://localhost:3000/posts/1
```

### Create a new post
```bash
curl -X POST http://localhost:3000/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"My Post","body":"Post content","userId":1}'
```

### Update a post
```bash
curl -X PUT http://localhost:3000/posts/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Post","body":"Updated content","userId":1}'
```

### Delete a post
```bash
curl -X DELETE http://localhost:3000/posts/1
```

## Environment Variables

You can customize the port by setting the `PORT` environment variable:

```bash
PORT=8080 npm start
```

## Technologies Used

- **Express.js** - Fast, unopinionated web framework for Node.js
- **Axios** - Promise-based HTTP client for making requests
- **Swagger UI Express** - Serve auto-generated Swagger UI
- **Swagger JSDoc** - Generate Swagger/OpenAPI documentation from JSDoc comments

## License

See the [LICENSE](LICENSE) file for details.
