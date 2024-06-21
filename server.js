const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;

// Root Route
app.use("/", express.static(path.join(__dirname, "/public")));

// Main Route, this imports the routes/root and handles the endpoint "/" or root logic
app.use("/", require("./routes/root"));

app.use("/", require("./routes/404root"));

// Prints out the port
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
