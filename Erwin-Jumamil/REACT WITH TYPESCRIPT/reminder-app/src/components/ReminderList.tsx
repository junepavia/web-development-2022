import { info } from "console";
import React from "react";
import Reminder from "../model/reminder";
import NewReminder from "./NewReminder";
import ReminderServices from "../services/reminder";

interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
  setReminder?: any;
  reminders?: any;
}

function ReminderList({
  items,
  onRemoveReminder,
  setReminder,
  reminders,
}: ReminderListProps) {
  const removeReminder = (id: number) => {};

  return (
    <>
      <NewReminder
        onAddReminder={() => console.log("string")}
        // setReminder={setReminder}
        // reminders={reminders}
      />
      <ul className="list-group bg-black">
        {items.map((item, key) => (
          <li className="list-group-item h5 text-info  bg-secondary" key={key}>
            {item.title}
            <button
              onClick={() =>
                setReminder(
                  reminders.filter((reminders: any) => reminders.id !== item.id)
                )
              }
              // onClick={() => console.log(item.id)}
              className="btn btn-danger mx-5"
            >
              {" "}
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <label htmlFor="">sadasdasdasdasdas</label>
            <input type="text" />
          </div>
          <div className="col-6">
            <label htmlFor="">dasdasdasdasdasd</label>
            <input type="text" />
            <input type="text" />
            <div>
              <button className="btn-black">green</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReminderList;
