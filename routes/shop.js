const path = require("path");

const express = require("express");

const router = express.Router();

const rootDir = require("../utilities/path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
}); // replacing the pathway = __dirname, ".." to rootDir for path file.

// Excercises or work done with basic functionalities

// Avoid .use to reduce the complexcity. Use required method over there

// app.use((req, res, next) => {
//   console.log("one");
//   next(); // Allows the rquest to continue to the next middleware
// });

// app.use("/", (req, res, next) => {
//   console.log("I always run!");
//   next();
// });

// app.use("/", (req, res, next) => {
//   console.log("two");
//   res.send("<h1>Hello....from Express!</h1>");
// });

// app.get("/", (req, res) => {
//   console.log("Here");
//     res.download("server.js");
//   it allows the user to download the mentioned file

//     res.status(500).json({ message: "Error" });
//   it helps to send the status error message in the console and also the JSON output message to the browser

//     res.status(500).send("Hi");
//   it helps to send the status error message in the console and also the message to the browser

//     res.send("HI");
//   it helps to send the message to the browser to display
// });

// const server = http.createServer(app);
// server.listen(3000)

// we can also shorten the code by just like below

module.exports = router;
