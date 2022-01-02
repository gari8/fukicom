export const abridge = (text: string, count: number): string => {
  return text.trim().slice(0, count) + " ...";
};
