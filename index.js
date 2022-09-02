const express = require("express");

const app = express();
const PORT = 3000;
function logger(req, res, next) {
  console.log(`/${req.method} method called`);
  next();
}
app.use(logger);

app.all("*", (req, res) => {
  res.send(`Page Not Found`);
});

app.listen(PORT, () => {
  console.log(`Server started Lition ${PORT}`);
});
