// function checkTime() {
//   var day = parseInt(document.getElementById("dayInput").value);
//   var month = parseInt(document.getElementById("monthInput").value);
//   var year = parseInt(document.getElementById("yearInput").value);

//   var isValid = isValidTime(day, month, year);

//   var resultElement = document.getElementById("result");
//   resultElement.innerHTML = isValid ? "Valid time" : "Invalid time";
// }

// function isValidTime(day, month, year) {
//   // Check day, month, year have empty value
//   if (isValidNumber(day) || isValidNumber(month) || isValidNumber(year)) {
//     return false;
//   }

//   // Check day
//   const dayInMonth = new Date(year, month, 0).getDate();
//   if (day < 1 || day > dayInMonth) {
//     return false;
//   }

//   // Check month
//   if (isValidMonth(month)) {
//     return false;
//   }

//   // Check year
//   if (year < 0) {
//     return false;
//   }

//   return true;
// }

// function isValidNumber(value) {
//   return isNaN(value);
// }

// function isValidMonth(month) {
//   return month < 1 || month > 12;
// }

// // // check day in month
// // function getDaysInMonth(month, year) {
// //   if (month === 2) {
// //     return isLeapYear(year) ? 29 : 28;
// //   } else if (month === 4 || month === 6 || month === 9 || month === 11) {
// //     return 30;
// //   } else {
// //     return 31;
// //   }
// // }

// // function isLeapYear(year) {
// //   return (year % 4 && year % 100) || year % 400;
// // }

function checkTime() {
  var day = document.getElementById("dayInput").value;
  var month = document.getElementById("monthInput").value;
  var year = document.getElementById("yearInput").value;

  day = parseInt(day);
  month = parseInt(month);
  year = parseInt(year);

  const isValid = isValidTime(day, month, year);

  var resultElement = document.getElementById("result");
  resultElement.innerHTML = isValid ? "Valid Time" : "Invalid Time";
}

function isValidTime(day, month, year) {
  //check empty input
  if (isNaN(day) || isNaN(month) || isNaN(year)) return false;

  //check day in month
  // const daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth(month, year)) return false; //check day between 1 to days in this month

  // check month
  if (month < 1 || month > 12) return false; //check month between 1 to 12

  //check year
  if (isLeadYear(year)) return false;

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
