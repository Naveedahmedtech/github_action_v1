const express = require('express');

const app = express();


const PORT = process.env.PORT | 3000;
app.get("/", (req, res) => res.status(200).send("App is running"));
app.listen(PORT, () => console.log("App is listening on port " + PORT));
