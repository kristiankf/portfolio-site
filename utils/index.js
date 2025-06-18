export const yearsOfExperience = () => {
  const date = new Date();
  return date.getFullYear() - 2020;
};

export const formatDate = (date) => {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  } catch (error) {
    console.error("Invalid date:", date);
    return "";
  }
};
