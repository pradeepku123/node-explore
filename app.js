const express = require("express");
const homeRouter = require("./routes/home");
const userRouter = require("./routes/user");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/css",
  express.static(path.join("./", "node_modules", "bootstrap", "dist", "css"))
);
app.use("/home", homeRouter);
app.use("/user", userRouter);

app.all("/*", (req, res) => {
  const page_404 = {
    pageTitle: "Page Not Found",
    message: "Some thing Wrong Page not Found 404",
  };
  res.status(404).render("404", page_404);
});

app.listen(PORT, () => {
  console.log(`Server started Lition ${PORT}`);
});
