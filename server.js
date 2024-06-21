const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;

// Root Route
app.use("/", express.static(path.join(__dirname, "public")));

// Main Route, this imports the routes/root and handles the endpoint "/" or root logic
app.use("/", require("./routes/root"));

// Handles 404 errors, * catch all
app.all("*", (req, res) => {
  res.status(404);
  // if request has an "accept" header
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404error.html"));
    // if request has a "json" header
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

// Prints out the port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
