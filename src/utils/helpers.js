export function extractDate(timestamp) {
  const date = new Date(timestamp);

  const year = date.getFullYear();
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
  const month = monthNames[date.getMonth()]; // Get the month name
  const day = String(date.getDate()).padStart(2, "0");

  return `${day} ${month} ${year}`;
}
export function extractTime(dateString) {
  const date = new Date(dateString);
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  const strMinutes = minutes < 10 ? "0" + minutes : minutes;
  const strSeconds = seconds < 10 ? "0" + seconds : seconds;

  return `${hours}:${strMinutes}:${strSeconds} ${ampm}`;
}
