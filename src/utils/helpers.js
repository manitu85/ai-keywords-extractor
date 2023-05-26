// Simple func. generate unique id > id-timestamp-hexadecimalString
export const uid = () => `id-${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`;

// Capitalize first letter of word
export const capitalize = str => {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
};

// Simple scroll to top func.
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
