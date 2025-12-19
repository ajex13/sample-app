const express = require('express');
const axios = require('axios');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const PORT = process.env.PORT || 3000;
const JSON_PLACEHOLDER_BASE_URL = 'https://jsonplaceholder.typicode.com';

// Middleware
app.use(express.json());

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'JSONPlaceholder Wrapper API',
      version: '1.0.0',
      description: 'A wrapper API for JSONPlaceholder service',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: 'Development server',
      },
    ],
  },
  apis: ['./index.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Get all posts
 *     description: Retrieve all posts from JSONPlaceholder
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
app.get('/posts', async (req, res) => {
  try {
    const response = await axios.get(`${JSON_PLACEHOLDER_BASE_URL}/posts`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ 
      error: 'Failed to fetch posts',
      message: error.message 
    });
  }
});

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Get a specific post
 *     description: Retrieve a post by ID from JSONPlaceholder
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Post ID
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
app.get('/posts/:id', async (req, res) => {
  try {
    const response = await axios.get(`${JSON_PLACEHOLDER_BASE_URL}/posts/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ 
      error: 'Failed to fetch post',
      message: error.message 
    });
  }
});

/**
 * @swagger
 * /posts/{id}/comments:
 *   get:
 *     summary: Get comments for a specific post
 *     description: Retrieve all comments for a post by ID from JSONPlaceholder
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Post ID
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
app.get('/posts/:id/comments', async (req, res) => {
  try {
    const response = await axios.get(`${JSON_PLACEHOLDER_BASE_URL}/posts/${req.params.id}/comments`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ 
      error: 'Failed to fetch comments',
      message: error.message 
    });
  }
});

/**
 * @swagger
 * /comments:
 *   get:
 *     summary: Get comments by post ID
 *     description: Retrieve comments filtered by post ID from JSONPlaceholder
 *     parameters:
 *       - in: query
 *         name: postId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Post ID to filter comments
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
app.get('/comments', async (req, res) => {
  try {
    const params = req.query.postId ? { postId: req.query.postId } : {};
    const response = await axios.get(`${JSON_PLACEHOLDER_BASE_URL}/comments`, { params });
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ 
      error: 'Failed to fetch comments',
      message: error.message 
    });
  }
});

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Create a new post
 *     description: Create a new post in JSONPlaceholder
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               body:
 *                 type: string
 *               userId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Post created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
app.post('/posts', async (req, res) => {
  try {
    const response = await axios.post(`${JSON_PLACEHOLDER_BASE_URL}/posts`, req.body);
    res.status(201).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ 
      error: 'Failed to create post',
      message: error.message 
    });
  }
});

/**
 * @swagger
 * /posts/{id}:
 *   put:
 *     summary: Update a post (full update)
 *     description: Update all fields of a post by ID in JSONPlaceholder
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Post ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               body:
 *                 type: string
 *               userId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Post updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
app.put('/posts/:id', async (req, res) => {
  try {
    const response = await axios.put(`${JSON_PLACEHOLDER_BASE_URL}/posts/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ 
      error: 'Failed to update post',
      message: error.message 
    });
  }
});

/**
 * @swagger
 * /posts/{id}:
 *   patch:
 *     summary: Update a post (partial update)
 *     description: Update specific fields of a post by ID in JSONPlaceholder
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Post ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               body:
 *                 type: string
 *               userId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Post updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
app.patch('/posts/:id', async (req, res) => {
  try {
    const response = await axios.patch(`${JSON_PLACEHOLDER_BASE_URL}/posts/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ 
      error: 'Failed to patch post',
      message: error.message 
    });
  }
});

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Delete a post
 *     description: Delete a post by ID from JSONPlaceholder
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Post ID
 *     responses:
 *       200:
 *         description: Post deleted successfully
 */
app.delete('/posts/:id', async (req, res) => {
  try {
    const response = await axios.delete(`${JSON_PLACEHOLDER_BASE_URL}/posts/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ 
      error: 'Failed to delete post',
      message: error.message 
    });
  }
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'JSONPlaceholder Wrapper API',
    documentation: '/api-docs',
    endpoints: {
      'GET /posts': 'Get all posts',
      'GET /posts/:id': 'Get a specific post',
      'GET /posts/:id/comments': 'Get comments for a post',
      'GET /comments?postId=:id': 'Get comments by post ID',
      'POST /posts': 'Create a new post',
      'PUT /posts/:id': 'Update a post (full)',
      'PATCH /posts/:id': 'Update a post (partial)',
      'DELETE /posts/:id': 'Delete a post'
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
});
