function checkTime() {
  var day = parseInt(document.getElementById("dayInput").value);
  var month = parseInt(document.getElementById("monthInput").value);
  var year = parseInt(document.getElementById("yearInput").value);

  var isValid = isValidTime(day, month, year);

  var resultElement = document.getElementById("result");
  resultElement.innerHTML = isValid ? "Valid time" : "Invalid time";
}

function isValidTime(day, month, year) {
  // Check day, month, year have empty value
  if (isValidNumber(day) || isValidNumber(month) || isValidNumber(year)) {
    return false;
  }

  // Check day
  const dayInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > dayInMonth) {
    return false;
  }

  // Check month
  if (isValidMonth(month)) {
    return false;
  }

  // Check year
  if (isValueYear(year)) {
    return false;
  }

  return true;
}

function isValidNumber(value) {
  return isNaN(value);
}

function isValidMonth(month) {
  return month < 1 || month > 12;
}

function isValueYear(year) {
  return year < 0;
}
