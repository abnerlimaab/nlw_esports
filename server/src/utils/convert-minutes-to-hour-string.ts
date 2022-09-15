export function convertMinutesToHourString(minutes: number) {
  const padUnit = (unit: number) => String(unit).padStart(2, "0");

  const hour = padUnit(Math.floor(minutes / 60));
  const minute = padUnit(minutes % 60);

  return `${hour}:${minute}`;
}
