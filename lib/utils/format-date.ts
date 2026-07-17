export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export function formatYearRange(start: number, end: number): string {
  return `${start} — ${end}`;
}

export function formatMonthYear(dateString: string): string {
  const [year, month] = dateString.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}
