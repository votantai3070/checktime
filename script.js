function checkTime() {
  var day = document.getElementById("dayInput").value;
  var month = document.getElementById("monthInput").value;
  var year = document.getElementById("yearInput").value;

  day = parseInt(day);
  month = parseInt(month);
  year = parseInt(year);

  var resultElement = document.getElementById("result");

  // Check empty input
  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    resultElement.innerHTML = "Empty value";
    return;
  }

  // Check day
  var isValidDay =
    isValidNumber(day) && day >= 1 && day <= daysInMonth(month, year);

  // Check month
  var isValidMonth = isValidNumber(month) && month >= 1 && month <= 12;

  // Check year
  var isValidYear = isValidNumber(year) && year >= 0;

  if (!isValidDay) {
    resultElement.innerHTML = "Invalid day";
  }

  if (!isValidMonth) {
    resultElement.innerHTML = "Invalid month";
  }

  if (!isValidYear) {
    resultElement.innerHTML = "Invalid year";
  }
  if (isValidDay && isValidMonth && isValidYear) {
    resultElement.innerHTML += "<br>=> Date is valid";
  } else {
    resultElement.innerHTML += "<br>=> Date is invalid";
  }
}

function isValidNumber(value) {
  return !isNaN(value);
}

// Check year is leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Check days in month
function daysInMonth(month, year) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  } else {
    return 31;
  }
}

// Clear form
function reloadForm() {
  document.getElementById("dayInput").value = "";
  document.getElementById("monthInput").value = "";
  document.getElementById("yearInput").value = "";

  document.getElementById("result").innerHTML = "";
}
