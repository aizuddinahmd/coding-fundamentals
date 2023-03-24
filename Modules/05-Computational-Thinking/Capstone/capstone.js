function getDays(date1, date2) {
  const oneDay = 24 * 60 * 60 * 1000; // one day in milliseconds
  const diffDays = Math.round(Math.abs((date2 - date1) / oneDay));
  return diffDays;
}
