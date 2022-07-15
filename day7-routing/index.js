const express = require("express");
const app = express();
app.set("view engine", "hbs");

// static folder
app.use(express.static("public"));
//body parser
app.use(express.urlencoded({ extended: false }));

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

app.post("/project", function (req, res) {
  let { projectname, description } = req.body;

  console.log(req.body);
  console.log(projectname, description);

  res.redirect("/index");
});

app.get("/project/:id", function (req, res) {
  let id = req.params.id;
  console.log(`Id params : ${id}`);
  res.render("detail", { id });
});

app.listen(3000, function () {
  console.log("server ini jalan diport 3000");
});
