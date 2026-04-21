export const placeholders = {
  hero: "/assets/images/hero-placeholder.jpg",
  logo: "/assets/images/logo.png",
  event: "/assets/images/event-placeholder.jpg",
  training: "/assets/images/training-placeholder.jpg",
  conference: "/assets/images/conference-placeholder.jpg",
};

// For development, you can use placeholder images
export const getPlaceholderImage = (type: keyof typeof placeholders) => {
  return placeholders[type] || "/assets/images/placeholder.jpg";
};
