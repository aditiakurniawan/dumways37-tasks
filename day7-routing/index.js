const express = require("express");
const app = express();
app.set("view engine", "hbs");

// static folder
app.use(express.static("public"));

app.get("/index", function (req, res) {
  let title = "Project Blog";
  res.render("index", { title });
});

app.get("/contact", function (req, res) {
  let title = "Contact Me";
  res.render("contact", { title });
});

app.get("/add-project", function (req, res) {
  let title = "Add Project";
  res.render("addproject", { title });
});

app.get("/detail", function (req, res) {
  let title = "Detail";
  res.render("detail", { title });
});

app.listen(3000, function () {
  console.log("server ini jalan diport 3000");
});
