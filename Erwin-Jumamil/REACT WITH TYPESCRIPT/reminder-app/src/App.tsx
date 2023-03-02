import React, { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./model/reminder";
import ReminderServices from "./services/reminder";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminder] = useState<Reminder[]>([]);
  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await ReminderServices.getReminders();
    setReminder(reminders);
  };

  const removeReminder = (id: number) => {
    console.log(id);
    setReminder(reminders.filter((reminders) => reminders.id !== id));
  };

  const addReminder = async (title: string, id: number) => {
    const newReminder = await ReminderServices.addReminders(title, id);
    console.log(newReminder);
    setReminder([newReminder, ...reminders]);
  };

  return (
    <div className="App">
      <div>
        <NewReminder
          onAddReminder={addReminder}
          // setReminder={setReminder}
          // reminders={reminders}
        />
      </div>
      <div className="mx-5">
        <ReminderList
          setReminder={setReminder}
          reminders={reminders}
          items={reminders}
          onRemoveReminder={removeReminder}
        />
      </div>
    </div>
  );
}

export default App;
