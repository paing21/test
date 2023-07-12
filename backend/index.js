const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const availability = require("./date");
console.log(availability);
app.use(cors());
app.use(express.json());

app.get("/availability", (req, res) => {
  const chooseMonth = parseInt(req.query.month, 10);

  const availabilityChossenData = availability.filter(
    (ele) => ele.month === chooseMonth
  );
  res.send({
    availability: availabilityChossenData,
  });
});

app.listen(port, () => {
  console.log("Ma Ma");
});
