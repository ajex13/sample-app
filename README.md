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

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)

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
