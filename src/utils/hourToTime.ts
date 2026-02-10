export function hourToTime(hour: number) {
  return String(hour).padStart(2, "0") + ":00"
}