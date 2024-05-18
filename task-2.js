"use strict";

function calcAverageCalories(days) {
  let totalCalories = 0;

  for (const day of days) {
    totalCalories += day.calories;
  }

  return days.length ? totalCalories / days.length : 0;
}
