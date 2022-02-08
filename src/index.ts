import "dotenv/config";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.send("Hello");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
