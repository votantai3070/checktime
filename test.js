function isValidTime(day, month, year) {
  // Perform your time validation logic here
  // For example, you can check if the day, month, and year are within valid ranges

  // Return true if the time is valid, otherwise false
  return true;
}

test("Valid time", () => {
  expect(isValidTime(31, 5, 2023)).toBe(true);
});

test("Invalid time", () => {
  expect(isValidTime(31, 13, 2023)).toBe(false);
});
