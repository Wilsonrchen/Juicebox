function requireUser(req, res, next) {
  console.log("Checking if there's a user......");

  if (!req.user) {
    console.log("There is no req.user!");
    next({
      name: "MissingUserError",
      message: "You must be logged in to perform this action",
    });
  }

  next();
}

module.exports = { requireUser };
