export function durationMillisToHhMmSs(duration: number): string {
  const seconds = Math.floor(duration / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  return `${hours}h:${minutes % 60}m:${seconds % 60}s`;
}
