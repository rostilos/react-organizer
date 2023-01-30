export function calculateDaysInMonth(month = 0, year = 2023) {
  const getDays = (year, month) => {
    return new Date(year, month, 0).getDate();
  };
  return getDays(year, month);
}

export function getMonthName(month = 0, year = 2023) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date(year, month);
  return monthNames[d.getMonth()];
}

export function getFirstWeekDayOfMonth(month = 0, year = 2023) {
  let day = new Date(`${year}-${month + 1}-01`).getDay();
  day = (day===0) ? 7 : day
  
  return day;
}
