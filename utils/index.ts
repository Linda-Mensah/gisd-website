export * from "./constants";

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat("en-GH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};
