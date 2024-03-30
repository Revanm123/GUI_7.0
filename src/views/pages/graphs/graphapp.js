const express = require("express");
const dashboardRouter = require("./routes/dashboard");

const app = express();
const port = 3000;
require("dotenv").config();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.get("/mqttConnDetails", (req, res) => {
    res.send(
        JSON.stringify({
            mqttServer: process.env.MQTT_BROKER,
            mqttTopic: process.env.MQTT_TOPIC,
        })
    );
});
app.get("/", dashboardRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});