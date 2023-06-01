// Simple func. generate unique id > id-timestamp-hexadecimalString
export const uid = () => `id-${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`;

// Capitalize first letter of word
export const capitalize = str => {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
};

// Capitalize every first letter of word in sentence
export const toTitleCase = title => {
  const splitSentence = title.toLowerCase().split(' ');
  return splitSentence.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

// Simple scroll to top func.
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
