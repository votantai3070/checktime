function checkTime() {
  var day = document.getElementById("dayInput").value;
  var month = document.getElementById("monthInput").value;
  var year = document.getElementById("yearInput").value;

  day = parseInt(day);
  month = parseInt(month);
  year = parseInt(year);

  var resultElement = document.getElementById("result");

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    resultElement.innerHTML = "Empty value";
    return;
  }

  var isValidDay =
    isValidNumber(day) && day >= 1 && day <= daysInMonth(month, year);
  var isValidMonth = isValidNumber(month) && month >= 1 && month <= 12;
  var isValidYear = isValidNumber(year) && year >= 0;

  if (isValidDay) {
    resultElement.innerHTML = "Day is valid";
  } else {
    resultElement.innerHTML = "Invalid day";
  }

  if (isValidMonth) {
    resultElement.innerHTML += "<br>Month is valid";
  } else {
    resultElement.innerHTML += "<br>Invalid month";
  }

  if (isValidYear) {
    resultElement.innerHTML += "<br>Year is valid";
  } else {
    resultElement.innerHTML += "<br>Invalid year";
  }
}

function isValidNumber(value) {
  return !isNaN(value);
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function daysInMonth(month, year) {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  } else {
    return 31;
  }
}
