const express = require("express");
const homeRouter = require("./routes/home");
const userRouter = require("./routes/user");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

const PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/home", homeRouter);
app.use("/user", userRouter);

app.all("/*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views/404.html"));
});

app.listen(PORT, () => {
  console.log(`Server started Lition ${PORT}`);
});
