const express = require("express");
const tagsRouter = express.Router();
const { getAllTags, getPostsByTagName } = require("../db");
const { requireUser } = require("./utils");
tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next();
});

tagsRouter.get("/", async (req, res) => {
  const tags = await getAllTags();

  res.send({ tags });
});

tagsRouter.get("/:tagName/posts", requireUser, async (req, res, next) => {
  const { tagName } = req.params;
  try {
    const tagsByPost = await getPostsByTagName(tagName);
    res.send(tagsByPost);
  } catch ({ name, message }) {
    next({ name, message });
  }
});

module.exports = tagsRouter;
