export const truncateTitle = (str: string) => {
  if (str.length >= 50) {
    return str.substring(0, 50) + "...";
  }

  return str;
};
