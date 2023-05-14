// Simplified uid func. > id-timestamp-hexadecimalString
export const uid = () => `id-${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`;

// Simple scroll to top func.
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
