const request = require("supertest");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000; // Use OR operator for setting port
app.get("/", (req, res) => res.status(200).send("App is running"));

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));

describe("GET /", () => {
  it('should return 200 OK with the message "App is running"', async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("App is running");
  });
});
