const express = require("express");

const PORT = 5000;

const app = express();

const path = require("path");

// importing routes form OfflineAudioCompletionEvent.js
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

app.set("view engine", "pug");
app.set("views", "views");

// importing root directory
const rootDir = require("./helper/helper");

// static serving files
app.use(express.static(path.join(__dirname, "public")));

// using imported routes
app.use("/admin", adminRoutes);
app.use(userRoutes);
app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`The Server is Started in the port number ${PORT}`);
});
