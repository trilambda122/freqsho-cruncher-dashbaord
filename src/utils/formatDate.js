export function fDate(date) {
  const newDate = new Date(date);
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  //   options.timeZone = "UTC";
  //   options.timeZoneName = "short";
  return newDate.toLocaleDateString(options);
}

export function fTime(date) {
  const newDate = new Date(date);
  const options = {
    hour: "numeric", // numeric, 2-digit
    minute: "numeric", // numeric, 2-digit
  };

  return newDate.toLocaleTimeString([], options);
}
