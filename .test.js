function isValidTime(day, month, year) {
  // Perform your time validation logic here
  // For example, you can check if the day, month, and year are within valid ranges

  // Validate the day based on the month
  // const daysInMonth = new Date(year, month, 0).getDate(); // Get the number of days in the month
  if (day < 1 || day > daysInMonth(month, year)) return false; // Day should be between 1 and the number of days in the month

  // Validate the month
  if (month < 1 || month > 12) return false; // Month should be between 1 and 12

  // Validate the year
  if (isLeadYear(year)) return false;
  // Year cannot be negative
  // Return true if the time is valid, otherwise false
  return true;
}
function isLeadYear(year) {
  if (year % 4) {
    if (year % 100) {
      if (year % 400) {
        return true;
      }
      return false;
    }
    return false;
  }
}

function daysInMonth(month, year) {
  if (month === 2) {
    isLeadYear(year) ? 29 : 28;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  } else {
    return 31;
  }
}

// Tests
test("Valid time", () => {
  expect(isValidTime(22, 13, 2022)).toBe(true);
});

test("Invalid time", () => {
  expect(isValidTime(22, 13, 2022)).toBe(false);
});
test("Invalid time", () => {
  expect(isValidTime(29, 2, 2021)).toBe(false);
});
test("Valid time", () => {
  expect(isValidTime(29, 2, 2020)).toBe(true);
});
test("Invalid time", () => {
  expect(isValidTime(-1, 12, 2022)).toBe(false);
});
test("Invalid time", () => {
  expect(isValidTime(23, -1, 2022)).toBe(false);
});
test("Invalid time", () => {
  expect(isValidTime(23, 13, -2000)).toBe(false);
});
