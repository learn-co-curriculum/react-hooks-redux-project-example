import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "./habitsSlice";
import styles from "./Habit.module.css";

export function HabitForm() {
  const [formData, setFormData] = useState({
    title: "",
  });

  const dispatch = useDispatch();

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const habit = {
      ...formData,
      days: {
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
      },
    };

    dispatch(addHabit(habit));

    setFormData({
      title: "",
    });
  }

  return (
    <div>
      <h1>Weekly Habit Tracker</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            id="title"
            name="title"
            placeholder="Add a new habit..."
            value={formData.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <button type="submit" className={styles.button}>
            Add Habit
          </button>
        </div>
      </form>
    </div>
  );
}
