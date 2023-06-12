function isValidTime(day, month, year) {
  // Perform your time validation logic here
  // For example, you can check if the day, month, and year are within valid ranges

  // Validate the year
  if (year < 0) {
    return false; // Year cannot be negative
  }

  // Validate the month
  if (month < 1 || month > 12) {
    return false; // Month should be between 1 and 12
  }

  // Validate the day based on the month
  const daysInMonth = new Date(year, month, 0).getDate(); // Get the number of days in the month
  if (day < 1 || day > daysInMonth) {
    return false; // Day should be between 1 and the number of days in the month
  }

  // Return true if the time is valid, otherwise false
  return true;
}

// Tests
test("Valid time", () => {
  expect(isValidTime(32, 12, 2022)).toBe(false);
});

test("Invalid time", () => {
  expect(isValidTime(22, 13, 2022)).toBe(false);
});
test("Invalid time", () => {
  expect(isValidTime(29, 2, 2001)).toBe(false);
});
test("Valid time", () => {
  expect(isValidTime(29, 2, 2000)).toBe(true);
});
test("Invalid time", () => {
  expect(isValidTime(-1, 12, 2000)).toBe(false);
});
test("Invalid time", () => {
  expect(isValidTime(23, -1, 2000)).toBe(false);
});
test("Invalid time", () => {
  expect(isValidTime(23, 13, -2000)).toBe(false);
});
