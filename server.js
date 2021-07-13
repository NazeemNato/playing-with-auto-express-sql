const express = require("express");
const cors = require("cors");

const staffs = require("./routes/staffs")

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json())
app.use("/staffs",staffs)

app.get("/", (req, res) => {
    return res.send("hello world")
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})