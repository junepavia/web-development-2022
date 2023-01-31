import React, { useState } from "react";
import { VoidExpression } from "typescript";
import ReminderServices from "../services/reminder";
interface NewReminderProps {
  onAddReminder: (title: string, id: number) => void;
  setReminder?: any;
  reminders?: any;
}

function NewReminder({
  onAddReminder,
  setReminder,
  reminders,
}: NewReminderProps): JSX.Element {
  const addReminder = async (title: string, id: number) => {
    const newReminder = await ReminderServices.addReminders(title, id);
    setReminder([newReminder, ...reminders]);
  };
  const [title, setTitle] = useState("");
  const [id, setId] = useState(200);
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    setTitle("");
    //  await ReminderServices.addReminders(title, id + 1);
    //   console.log(id);
    //   console.log(title);
    onAddReminder(title, id);
  };
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"></label>
      <input
        required
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setId((prevState) => prevState + 1);
        }}
        id="title"
        type="text"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary my-3 round-pill">
        Add Reminder
      </button>
    </form>
  );
}

export default NewReminder;
