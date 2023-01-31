import express from "express";
import RouterReminder from "./routers/reminders";
const app = express();

app.use(express.json());

app.use("/reminders", RouterReminder);

app.get("/", (req, res) => {
  res.send("hello World");
});

app.listen(8000, () => console.log("Server Started+++=="));
