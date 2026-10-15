export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function byNewest<T extends { data: { pubDate: Date } }>(a: T, b: T): number {
  return b.data.pubDate.getTime() - a.data.pubDate.getTime();
}
