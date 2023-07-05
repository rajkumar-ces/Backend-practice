const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");

const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

//app.use(adminRoutes);
app.use("/admin", adminRoutes); //common pathway can be filterd like this => 'admin'
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "error-page.html"));
});

// app.use(express.static(path.join(__dirname, ''))); => Create a public folder and place all the static folders
// inside this public folder. We can define its path with the above way. eg : css can be kept in common file

app.listen(3000);
