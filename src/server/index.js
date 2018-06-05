import serverless from "serverless-http";
import express from "express";

const app = express();

app.get("/api/testington", (req, res) => res.send("it's tuesday"));

export const handler = serverless(app);
