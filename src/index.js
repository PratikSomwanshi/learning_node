const express = require("express");

const apiRoutes = require("./routes");

const { ServerConfig } = require("./config/index");

const app = express();

app.use(express.json())
app.use(express.urlencoded())

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () =>
    console.log(`Example app listening on port ${ServerConfig.PORT}!`)
);
