export default function compareDates(start: Date, end = new Date()) {
  const diffInMillis = Math.abs(end.getTime() - start.getTime());
  const years = Math.floor(diffInMillis / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(
    (diffInMillis % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
  );

  let result = "";
  if (years > 0) {
    result += years + "y";
  }
  if (months > 0) {
    if (result !== "") {
      result += " ";
    }
    result += months + "m";
  }

  return result;
}
