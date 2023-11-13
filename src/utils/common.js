function getDay(date) {
  const visitDay = new Date(`2023-12-${date}`).getDay();
  return visitDay;
}

export { getDay };
