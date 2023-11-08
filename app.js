const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.redirect("/404.html");
});

app.listen(PORT, () =>
  console.log(`Server is running and listening on ${PORT}`)
);