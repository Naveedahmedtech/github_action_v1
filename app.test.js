const request = require("supertest");
const express = require("express");

const app = express();

app.get("/", (req, res) => res.status(200).send("App is running"));

let server; 

beforeAll((done) => {
  server = app.listen(3000, () => {
    console.log("Test server is running on port 3000");
    done();
  });
});

afterAll((done) => {
  server.close(done); 
});

describe("GET /", () => {
  it('should return 200 OK with the message "App is running"', async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("App is running");
  });
});
