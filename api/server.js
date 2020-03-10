const express = require("express");

const server = express();

const postsRouter = require("../posts/posts-router");

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

server.use("/api/posts", postsRouter);

module.exports = server;
