const express = require("express");
const app = express();
const api = require("./routes/data");
const cors = require('cors');

const PORT = 4000;

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use(cors());
app.use("/api", api);

app.listen(PORT, () => {
  console.log(`Server Started at PORT ${PORT}`);
});