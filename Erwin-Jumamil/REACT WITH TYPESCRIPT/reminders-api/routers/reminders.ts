import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminder";
import Reminder from "../dtos/models/reminder";
const router = Router();
const reminders: Reminder[] = [];

router.get("/", (req, res) => {
  res.send(reminders);
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const reminder = new Reminder(title);
  reminders.push(reminder);
  res.status(201).json(reminder);
});

router.get("/:id", (req, res) => {
  let reminder = reminders.find((test) => test.id === parseInt(req.params.id)); //returns boolean value
  if (!reminder) return res.status(404).send("Error ID Not Found");
  res.send(reminder);
});

router.delete("/:id", (req, res) => {
  let reminder = reminders.find((c) => c.id === parseInt(req.params.id)); //returns boolean value
  if (!reminder) return res.status(404).send("Error ID Not Found");
  //delete
  const index = reminders.indexOf(reminder);
  reminders.splice(index, 1);
  //return
  res.send(reminders);
});

router.put("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const reminder = new Reminder(title);
  reminders.push(reminder);
  const test = { ...reminder, title: "Hotdog" };
  res.status(201).json(test);
});

export default router;
