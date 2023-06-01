function checkTime() {
  var day = parseInt(document.getElementById("dayInput").value);
  var month = parseInt(document.getElementById("monthInput").value);
  var year = parseInt(document.getElementById("yearInput").value);

  var isValid = isValidTime(day, month, year);

  var resultElement = document.getElementById("result");
  resultElement.innerHTML = isValid ? "Valid time" : "Invalid time";
}

function isValidTime(day, month, year) {
  // Check for valid day
  if (day < 1 || day > getDaysInMonth(month, year)) {
    return false;
  }

  // Check for valid month
  if (month < 1 || month > 12) {
    return false;
  }

  // Additional logic to check for valid time

  return true;
}

function getDaysInMonth(month, year) {
  // Get the number of days in a month
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 2 && isLeapYear(year)) {
    return 29; // Leap year has 29 days in February
  }
  return daysInMonth[month - 1];
}

function isLeapYear(year) {
  // Check if it's a leap year
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
